/*
  Crie um script que declare uma variável e verifique se o seu valor é um número par. 
  Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem 
  "Não é um número par".
*/

let variable = prompt(`Digite um número.`)

if(Number(variable) % 2 == 0) {
  alert(`${variable} é um número par!`)
} else {
  alert(`${variable} Não é um número par!`)
}