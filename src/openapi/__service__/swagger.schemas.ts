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
export type LoginUserParams = {
  /**
   * The user name for login
   */
  username?: string;
  /**
   * The password for login in clear text
   */
  password?: string;
};

export type GetInventory200 = { [key: string]: number };

export type UploadFileParams = {
  /**
   * Additional Metadata
   */
  additionalMetadata?: string;
};

export type UpdatePetWithFormParams = {
  /**
   * Name of pet that needs to be updated
   */
  name?: string;
  /**
   * Status of pet that needs to be updated
   */
  status?: string;
};

export type FindPetsByTagsParams = {
  /**
   * Tags to filter by
   */
  tags?: string[];
};

export type FindPetsByStatusStatus =
  (typeof FindPetsByStatusStatus)[keyof typeof FindPetsByStatusStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const FindPetsByStatusStatus = {
  available: 'available',
  pending: 'pending',
  sold: 'sold',
} as const;

export type FindPetsByStatusParams = {
  /**
   * Status values that need to be considered for filter
   */
  status?: FindPetsByStatusStatus;
};

/**
 * Pet object that needs to be added to the store
 */
export type PetPayload = Pet;

export interface ApiResponse {
  code?: number;
  type?: string;
  message?: string;
}

/**
 * pet status in the store
 */
export type PetStatus = (typeof PetStatus)[keyof typeof PetStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PetStatus = {
  available: 'available',
  pending: 'pending',
  sold: 'sold',
} as const;

export interface Tag {
  id?: number;
  name?: string;
}

export interface Pet {
  id?: number;
  name: string;
  category?: Category;
  photoUrls: string[];
  tags?: Tag[];
  /** pet status in the store */
  status?: PetStatus;
}

export interface User {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  /** User Status */
  userStatus?: number;
}

/**
 * List of user object
 */
export type UserArrayPayload = User[];

export interface Category {
  id?: number;
  name?: string;
}

export interface Address {
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
}

export interface Customer {
  id?: number;
  username?: string;
  address?: Address[];
}

/**
 * Order Status
 */
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const OrderStatus = {
  placed: 'placed',
  approved: 'approved',
  delivered: 'delivered',
} as const;

export interface Order {
  id?: number;
  petId?: number;
  quantity?: number;
  shipDate?: string;
  /** Order Status */
  status?: OrderStatus;
  complete?: boolean;
}
