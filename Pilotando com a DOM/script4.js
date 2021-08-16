//Trocar o conteúdo do HTML interno através do
//innerHTML

const element = document.querySelector("h1")

element.innerHTML="Olá Devs!<small>!!!</small>"

console.log(element.textContent)