/*

v e v -> v
v e f -> f
f e ? -> f

v ou ? -> v
f ou v -> v
f ou f -> f

!v -> f
!f -> v

*///----------------------------------------------------

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // ou exclusivo
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}

}

console.log(compras(false,false))
console.log(compras(true,true))
console.log(compras(false,true))

