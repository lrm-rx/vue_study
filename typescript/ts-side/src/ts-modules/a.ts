export interface FuncInterface {
  name: string;
  (arg: number): string
}

export class CalssC {
  constructor() { }
}

class CalssD {
  constructor() { }
}
export { CalssD }
export { CalssD as ClassNamedD }

export * from './b'
export { name } from './b'
export { name as NameProp } from './b'

