// não aceita repetição / não indexada ...


const times = new Set()
times.add('vasco')
times.add('palmeiras').add('sao paulo').add('flamengo')
times.add('vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('flamengo')
console.log(times.has('flamengo'))


const nomes = ['raquel', 'lucas', 'julia', 'lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)