import { getAuthHeader } from "@/auth/auth-headers";
import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  Method,
} from "axios";
import chalk from "chalk";
import { StatusCodes } from "http-status-codes";
import { BaseResponse } from "./types";
import store from "store2";
import { authSecret } from "@/crypto";

interface IPendingVal {
  controller: AbortController;
  time: number; // ms
}

type IPending = Record<string, IPendingVal>;

class DuplicateRequestsController {
  private pending: IPending;
  private expire: number;
  constructor() {
    this.pending = {};
    /** 接口最大存储时间（毫秒） */
    this.expire = 2000;
  }
  hasPending = (key: string) => this.pending[key];
  addPending = (key: string, controller: AbortController) => {
    /** 过滤过期接口 */
    this.pending = Object.entries(this.pending).reduce(
      (acc: IPending, [key, val]) => {
        const duration = Date.now() - val.time;
        if (duration < this.expire) {
          acc[key] = val;
        }
        return acc;
      },
      {}
    );
    if (this.hasPending(key)) {
      console.warn(`${key} 连续请求，本次被忽略`);
      controller.abort();
    } else {
      this.pending[key] = {
        controller: controller,
        time: Date.now(),
      };
    }
  };

  /** 删除当前请求记录 */
  removePending = (key: string) => {
    Reflect.deleteProperty(this.pending, key);
  };

  /** 短时间内重复请求只保留最后一次，其余中断 */
  /** 生成一个由url，method和data组成的字符串请求key */
  genRequestKey = (
    config: AxiosRequestConfig,
    flag?: "request" | "response"
  ) => {
    if (!config) {
      return `${+new Date()}`.valueOf();
    }
    const uri = axios.getUri(config);
    const key = `${config.method?.toUpperCase()} ${uri}`;
    if (!import.meta.env.PROD) {
      console.log(chalk.green(`${flag}: ${key}`));
    }
    return key;
  };
}

const duplicateRequestsController = new DuplicateRequestsController();

const axReqConfig: AxiosRequestConfig = {
  // 自定义 url vite 环境变量
  baseURL: import.meta.env.VITE_AXIOS_BASE_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  // withCredentials: true,
  validateStatus: (status) => {
    if (status > StatusCodes.BAD_REQUEST) {
      if (status === StatusCodes.UNAUTHORIZED) {
        // What is “401 Error Unauthorized Access” and How to Fix it?
        // https://www.siteground.com/kb/error-401/
        // 异常统一报错
      } else {
        // 异常统一报错
      }
    }
    return status >= StatusCodes.OK && status < StatusCodes.MULTIPLE_CHOICES;
  },
  paramsSerializer: {
    serialize: (params) => {
      return new URLSearchParams(params).toString();
    },
  },
};

export const AXIOS_INSTANCE = axios.create(axReqConfig);

AXIOS_INSTANCE.interceptors.request.use((c) => {
  if (c.headers) {
    // headers 加 token
    c.headers = {
      ...c.headers,
      ...getAuthHeader(authSecret.decrypt(store.get("token"))),
    } as AxiosRequestHeaders;
  }
  const controller = new AbortController();
  const key = duplicateRequestsController.genRequestKey(c, "request");
  duplicateRequestsController.addPending(key, controller);
  return { ...c, signal: controller.signal };
}, console.warn);

AXIOS_INSTANCE.interceptors.response.use(
  (res: AxiosResponse<BaseResponse>) => {
    const key = duplicateRequestsController.genRequestKey(
      { ...res.config },
      "response"
    );
    duplicateRequestsController.removePending(key);
    const resData = res.data;

    if (resData.code !== "SUCCESS") {
      if (resData.message) {
        // 处理业务失败情况
      }
    }
    // 需要返回完整 response 给 openapi codegen
    return res;
  },
  (error) => {
    console.warn(error.message);
  }
);

export const ax = <T>(config: AxiosRequestConfig): Promise<T> => {
  return AXIOS_INSTANCE({
    ...config,
  })
    .then(({ data }) => data)
    .catch(console.warn);
};

const request = (method: Method) => {
  return async <T, D>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const requestHandle: AxiosRequestConfig = {
      ...axReqConfig,
      url,
      method,
      ...config,
    };
    if (method.toUpperCase() === "GET") {
      requestHandle.params = data;
    }
    if (method.toUpperCase() === "POST") {
      requestHandle.data = { data };
    }
    return AXIOS_INSTANCE.request(requestHandle);
  };
};

export const axget = request("GET");
export const axpost = request("POST");

export default ax;
