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

export const getUpdatePetMock = () => ({category: faker.helpers.arrayElement([{id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.word.sample(), undefined])}, undefined]), id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.word.sample(), photoUrls: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.word.sample())), status: faker.helpers.arrayElement([faker.helpers.arrayElement(['available','pending','sold']), undefined]), tags: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.word.sample(), undefined])})), undefined])})

export const getAddPetMock = () => ({category: faker.helpers.arrayElement([{id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.word.sample(), undefined])}, undefined]), id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.word.sample(), photoUrls: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.word.sample())), status: faker.helpers.arrayElement([faker.helpers.arrayElement(['available','pending','sold']), undefined]), tags: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.word.sample(), undefined])})), undefined])})

export const getFindPetsByStatusMock = () => (Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({category: faker.helpers.arrayElement([{id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.word.sample(), undefined])}, undefined]), id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.word.sample(), photoUrls: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.word.sample())), status: faker.helpers.arrayElement([faker.helpers.arrayElement(['available','pending','sold']), undefined]), tags: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.word.sample(), undefined])})), undefined])})))

export const getFindPetsByTagsMock = () => (Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({category: faker.helpers.arrayElement([{id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.word.sample(), undefined])}, undefined]), id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.word.sample(), photoUrls: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.word.sample())), status: faker.helpers.arrayElement([faker.helpers.arrayElement(['available','pending','sold']), undefined]), tags: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.word.sample(), undefined])})), undefined])})))

export const getGetPetByIdMock = () => ({category: faker.helpers.arrayElement([{id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.word.sample(), undefined])}, undefined]), id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.word.sample(), photoUrls: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.word.sample())), status: faker.helpers.arrayElement([faker.helpers.arrayElement(['available','pending','sold']), undefined]), tags: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.word.sample(), undefined])})), undefined])})

export const getUploadFileMock = () => ({code: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), message: faker.helpers.arrayElement([faker.word.sample(), undefined]), type: faker.helpers.arrayElement([faker.word.sample(), undefined])})

export const getGetInventoryMock = () => ({
        '[faker.string.alphanumeric(5)]': faker.number.int({min: undefined, max: undefined})
      })

export const getPlaceOrderMock = () => ({complete: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), petId: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), quantity: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), shipDate: faker.helpers.arrayElement([`${faker.date.past().toISOString().split('.')[0]}Z`, undefined]), status: faker.helpers.arrayElement([faker.helpers.arrayElement(['placed','approved','delivered']), undefined])})

export const getGetOrderByIdMock = () => ({complete: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), petId: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), quantity: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), shipDate: faker.helpers.arrayElement([`${faker.date.past().toISOString().split('.')[0]}Z`, undefined]), status: faker.helpers.arrayElement([faker.helpers.arrayElement(['placed','approved','delivered']), undefined])})

export const getCreateUsersWithListInputMock = () => ({email: faker.helpers.arrayElement([faker.word.sample(), undefined]), firstName: faker.helpers.arrayElement([faker.word.sample(), undefined]), id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), lastName: faker.helpers.arrayElement([faker.word.sample(), undefined]), password: faker.helpers.arrayElement([faker.word.sample(), undefined]), phone: faker.helpers.arrayElement([faker.word.sample(), undefined]), username: faker.helpers.arrayElement([faker.word.sample(), undefined]), userStatus: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined])})

export const getLoginUserMock = () => (faker.word.sample())

export const getGetUserByNameMock = () => ({email: faker.helpers.arrayElement([faker.word.sample(), undefined]), firstName: faker.helpers.arrayElement([faker.word.sample(), undefined]), id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), lastName: faker.helpers.arrayElement([faker.word.sample(), undefined]), password: faker.helpers.arrayElement([faker.word.sample(), undefined]), phone: faker.helpers.arrayElement([faker.word.sample(), undefined]), username: faker.helpers.arrayElement([faker.word.sample(), undefined]), userStatus: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined])})

export const getOpenApiMSW = () => [
http.put('*/pet', async () => {
        await delay(1000);
        return new HttpResponse(JSON.stringify(getUpdatePetMock()),
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      }),http.post('*/pet', async () => {
        await delay(1000);
        return new HttpResponse(JSON.stringify(getAddPetMock()),
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      }),http.get('*/pet/findByStatus', async () => {
        await delay(1000);
        return new HttpResponse(JSON.stringify(getFindPetsByStatusMock()),
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      }),http.get('*/pet/findByTags', async () => {
        await delay(1000);
        return new HttpResponse(JSON.stringify(getFindPetsByTagsMock()),
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      }),http.get('*/pet/:petId', async () => {
        await delay(1000);
        return new HttpResponse(JSON.stringify(getGetPetByIdMock()),
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      }),http.post('*/pet/:petId', async () => {
        await delay(1000);
        return new HttpResponse(null,
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      }),http.delete('*/pet/:petId', async () => {
        await delay(1000);
        return new HttpResponse(null,
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      }),http.post('*/pet/:petId/uploadImage', async () => {
        await delay(1000);
        return new HttpResponse(JSON.stringify(getUploadFileMock()),
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      }),http.get('*/store/inventory', async () => {
        await delay(1000);
        return new HttpResponse(JSON.stringify(getGetInventoryMock()),
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      }),http.post('*/store/order', async () => {
        await delay(1000);
        return new HttpResponse(JSON.stringify(getPlaceOrderMock()),
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      }),http.get('*/store/order/:orderId', async () => {
        await delay(1000);
        return new HttpResponse(JSON.stringify(getGetOrderByIdMock()),
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      }),http.delete('*/store/order/:orderId', async () => {
        await delay(1000);
        return new HttpResponse(null,
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      }),http.post('*/user', async () => {
        await delay(1000);
        return new HttpResponse(null,
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      }),http.post('*/user/createWithList', async () => {
        await delay(1000);
        return new HttpResponse(JSON.stringify(getCreateUsersWithListInputMock()),
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      }),http.get('*/user/login', async () => {
        await delay(1000);
        return new HttpResponse(JSON.stringify(getLoginUserMock()),
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      }),http.get('*/user/logout', async () => {
        await delay(1000);
        return new HttpResponse(null,
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      }),http.get('*/user/:username', async () => {
        await delay(1000);
        return new HttpResponse(JSON.stringify(getGetUserByNameMock()),
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      }),http.put('*/user/:username', async () => {
        await delay(1000);
        return new HttpResponse(null,
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      }),http.delete('*/user/:username', async () => {
        await delay(1000);
        return new HttpResponse(null,
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      }),]
