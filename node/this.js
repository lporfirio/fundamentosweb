console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()

// dentro de arrow function o THIS aponta para module.exports
const logThisArrow = () => console.log(this === module.exports)

logThisArrow()
