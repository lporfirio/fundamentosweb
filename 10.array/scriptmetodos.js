const data = [
    { name: "Matheus", age: 31, sallary: 2000, driverLicence: true },
    { name: "João", age: 18, sallary: 1500, driverLicence: false },
    { name: "Mariana", age: 22, sallary: 4000, driverLicence: true },
    { name: "Pedro", age: 50, sallary: 7200, driverLicence: true },
    { name: "Érica", age: 16, sallary: 0, driverLicence: false },
]

// 1 - reverse
const reverseData = data.reverse()

console.log(reverseData)

// 2 - find -- find só traz um resultado, o último no caso
const highSallary = 5000 // exemplo de salário maior que 5000

const highestSallary = data.find((user) => user.sallary > highSallary)

console.log(highestSallary)

// 3 - findIndex
const lowestSallary = data.findIndex((user) => user.sallary > 0 && user.sallary < 2000)

console.log(lowestSallary)

data[lowestSallary].sallary += 200

console.log(data)

// 4 - includes -- retorna boolean
const numbers = [1, 2, 3, 4, 5]

const hasFour = numbers.includes(4)

console.log(hasFour)

console.log(numbers.includes(100))

// 5 - map -- bom para fazer alteração no array
data.map((user) => (user.newsletter = false))

console.log(data)

// 6 - filter
const drivers = data.filter((user) => user.driverLicence)

console.log(drivers)

// 7 - reduce
const sallariesSum = data.reduce((totalSallary, user) => (totalSallary += user.sallary), 0)

console.log(sallariesSum)

// 8 - forEach
function showUserNames(users) {
    users.forEach((user) => {
        console.log(`olá ${user.name}!`)
    })
}

showUserNames(data)


// 9 - some -- se algum dado tem o que estou procurando
let someoneWithNewsletter = data.some((user) => user.newsletter)

console.log(someoneWithNewsletter)

data[0].newsletter = true

someoneWithNewsletter = data.some((user) => user.newsletter)

console.log(someoneWithNewsletter)

// 10 - every -- se todos os dados tem o que estou procurando 
const everyUserHasName = data.every((user) => user.name)

console.log(everyUserHasName)

const everyUserHasGoodSallary = data.every((user) => user.sallary > 2000)

console.log(everyUserHasGoodSallary)
