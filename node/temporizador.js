const schedule = require('node-schedule') // temporizador... npm i node-schedule@1.3.0 -E

const tarefa1 = schedule.scheduleJob('*/2 * 10 * * 1', function() { // está configurado para segunda feira as 10 hrs.
    console.log('executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function() {
    tarefa1.cancel()
    console.log('cancelando tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 10
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('executando tarefa 2!', new Date().getSeconds())
})