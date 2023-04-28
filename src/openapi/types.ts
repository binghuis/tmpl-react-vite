export interface BaseResponse<T = unknown> {
  code: string;
  message: string;
  data: T;
}

export interface PaginationResponse<T = unknown[]> {
  totalCount: number;
  data: T;
}

/** response.data 类型 */
export type PickData<T extends BaseResponse> = T['data'];

/** response.data.data 分页数据 list 类型 */
export type PickList<T extends BaseResponse<PaginationResponse>> = T['data']['data'];

/** response.data.data 分页数据元素 list.item 类型 */
export type PickListItem<T extends BaseResponse<PaginationResponse>> = T['data']['data'][number];
