const fabricantes = ["mercedes", "audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

// forEach é uma função dentro de array, passa o nome e o indice como parâmetro
fabricantes.forEach(imprimir) 
fabricantes.forEach(function(a) {console.log(a)})
fabricantes.forEach(fabricante => console.log(fabricante))