export interface Pageable
  extends Partial<{
    page: number;
    size: number;
    sortBy: string;
    total: number;
  }> {}

export interface PageableContent<T> extends Pageable {
  content: T[];
}
