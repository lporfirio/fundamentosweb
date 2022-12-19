// callback quer dizer chamar de volta

const fabricantes = ["mercedes", "audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

// forEach é uma função dentro de array, passa o nome e o indice como parâmetro
fabricantes.forEach(imprimir)
fabricantes.forEach(function (a) { console.log(a) })
fabricantes.forEach(fabricante => console.log(fabricante))




/******************************************* */

const exibir = num => console.log(num)

function soma(a, b, callback) {
    resultado = a + b
    callback(resultado)
}

function multi(a, b, cb) {
    resultado = a * b
    cb(resultado)
}

soma(2, 3, exibir)
multi(5, 2, exibir)