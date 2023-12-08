import { message } from '@/components/antd-static';
import { useAuthStore } from '@/stores/auth';
import { getAuthHeader } from '@/utils/headers';
import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse, Method } from 'axios';
import { consola } from 'consola';
import { StatusCodes } from 'http-status-codes';
import { BaseResponse } from './types';

const xConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_AXIOS_BASE_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  // withCredentials: true,
  validateStatus: (status) => {
    if (status > StatusCodes.BAD_REQUEST) {
      if (status === StatusCodes.UNAUTHORIZED) {
        // What is “401 Error Unauthorized Access” and How to Fix it?
        // https://www.siteground.com/kb/error-401/
        // 异常统一报错
        message.error('账号未鉴权');
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

export const xInstance = axios.create(xConfig);

xInstance.interceptors.request.use((cfg) => {
  if (cfg.headers) {
    cfg.headers = {
      ...cfg.headers,
      ...getAuthHeader(useAuthStore.getState().token),
    } as AxiosRequestHeaders;
  }
  return cfg;
}, consola.warn);

xInstance.interceptors.response.use(
  (res: AxiosResponse<BaseResponse>) => {
    const resData = res.data;

    if (resData.code !== 'SUCCESS') {
      if (resData.message) {
        // 处理业务失败情况
      }
    }
    // 需要返回完整 response 给 openapi codegen
    return res;
  },
  (error) => {
    consola.warn(error.message);
  },
);

export const x = <T>(config: AxiosRequestConfig): Promise<T> => {
  const res = xInstance({
    ...config,
  })
    .then(({ data }) => data)
    .catch(consola.warn);

  return res;
};

const request = (method: Method) => {
  return async <T, D>(url: string, data?: D, cfg?: AxiosRequestConfig): Promise<T> => {
    const requestHandle: AxiosRequestConfig = {
      ...xConfig,
      url,
      method,
      ...cfg,
    };
    if (method.toUpperCase() === 'GET') {
      requestHandle.params = data;
    }
    if (method.toUpperCase() === 'POST') {
      requestHandle.data = { data };
    }
    return xInstance.request(requestHandle);
  };
};

export const xget = request('GET');
export const xpost = request('POST');

export default x;
