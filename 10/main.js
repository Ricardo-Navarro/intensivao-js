/*
  Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. 
  Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem 
  "Não é um número ímpar".
*/

let variable = prompt(`Digite um número.`)

if(Number(variable) % 2 != 0) {
  alert(`${variable} é um número ímpar!`)
} else {
  alert(`${variable} Não é um número ímpar!`)
}