/*
  Crie um script que declare uma variável e verifique se o seu valor é uma string. 
  Se for, exiba a mensagem "É uma string", caso contrário, 
  exiba a mensagem "Não é uma string".
*/

let variable = prompt(`Qual a variável?`)

if(!isNaN(variable) == false) {
  alert(`${variable} é um string!`)
} else {
  alert(`${variable} não é um string!`)
}