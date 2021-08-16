// Alterando estilos
// classList

const element = document.querySelector('body')

element.classList.add('active, green') //adiciona uma class
console.log(element.classList)
element.classList.remove('active')//remove uma class
element.classList.toggle('active')//Se a class existir, ele tira
//Se a class não existir, ele adiciona