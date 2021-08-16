//Adicionando elementos
const div = document.createElement('div');
div.innerText = "Olá Devs!"

//insertBefore
const body = document.querySelector('body')
const header = body.querySelector('header')
//const script = body.querySelector('script')
//body.insertBefore(div,script)

//Não existe insertAfter, mas podemos fazer um
//pulo do gato simulando como se fosse insertAfter
body.insertBefore(div, header.nextElementSibling)
//Poderia tamber ser o nextSibling, pois ele pegaria o espaço e adicionaria
