type ResolveType = (resolve_success: any) => any
type RejectType = (reject_fail: any) => any

class Promise {
  public resolveFunc!: ResolveType
  public rejectFunc!: RejectType
  // promiseParams 函数类型为 (resolve: ResolveType, reject: RejectType) => any
  constructor(promiseParams: (resolve: ResolveType, reject: RejectType) => any) {
    this.resolveFunc = (resolve_success: any): any => {
      console.log(resolve_success);
    }
    this.rejectFunc = (reject_fail: any): any => {
      console.log(reject_fail);
    }
    promiseParams(this.resolveFunc, this.rejectFunc)
  }
}

new Promise(function (resolve: ResolveType, reject: RejectType): any {
  resolve("成功了!")
  reject("失败了!")
})

export { }