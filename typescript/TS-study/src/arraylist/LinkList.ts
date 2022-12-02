import {List} from './types'

class LinkList<T> implements List<T> {
  add(ele: T): void {
    throw new Error('Method not implemented.');
  }
  size(): number {
    throw new Error('Method not implemented.');
  }
  get(index: number): T {
    throw new Error('Method not implemented.');
  }
  show(): void {
    throw new Error('Method not implemented.');
  }
  remove(item: T): T {
    throw new Error('Method not implemented.');
  }
}