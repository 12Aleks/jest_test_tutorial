const squere = (number) => {
    if(number === 1){
        return 1
    }
    return Math.pow(number, 2)
}

let users = [
    {name: "Bob", age: 20},
    {name: "Tom", age: 25}, 
    {name: "Sem", age: 40}
]

const result = (data) => {
  if(data[0].age >= 20) return true
  return false
}

result(users)

module.exports = {squere, result}