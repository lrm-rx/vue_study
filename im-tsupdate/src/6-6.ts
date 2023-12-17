// vue3源码中的泛型约束
class ObjectRefImpl<T extends object, K extends keyof T> {
  public readonly __v_isRef = true

  constructor(private readonly _object: T, private readonly _key: K) { }

  get value() {
    return this._object[this._key]
  }

  set value(newVal) {
    this._object[this._key] = newVal
  }
}

type ObjType = {
  username: string;
  age: number
}

const obj = new ObjectRefImpl<ObjType, "age">({
  username: "ming",
  age: 12
}, "age")


export { }