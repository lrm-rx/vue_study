let list = [
  {
    prop: "a",
    label: "a",
    isLeaf: true,
    _children: [
      {
        prop: "a1",
        label: "a1",
        isLeaf: true
      },
      {
        prop: "a2",
        label: "a2",
        isLeaf: false
      }
    ]
  },
  {
    prop: "b",
    label: "b",
    isLeaf: false,
    _children: [
      {
        prop: "b1",
        label: "b1",
        isLeaf: true
      },
    ]
  },
  {
    prop: "c",
    label: "c",
    isLeaf: false,
    _children: [
      {
        prop: "c1",
        label: "c1",
        isLeaf: false
      },
    ]
  }
]

const res = findItem(list, "a", "a")
console.log("res:", res);
console.log("list:", list);
function findItem(data, prop, label, arr = []) {
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    if (item._children) {
      findItem(item._children, prop, label, arr)
    }
    if(item.isLeaf) {
      let temObj = {...item}
      temObj._children && delete temObj._children
      arr.push(temObj)
    }
  }
  return arr;
}