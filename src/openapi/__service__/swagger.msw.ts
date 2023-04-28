/**
 * 此类型文件由swagger解析自动生成，请勿修改
 * <==================================>
 * Swagger Petstore - OpenAPI 3.0
 * OpenAPI spec version: 1.0.11
 * This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
 * Swagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we've switched to the desi
 * gn first approach!
 * You can now help us improve the API whether it's by making changes to the definition itself or to the code.
 * That way, with time, we can improve the API in general, and expose some of the new features in OAS3.
 * _If you're looking for the Swagger 2.0/OAS 2.0 version of Petstore, then click [here](https://editor.swagger.io/?url=htt
 * ps://petstore.swagger.io/v2/swagger.yaml). Alternatively, you can load via the `Edit > Load Petstore OAS 2.0` menu optio
 * n!_
 * Some useful links:
 * - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
 * - [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/res
 * ources/openapi.yaml)
 */
import { rest } from 'msw';
import { faker } from '@faker-js/faker';

export const getUpdatePetMock = () => ({
  id: faker.helpers.arrayElement([
    faker.datatype.number({ min: undefined, max: undefined }),
    undefined,
  ]),
  name: faker.random.word(),
  category: faker.helpers.arrayElement([
    {
      id: faker.helpers.arrayElement([
        faker.datatype.number({ min: undefined, max: undefined }),
        undefined,
      ]),
      name: faker.helpers.arrayElement([faker.random.word(), undefined]),
    },
    undefined,
  ]),
  photoUrls: Array.from(
    { length: faker.datatype.number({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => faker.random.word()),
  tags: faker.helpers.arrayElement([
    Array.from(
      { length: faker.datatype.number({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      id: faker.helpers.arrayElement([
        faker.datatype.number({ min: undefined, max: undefined }),
        undefined,
      ]),
      name: faker.helpers.arrayElement([faker.random.word(), undefined]),
    })),
    undefined,
  ]),
  status: faker.helpers.arrayElement([
    faker.helpers.arrayElement(['available', 'pending', 'sold']),
    undefined,
  ]),
});

export const getAddPetMock = () => ({
  id: faker.helpers.arrayElement([
    faker.datatype.number({ min: undefined, max: undefined }),
    undefined,
  ]),
  name: faker.random.word(),
  category: faker.helpers.arrayElement([
    {
      id: faker.helpers.arrayElement([
        faker.datatype.number({ min: undefined, max: undefined }),
        undefined,
      ]),
      name: faker.helpers.arrayElement([faker.random.word(), undefined]),
    },
    undefined,
  ]),
  photoUrls: Array.from(
    { length: faker.datatype.number({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => faker.random.word()),
  tags: faker.helpers.arrayElement([
    Array.from(
      { length: faker.datatype.number({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      id: faker.helpers.arrayElement([
        faker.datatype.number({ min: undefined, max: undefined }),
        undefined,
      ]),
      name: faker.helpers.arrayElement([faker.random.word(), undefined]),
    })),
    undefined,
  ]),
  status: faker.helpers.arrayElement([
    faker.helpers.arrayElement(['available', 'pending', 'sold']),
    undefined,
  ]),
});

export const getFindPetsByStatusMock = () =>
  Array.from(
    { length: faker.datatype.number({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    id: faker.helpers.arrayElement([
      faker.datatype.number({ min: undefined, max: undefined }),
      undefined,
    ]),
    name: faker.random.word(),
    category: faker.helpers.arrayElement([
      {
        id: faker.helpers.arrayElement([
          faker.datatype.number({ min: undefined, max: undefined }),
          undefined,
        ]),
        name: faker.helpers.arrayElement([faker.random.word(), undefined]),
      },
      undefined,
    ]),
    photoUrls: Array.from(
      { length: faker.datatype.number({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => faker.random.word()),
    tags: faker.helpers.arrayElement([
      Array.from(
        { length: faker.datatype.number({ min: 1, max: 10 }) },
        (_, i) => i + 1,
      ).map(() => ({
        id: faker.helpers.arrayElement([
          faker.datatype.number({ min: undefined, max: undefined }),
          undefined,
        ]),
        name: faker.helpers.arrayElement([faker.random.word(), undefined]),
      })),
      undefined,
    ]),
    status: faker.helpers.arrayElement([
      faker.helpers.arrayElement(['available', 'pending', 'sold']),
      undefined,
    ]),
  }));

export const getFindPetsByTagsMock = () =>
  Array.from(
    { length: faker.datatype.number({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    id: faker.helpers.arrayElement([
      faker.datatype.number({ min: undefined, max: undefined }),
      undefined,
    ]),
    name: faker.random.word(),
    category: faker.helpers.arrayElement([
      {
        id: faker.helpers.arrayElement([
          faker.datatype.number({ min: undefined, max: undefined }),
          undefined,
        ]),
        name: faker.helpers.arrayElement([faker.random.word(), undefined]),
      },
      undefined,
    ]),
    photoUrls: Array.from(
      { length: faker.datatype.number({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => faker.random.word()),
    tags: faker.helpers.arrayElement([
      Array.from(
        { length: faker.datatype.number({ min: 1, max: 10 }) },
        (_, i) => i + 1,
      ).map(() => ({
        id: faker.helpers.arrayElement([
          faker.datatype.number({ min: undefined, max: undefined }),
          undefined,
        ]),
        name: faker.helpers.arrayElement([faker.random.word(), undefined]),
      })),
      undefined,
    ]),
    status: faker.helpers.arrayElement([
      faker.helpers.arrayElement(['available', 'pending', 'sold']),
      undefined,
    ]),
  }));

export const getGetPetByIdMock = () => ({
  id: faker.helpers.arrayElement([
    faker.datatype.number({ min: undefined, max: undefined }),
    undefined,
  ]),
  name: faker.random.word(),
  category: faker.helpers.arrayElement([
    {
      id: faker.helpers.arrayElement([
        faker.datatype.number({ min: undefined, max: undefined }),
        undefined,
      ]),
      name: faker.helpers.arrayElement([faker.random.word(), undefined]),
    },
    undefined,
  ]),
  photoUrls: Array.from(
    { length: faker.datatype.number({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => faker.random.word()),
  tags: faker.helpers.arrayElement([
    Array.from(
      { length: faker.datatype.number({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      id: faker.helpers.arrayElement([
        faker.datatype.number({ min: undefined, max: undefined }),
        undefined,
      ]),
      name: faker.helpers.arrayElement([faker.random.word(), undefined]),
    })),
    undefined,
  ]),
  status: faker.helpers.arrayElement([
    faker.helpers.arrayElement(['available', 'pending', 'sold']),
    undefined,
  ]),
});

export const getUploadFileMock = () => ({
  code: faker.helpers.arrayElement([
    faker.datatype.number({ min: undefined, max: undefined }),
    undefined,
  ]),
  type: faker.helpers.arrayElement([faker.random.word(), undefined]),
  message: faker.helpers.arrayElement([faker.random.word(), undefined]),
});

export const getGetInventoryMock = () => ({
  clfuj8bjw00009bcb6cbl1e97: faker.datatype.number({
    min: undefined,
    max: undefined,
  }),
});

export const getPlaceOrderMock = () => ({
  id: faker.helpers.arrayElement([
    faker.datatype.number({ min: undefined, max: undefined }),
    undefined,
  ]),
  petId: faker.helpers.arrayElement([
    faker.datatype.number({ min: undefined, max: undefined }),
    undefined,
  ]),
  quantity: faker.helpers.arrayElement([
    faker.datatype.number({ min: undefined, max: undefined }),
    undefined,
  ]),
  shipDate: faker.helpers.arrayElement([
    `${faker.date.past().toISOString().split('.')[0]}Z`,
    undefined,
  ]),
  status: faker.helpers.arrayElement([
    faker.helpers.arrayElement(['placed', 'approved', 'delivered']),
    undefined,
  ]),
  complete: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]),
});

export const getGetOrderByIdMock = () => ({
  id: faker.helpers.arrayElement([
    faker.datatype.number({ min: undefined, max: undefined }),
    undefined,
  ]),
  petId: faker.helpers.arrayElement([
    faker.datatype.number({ min: undefined, max: undefined }),
    undefined,
  ]),
  quantity: faker.helpers.arrayElement([
    faker.datatype.number({ min: undefined, max: undefined }),
    undefined,
  ]),
  shipDate: faker.helpers.arrayElement([
    `${faker.date.past().toISOString().split('.')[0]}Z`,
    undefined,
  ]),
  status: faker.helpers.arrayElement([
    faker.helpers.arrayElement(['placed', 'approved', 'delivered']),
    undefined,
  ]),
  complete: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]),
});

export const getCreateUsersWithListInputMock = () => ({
  id: faker.helpers.arrayElement([
    faker.datatype.number({ min: undefined, max: undefined }),
    undefined,
  ]),
  username: faker.helpers.arrayElement([faker.random.word(), undefined]),
  firstName: faker.helpers.arrayElement([faker.random.word(), undefined]),
  lastName: faker.helpers.arrayElement([faker.random.word(), undefined]),
  email: faker.helpers.arrayElement([faker.random.word(), undefined]),
  password: faker.helpers.arrayElement([faker.random.word(), undefined]),
  phone: faker.helpers.arrayElement([faker.random.word(), undefined]),
  userStatus: faker.helpers.arrayElement([
    faker.datatype.number({ min: undefined, max: undefined }),
    undefined,
  ]),
});

export const getLoginUserMock = () => faker.random.word();

export const getGetUserByNameMock = () => ({
  id: faker.helpers.arrayElement([
    faker.datatype.number({ min: undefined, max: undefined }),
    undefined,
  ]),
  username: faker.helpers.arrayElement([faker.random.word(), undefined]),
  firstName: faker.helpers.arrayElement([faker.random.word(), undefined]),
  lastName: faker.helpers.arrayElement([faker.random.word(), undefined]),
  email: faker.helpers.arrayElement([faker.random.word(), undefined]),
  password: faker.helpers.arrayElement([faker.random.word(), undefined]),
  phone: faker.helpers.arrayElement([faker.random.word(), undefined]),
  userStatus: faker.helpers.arrayElement([
    faker.datatype.number({ min: undefined, max: undefined }),
    undefined,
  ]),
});

export const getOpenApiMSW = () => [
  rest.put('*/pet', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getUpdatePetMock()),
    );
  }),
  rest.post('*/pet', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getAddPetMock()),
    );
  }),
  rest.get('*/pet/findByStatus', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getFindPetsByStatusMock()),
    );
  }),
  rest.get('*/pet/findByTags', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getFindPetsByTagsMock()),
    );
  }),
  rest.get('*/pet/:petId', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getGetPetByIdMock()),
    );
  }),
  rest.post('*/pet/:petId', (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'));
  }),
  rest.delete('*/pet/:petId', (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'));
  }),
  rest.post('*/pet/:petId/uploadImage', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getUploadFileMock()),
    );
  }),
  rest.get('*/store/inventory', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getGetInventoryMock()),
    );
  }),
  rest.post('*/store/order', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getPlaceOrderMock()),
    );
  }),
  rest.get('*/store/order/:orderId', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getGetOrderByIdMock()),
    );
  }),
  rest.delete('*/store/order/:orderId', (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'));
  }),
  rest.post('*/user', (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'));
  }),
  rest.post('*/user/createWithList', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getCreateUsersWithListInputMock()),
    );
  }),
  rest.get('*/user/login', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getLoginUserMock()),
    );
  }),
  rest.get('*/user/logout', (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'));
  }),
  rest.get('*/user/:username', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getGetUserByNameMock()),
    );
  }),
  rest.put('*/user/:username', (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'));
  }),
  rest.delete('*/user/:username', (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'));
  }),
];
