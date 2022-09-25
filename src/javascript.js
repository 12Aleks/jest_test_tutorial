let users = [
    {name: "Bob", age: 20},
    {name: "Tom", age: 25}, 
    {name: "Sem", age: 40}
]

let test = (data) => {
  return function name(params) {
    data.map(user => 
        console.log(user.name, user.age, params)
    )
  }
}


let info = test(users);

info('if you want to  full information -> click here')