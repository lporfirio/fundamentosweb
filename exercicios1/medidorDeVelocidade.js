/* 
velocidade máxima permitida 80
< 80 não houve multa
> 81 levou multa leve
> 91 levou multa grave
> 101 levou multa gravíssima 



*/

var velocidade = 101
 
if (velocidade <= 80) {
    console.log(`velocidade de ${velocidade}km, não houve multa`)
} else if ( velocidade <= 90) {
    console.log(`velocidade de ${velocidade}km, levou multa leve`)
} else if ( velocidade <= 100) {
    console.log(`velocidade de ${velocidade}km, levou multa grave`)
} else if ( velocidade => 101) {
    console.log(`velocidade de ${velocidade}km, levou multa gravíssima`)
}