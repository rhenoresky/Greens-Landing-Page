const tentang = document.getElementById('tentang')
const tentangPosition = tentang.getBoundingClientRect().top - 350
const lebarLayar = window.innerWidth
const linkBeranda = document.querySelector('nav ul li:nth-child(1) a')
const linkTentang = document.querySelector('nav ul li:nth-child(2) a')
const tombol = document.getElementById('tombol');
const menu = document.querySelector('nav ul')
const icon = document.querySelector('#tombol i')
console.log(icon)
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY

  if (lebarLayar >= 768) {
    if (scrollPosition >= tentangPosition) {
      linkBeranda.classList.remove('active')
      linkTentang.classList.add('active')
    } else {
      linkBeranda.classList.add('active')
      linkTentang.classList.remove('active')
    }
  }
})

tombol.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden')
    menu.classList.add('show')
    icon.classList.remove('fa-bars')
    icon.classList.add('fa-close')
  } else {
    menu.classList.remove('show')
    menu.classList.add('hidden')
    icon.classList.remove('fa-close')
    icon.classList.add('fa-bars')
  }
})