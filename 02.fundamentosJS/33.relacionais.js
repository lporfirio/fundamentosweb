console.log('o1)', '1' == 1) // true
console.log('o2)', '1' === 1) // false
console.log('o3)', '3' != 3) // false
console.log('o4)', '3' !== 3) // true

console.log('o5)', 3 < 2) // false
console.log('o6)', 3 > 2) // true
console.log('o7)', 3 <= 2) // false
console.log('o8)', 3 >= 2) // true

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) // false
console.log('10)', d1 == d2) // false
console.log('11)', d1.getTime() === d2.getTime()) // true

console.log('12)', undefined == null) // true
console.log('13)', undefined === null) // false