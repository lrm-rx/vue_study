export interface List<T> {
  add(ele: T): void;
  size(): number;
  get(index: number): T | undefined
  show(): void;
  remove(item: T): T;
}