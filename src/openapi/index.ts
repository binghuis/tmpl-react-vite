export * from './__service__/swagger.schemas';

import { getOpenApi } from './__service__/swagger';
import { getOpenApiMock } from './__service__/swagger.msw';

export const mock = getOpenApiMock();
export const openapi = getOpenApi();
