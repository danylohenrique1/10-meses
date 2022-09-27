
//---------------------Gif de confete----------------------------
var gif = document.querySelector('.gif')
var button = document.querySelector('.button')

button.addEventListener('click', event => {
  event.preventDefault()

  gif.classList.toggle('hidden')
  gif.classList.toggle('visible')

  setTimeout(() => {
    gif.classList.toggle('hidden')
    gif.classList.toggle('visible')
  }, 5000)
})

//---------------------janela modal----------------------------
// Swal.fire({
//   icon: 'question',
//   title: 'Esta pronta?',
//   text: 'Um projeto super fofinho de 10 meses para o meu amor',
//   confirmButtonText: 'Estou pronta!',
//   focusConfirm: false,
//   backdrop: 'rgba(0,0,0,0.9)'
// })

//---------------------animações----------------------------
ScrollReveal().reveal('img, h1, p, h5, a.button', {
  delay: 200,
  duration: 500,
  reset: true,
  distance: '60px'
})

ScrollReveal().reveal('img, h1, h5', {
  origin: 'top'
})

ScrollReveal().reveal('p, a.button', {
  origin: 'bottom'
})

//---------------------Menu---------------------------
//pegar icon e ul
var iconMenu = document.querySelector('.iconMenu')
var menu = document.querySelector('nav')
var links = document.querySelectorAll('ul li a')

//adicionar evento de click
iconMenu.addEventListener('click', (event) => {
  event.defaultPrevented;

//mudar classe do icone e do ul
  iconMenu.classList.toggle('icon-stack')
  iconMenu.classList.toggle('icon-cross')

  menu.classList.toggle('open')

})

//fechar modal ao clicar em algum link
links.addEventListener('click', (e) => {
  e.defaultPrevented

  menu.classList.remove('open')

})