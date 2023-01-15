const gulp = require('gulp')
const series = gulp.series
const parallel = gulp.parallel
//const {series} = require('gulp')

const antes1 = cb => {
    console.log('Tarefa Antes 1')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2')
    return cb()
}

function copiar(cb) {
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) // arquivos de entrada do workflow
    gulp.src('pastaA/**/*.txt') // qualquer arquivo dentro da pasta A, que seja '.txt'
    // .pipe(imagemPelaMetade()) // transforma os arquivos
    // .pipe(pretoEBranco())
    // .pipe(transformaçãoA())
    // .pipe(transformaçãoB())
    // .pipe(transformaçãoC())
    .pipe(gulp.dest('pastaB')) // irá colocar as imagens na pasta de destino.. caso a pasta não exista, ele irá criar
    
    return cb()
}

const fim = cb => {
    console.log('Tarefa Fim')
    return cb()
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim
    )