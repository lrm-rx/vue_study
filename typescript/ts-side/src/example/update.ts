// setTimeout(() => {
//   console.log(1);
// }, 1000);
// console.log(2);

// function getIndexPromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(1);
//       resolve('ming')
//     }, 1000);
//   })
// }
// getIndexPromise().then((res) => {
//   console.log(res);
// }).catch((error) => {
//   throw new Error(error)
// })

// async function asyncFn(){
//   try {
//     const res = await getIndexPromise()
//     console.log(res);
//   } catch (error) {
//     throw new Error(error)
//   }
// }

interface Res {
  data: {
    [key: string]: any
  }
}

namespace axios {
  export function post(url: string, config: object): Promise<Res> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const res: Res = { data: {} }
        if (url === 'login') {
          res.data.user_id = 123
        } else {
          res.data.role = 'admin'
        }
        resolve(res)
      }, 1000);
    })
  }
}
interface InfoLogin {
  user_name: string
  password: string
}

async function login({ user_name, password }: InfoLogin) {
  try {
    console.log(1);
    const res = await axios.post('/login', {
      data: {
        user_name,
        password
      }
    })
    console.log(2);
    return res
  } catch (error) {
    throw new Error(error)
  }
}

async function getRole(user_id: number) {
  try {
    const res = await axios.post('/user_roles', {
      data: {
        user_id
      }
    })
    return res
  } catch (error) {
    throw new Error(error)
  }
}

login({ user_name: 'ming', password: '123456' }).then(res => {
  const { data: { user_id } } = res
  getRole(user_id).then(res => {
    const {data: {role}} = res
    console.log(role);
  })
})