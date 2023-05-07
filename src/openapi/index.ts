export * from "./__service__/swagger.schemas";

// 以上部分为自动生成，以下为自定义配置
import { getOpenApi } from "./__service__/swagger";
import { getOpenApiMSW } from "./__service__/swagger.msw";

export const mock = getOpenApiMSW();
export const openapi = getOpenApi();
