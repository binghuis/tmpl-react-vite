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
import type {
  ApiResponse,
  FindPetsByStatusParams,
  FindPetsByTagsParams,
  GetInventory200,
  LoginUserParams,
  Order,
  Pet,
  UpdatePetWithFormParams,
  UploadFileParams,
  User
} from './swagger.schemas'
import { x } from '../client';



  export const getOpenApi = () => {
/**
 * Update an existing pet by Id
 * @summary Update an existing pet
 */
const updatePet = (
    pet: Pet,
 ) => {
      return x<Pet>(
      {url: `/pet`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: pet
    },
      );
    }
  
/**
 * Add a new pet to the store
 * @summary Add a new pet to the store
 */
const addPet = (
    pet: Pet,
 ) => {
      return x<Pet>(
      {url: `/pet`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: pet
    },
      );
    }
  
/**
 * Multiple status values can be provided with comma separated strings
 * @summary Finds Pets by status
 */
const findPetsByStatus = (
    params?: FindPetsByStatusParams,
 ) => {
      return x<Pet[]>(
      {url: `/pet/findByStatus`, method: 'GET',
        params
    },
      );
    }
  
/**
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @summary Finds Pets by tags
 */
const findPetsByTags = (
    params?: FindPetsByTagsParams,
 ) => {
      return x<Pet[]>(
      {url: `/pet/findByTags`, method: 'GET',
        params
    },
      );
    }
  
/**
 * Returns a single pet
 * @summary Find pet by ID
 */
const getPetById = (
    petId: number,
 ) => {
      return x<Pet>(
      {url: `/pet/${petId}`, method: 'GET'
    },
      );
    }
  
/**
 * @summary Updates a pet in the store with form data
 */
const updatePetWithForm = (
    petId: number,
    params?: UpdatePetWithFormParams,
 ) => {
      return x<unknown>(
      {url: `/pet/${petId}`, method: 'POST',
        params
    },
      );
    }
  
/**
 * delete a pet
 * @summary Deletes a pet
 */
const deletePet = (
    petId: number,
 ) => {
      return x<unknown>(
      {url: `/pet/${petId}`, method: 'DELETE'
    },
      );
    }
  
/**
 * @summary uploads an image
 */
const uploadFile = (
    petId: number,
    uploadFilePayload: Blob,
    params?: UploadFileParams,
 ) => {
      return x<ApiResponse>(
      {url: `/pet/${petId}/uploadImage`, method: 'POST',
      headers: {'Content-Type': 'application/octet-stream', },
      data: uploadFilePayload,
        params
    },
      );
    }
  
/**
 * Returns a map of status codes to quantities
 * @summary Returns pet inventories by status
 */
const getInventory = (
    
 ) => {
      return x<GetInventory200>(
      {url: `/store/inventory`, method: 'GET'
    },
      );
    }
  
/**
 * Place a new order in the store
 * @summary Place an order for a pet
 */
const placeOrder = (
    order: Order,
 ) => {
      return x<Order>(
      {url: `/store/order`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: order
    },
      );
    }
  
/**
 * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
 * @summary Find purchase order by ID
 */
const getOrderById = (
    orderId: number,
 ) => {
      return x<Order>(
      {url: `/store/order/${orderId}`, method: 'GET'
    },
      );
    }
  
/**
 * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
 * @summary Delete purchase order by ID
 */
const deleteOrder = (
    orderId: number,
 ) => {
      return x<unknown>(
      {url: `/store/order/${orderId}`, method: 'DELETE'
    },
      );
    }
  
/**
 * This can only be done by the logged in user.
 * @summary Create user
 */
const createUser = (
    user: User,
 ) => {
      return x<User>(
      {url: `/user`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: user
    },
      );
    }
  
/**
 * Creates list of users with given input array
 * @summary Creates list of users with given input array
 */
const createUsersWithListInput = (
    user: User[],
 ) => {
      return x<User>(
      {url: `/user/createWithList`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: user
    },
      );
    }
  
/**
 * @summary Logs user into the system
 */
const loginUser = (
    params?: LoginUserParams,
 ) => {
      return x<string>(
      {url: `/user/login`, method: 'GET',
        params
    },
      );
    }
  
/**
 * @summary Logs out current logged in user session
 */
const logoutUser = (
    
 ) => {
      return x<void>(
      {url: `/user/logout`, method: 'GET'
    },
      );
    }
  
/**
 * @summary Get user by user name
 */
const getUserByName = (
    username: string,
 ) => {
      return x<User>(
      {url: `/user/${username}`, method: 'GET'
    },
      );
    }
  
/**
 * This can only be done by the logged in user.
 * @summary Update user
 */
const updateUser = (
    username: string,
    user: User,
 ) => {
      return x<void>(
      {url: `/user/${username}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: user
    },
      );
    }
  
/**
 * This can only be done by the logged in user.
 * @summary Delete user
 */
const deleteUser = (
    username: string,
 ) => {
      return x<unknown>(
      {url: `/user/${username}`, method: 'DELETE'
    },
      );
    }
  
return {updatePet,addPet,findPetsByStatus,findPetsByTags,getPetById,updatePetWithForm,deletePet,uploadFile,getInventory,placeOrder,getOrderById,deleteOrder,createUser,createUsersWithListInput,loginUser,logoutUser,getUserByName,updateUser,deleteUser}};
export type UpdatePetResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getOpenApi>['updatePet']>>>
export type AddPetResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getOpenApi>['addPet']>>>
export type FindPetsByStatusResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getOpenApi>['findPetsByStatus']>>>
export type FindPetsByTagsResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getOpenApi>['findPetsByTags']>>>
export type GetPetByIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getOpenApi>['getPetById']>>>
export type UpdatePetWithFormResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getOpenApi>['updatePetWithForm']>>>
export type DeletePetResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getOpenApi>['deletePet']>>>
export type UploadFileResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getOpenApi>['uploadFile']>>>
export type GetInventoryResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getOpenApi>['getInventory']>>>
export type PlaceOrderResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getOpenApi>['placeOrder']>>>
export type GetOrderByIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getOpenApi>['getOrderById']>>>
export type DeleteOrderResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getOpenApi>['deleteOrder']>>>
export type CreateUserResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getOpenApi>['createUser']>>>
export type CreateUsersWithListInputResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getOpenApi>['createUsersWithListInput']>>>
export type LoginUserResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getOpenApi>['loginUser']>>>
export type LogoutUserResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getOpenApi>['logoutUser']>>>
export type GetUserByNameResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getOpenApi>['getUserByName']>>>
export type UpdateUserResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getOpenApi>['updateUser']>>>
export type DeleteUserResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getOpenApi>['deleteUser']>>>
