function falarDepoisDe(segundos, frase, erro) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) //// resolve aceita somente um único parâmetro
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'que legal!', 'erro')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch( e => console.log(e))



/*
A promessa é uma estrutura de programação que permite lidar com operações assíncronas de maneira mais fácil e organizada. Em JavaScript, uma promessa representa o resultado futuro de uma operação, ou seja, o valor que essa operação pode eventualmente retornar.

Uma promessa tem três estados possíveis:

Pending (pendente): a promessa ainda está sendo processada e não tem um resultado determinado.

Fulfilled (realizada): a promessa foi bem-sucedida e seu resultado está disponível.

Rejected (rejeitada): a promessa falhou e um erro está disponível.

Você pode criar uma promessa usando o construtor Promise. Por exemplo:

*/

const minhaPromessa = new Promise((resolve, reject) => {
    // Aqui vai o código da operação assíncrona
    if (/* a operação foi bem-sucedida */) {
      resolve(resultado);
    } else {
      reject(erro);
    }
  });


/*
Você pode então registrar "listeners" para a promessa usando os métodos then e catch:

*/

minhaPromessa.then((resultado) => {
    // Este código será executado quando a promessa for realizada
    console.log(resultado);
  }).catch((erro) => {
    // Este código será executado quando a promessa for rejeitada
    console.error(erro);
  });


// A promessa também pode ser encadeada, o que permite criar cadeias de operações assíncronas que são processadas de maneira organizada e fácil de entender.

 