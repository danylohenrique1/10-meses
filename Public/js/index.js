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

Swal.fire({
  icon: 'question',
  title: 'Esta pronta?',
  text: 'Um projeto super fofinho de 10 meses para o meu amor',
  confirmButtonText: 'Estou pronta!',
  focusConfirm: false,
  backdrop: 'rgba(0,0,0,0.9)'
})

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
