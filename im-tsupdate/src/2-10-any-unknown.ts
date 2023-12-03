// any
// let num: Array<string> = ["abc", "def"];
// let data: any = undefined;

// let data: any = ["ab", "cd"];
// let num: number = data;

let data: unknown = ["ab", "cd"];
// let num: number = data;

function getData(data: unknown) {
  // console.log(data.name);
}

getData({ name: "theshy", age: 24 })
getData([1, 2])

export { }