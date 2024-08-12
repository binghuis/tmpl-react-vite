/**
 * 此类型文件由 Swagger 解析自动生成，请勿修改
 * --------------------------------------
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
import {
  faker
} from '@faker-js/faker'
import {
  HttpResponse,
  delay,
  http
} from 'msw'
import type {
  ApiResponse,
  GetInventory200,
  Order,
  Pet,
  User
} from './swagger.schemas'

export const getUpdatePetResponseMock = (overrideResponse: any = {}): Pet => ({category: faker.helpers.arrayElement([{id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.word.sample(), undefined]), ...overrideResponse}, undefined]), id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.word.sample(), photoUrls: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.word.sample())), status: faker.helpers.arrayElement([faker.helpers.arrayElement(['available','pending','sold'] as const), undefined]), tags: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.word.sample(), undefined]), ...overrideResponse})), undefined]), ...overrideResponse})

export const getAddPetResponseMock = (overrideResponse: any = {}): Pet => ({category: faker.helpers.arrayElement([{id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.word.sample(), undefined]), ...overrideResponse}, undefined]), id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.word.sample(), photoUrls: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.word.sample())), status: faker.helpers.arrayElement([faker.helpers.arrayElement(['available','pending','sold'] as const), undefined]), tags: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.word.sample(), undefined]), ...overrideResponse})), undefined]), ...overrideResponse})

export const getFindPetsByStatusResponseMock = (overrideResponse: any = {}): Pet[] => (Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({category: faker.helpers.arrayElement([{id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.word.sample(), undefined]), ...overrideResponse}, undefined]), id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.word.sample(), photoUrls: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.word.sample())), status: faker.helpers.arrayElement([faker.helpers.arrayElement(['available','pending','sold'] as const), undefined]), tags: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.word.sample(), undefined]), ...overrideResponse})), undefined]), ...overrideResponse})))

export const getFindPetsByTagsResponseMock = (overrideResponse: any = {}): Pet[] => (Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({category: faker.helpers.arrayElement([{id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.word.sample(), undefined]), ...overrideResponse}, undefined]), id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.word.sample(), photoUrls: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.word.sample())), status: faker.helpers.arrayElement([faker.helpers.arrayElement(['available','pending','sold'] as const), undefined]), tags: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.word.sample(), undefined]), ...overrideResponse})), undefined]), ...overrideResponse})))

export const getGetPetByIdResponseMock = (overrideResponse: any = {}): Pet => ({category: faker.helpers.arrayElement([{id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.word.sample(), undefined]), ...overrideResponse}, undefined]), id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.word.sample(), photoUrls: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.word.sample())), status: faker.helpers.arrayElement([faker.helpers.arrayElement(['available','pending','sold'] as const), undefined]), tags: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.word.sample(), undefined]), ...overrideResponse})), undefined]), ...overrideResponse})

export const getUploadFileResponseMock = (overrideResponse: any = {}): ApiResponse => ({code: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), message: faker.helpers.arrayElement([faker.word.sample(), undefined]), type: faker.helpers.arrayElement([faker.word.sample(), undefined]), ...overrideResponse})

export const getGetInventoryResponseMock = (): GetInventory200 => ({
        [faker.string.alphanumeric(5)]: faker.number.int({min: undefined, max: undefined})
      })

export const getPlaceOrderResponseMock = (overrideResponse: any = {}): Order => ({complete: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), petId: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), quantity: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), shipDate: faker.helpers.arrayElement([`${faker.date.past().toISOString().split('.')[0]}Z`, undefined]), status: faker.helpers.arrayElement([faker.helpers.arrayElement(['placed','approved','delivered'] as const), undefined]), ...overrideResponse})

export const getGetOrderByIdResponseMock = (overrideResponse: any = {}): Order => ({complete: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), petId: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), quantity: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), shipDate: faker.helpers.arrayElement([`${faker.date.past().toISOString().split('.')[0]}Z`, undefined]), status: faker.helpers.arrayElement([faker.helpers.arrayElement(['placed','approved','delivered'] as const), undefined]), ...overrideResponse})

export const getCreateUsersWithListInputResponseMock = (overrideResponse: any = {}): User => ({email: faker.helpers.arrayElement([faker.word.sample(), undefined]), firstName: faker.helpers.arrayElement([faker.word.sample(), undefined]), id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), lastName: faker.helpers.arrayElement([faker.word.sample(), undefined]), password: faker.helpers.arrayElement([faker.word.sample(), undefined]), phone: faker.helpers.arrayElement([faker.word.sample(), undefined]), username: faker.helpers.arrayElement([faker.word.sample(), undefined]), userStatus: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), ...overrideResponse})

export const getLoginUserResponseMock = (): string => (faker.word.sample())

export const getGetUserByNameResponseMock = (overrideResponse: any = {}): User => ({email: faker.helpers.arrayElement([faker.word.sample(), undefined]), firstName: faker.helpers.arrayElement([faker.word.sample(), undefined]), id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), lastName: faker.helpers.arrayElement([faker.word.sample(), undefined]), password: faker.helpers.arrayElement([faker.word.sample(), undefined]), phone: faker.helpers.arrayElement([faker.word.sample(), undefined]), username: faker.helpers.arrayElement([faker.word.sample(), undefined]), userStatus: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), ...overrideResponse})


export const getUpdatePetMockHandler = (overrideResponse?: Pet) => {
  return http.put('*/pet', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse ? overrideResponse : getUpdatePetResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getAddPetMockHandler = (overrideResponse?: Pet) => {
  return http.post('*/pet', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse ? overrideResponse : getAddPetResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getFindPetsByStatusMockHandler = (overrideResponse?: Pet[]) => {
  return http.get('*/pet/findByStatus', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse ? overrideResponse : getFindPetsByStatusResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getFindPetsByTagsMockHandler = (overrideResponse?: Pet[]) => {
  return http.get('*/pet/findByTags', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse ? overrideResponse : getFindPetsByTagsResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getGetPetByIdMockHandler = (overrideResponse?: Pet) => {
  return http.get('*/pet/:petId', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse ? overrideResponse : getGetPetByIdResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getUpdatePetWithFormMockHandler = () => {
  return http.post('*/pet/:petId', async () => {
    await delay(1000);
    return new HttpResponse(null,
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getDeletePetMockHandler = () => {
  return http.delete('*/pet/:petId', async () => {
    await delay(1000);
    return new HttpResponse(null,
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getUploadFileMockHandler = (overrideResponse?: ApiResponse) => {
  return http.post('*/pet/:petId/uploadImage', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse ? overrideResponse : getUploadFileResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getGetInventoryMockHandler = (overrideResponse?: GetInventory200) => {
  return http.get('*/store/inventory', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse ? overrideResponse : getGetInventoryResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getPlaceOrderMockHandler = (overrideResponse?: Order) => {
  return http.post('*/store/order', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse ? overrideResponse : getPlaceOrderResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getGetOrderByIdMockHandler = (overrideResponse?: Order) => {
  return http.get('*/store/order/:orderId', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse ? overrideResponse : getGetOrderByIdResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getDeleteOrderMockHandler = () => {
  return http.delete('*/store/order/:orderId', async () => {
    await delay(1000);
    return new HttpResponse(null,
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getCreateUserMockHandler = () => {
  return http.post('*/user', async () => {
    await delay(1000);
    return new HttpResponse(null,
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getCreateUsersWithListInputMockHandler = (overrideResponse?: User) => {
  return http.post('*/user/createWithList', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse ? overrideResponse : getCreateUsersWithListInputResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getLoginUserMockHandler = (overrideResponse?: string) => {
  return http.get('*/user/login', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse ? overrideResponse : getLoginUserResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getLogoutUserMockHandler = () => {
  return http.get('*/user/logout', async () => {
    await delay(1000);
    return new HttpResponse(null,
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getGetUserByNameMockHandler = (overrideResponse?: User) => {
  return http.get('*/user/:username', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse ? overrideResponse : getGetUserByNameResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getUpdateUserMockHandler = () => {
  return http.put('*/user/:username', async () => {
    await delay(1000);
    return new HttpResponse(null,
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getDeleteUserMockHandler = () => {
  return http.delete('*/user/:username', async () => {
    await delay(1000);
    return new HttpResponse(null,
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}
export const getOpenApiMock = () => [
  getUpdatePetMockHandler(),
  getAddPetMockHandler(),
  getFindPetsByStatusMockHandler(),
  getFindPetsByTagsMockHandler(),
  getGetPetByIdMockHandler(),
  getUpdatePetWithFormMockHandler(),
  getDeletePetMockHandler(),
  getUploadFileMockHandler(),
  getGetInventoryMockHandler(),
  getPlaceOrderMockHandler(),
  getGetOrderByIdMockHandler(),
  getDeleteOrderMockHandler(),
  getCreateUserMockHandler(),
  getCreateUsersWithListInputMockHandler(),
  getLoginUserMockHandler(),
  getLogoutUserMockHandler(),
  getGetUserByNameMockHandler(),
  getUpdateUserMockHandler(),
  getDeleteUserMockHandler()]
