/*
  Crie um script que declare uma variável e verifique se o seu valor é um número. 
  Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
*/

let variable = prompt(`Qual a variável?`)

if(!isNaN(variable) == true) {
  alert(`${variable} é um número!`)
} else {
  alert(`${variable} não é um número!`)
}
