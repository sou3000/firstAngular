export interface DataPage<T> {
    data: T[];
    pageNumber: number;
    pageSize: number;
    total: number;
}