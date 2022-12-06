// enum Status {
//   Uploading = 1,
//   Success = 2,
//   Failed = 3
// }
// // console.log(Status[0]);
// // console.log(Status.Success);

// console.log(Status);

enum Message {
  Error = 'sorry, error',
  Success = 'hoo, success',
  Failed = Error
}

console.log(Message.Success);

enum Result {
  Failed = 0,
  Success = 'success'
}

enum Animals {
  Dog = 1,
  Pig = 2
}

interface Dog {
  type: Animals.Dog
}

const dog: Dog = {
  type: Animals.Dog
}

enum Status {
  Off,
  On
}

interface Light {
  status: Status
}

// const light: light = {
//   status: Animals.Dog
// }

const enum Animals1 {
  
}