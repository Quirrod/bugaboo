export interface StrapiResponse<T> {
    data: T;
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        }
    }
    error: {
        message: string;
        status: number;
        name: string;
        datils: {}
    }
}