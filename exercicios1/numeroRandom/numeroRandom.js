var random2 = Math.floor(Math.random() * 10 + 1)
var random = random2

var chute = document.getElementById('chute')
var res = document.getElementById('res')

/*function verificar2() {
    if (Number(chute.value) < 1 || Number(chute.value) > 10 || chute.value.length == 0) {
        res.innerHTML = "O número precisa ser entre 1 e 10!"
    } else {
        res.innerHTML = `você chutou o número ${chute.value}`
    }
}*/


function verificar() {
    var c = Number(chute.value)
    if (Number(chute.value) < 1 || Number(chute.value) > 10 || chute.value.length == 0) {
        res.innerHTML = "O número precisa ser entre 1 e 10!"
    } else {
        //chute = Number(chute.value)
        if (c == random) {
            res.innerHTML = `Acertou!!! ${c} foi o número gerado!<p>Se quiser jogar de novo, aperte F5.</p>`
        } else if (c > random) {
            res.innerHTML = `chute um número menor!`
        } else if (c < random) {
            res.innerHTML = `chute um número maior!`
        }
        //res.innerHTML = `você chutou o número ${chute.value}`
    }
}



/*função para verificar se o chute é igual ao número gerado
function chutecerto() {
    if (chute == random) {
        return res.innerHTML = `Acertou!!! ${chute} é igual a ${random}`
    } else {
        if (chute < random) {
            res.innerHTML = `Chute um número maior!`
            return chutecerto()
        } else if (chute > random) {
            res.innerHTML = `Chute um número menor!`)
            return chutecerto()
        }
    }
}*/
