var burger = document.querySelector('.burgerBtn')
var nav = document.querySelector('.nav-links')
var linkHome = document.querySelector('.linkHome')
var linkAbout = document.querySelector('.linkAbout')
var linkTrabajos = document.querySelector('.linkTrabajos')
var linkContacto = document.querySelector('.linkContacto')
var liActiveHome = document.querySelector('.liHome')
var liActiveAbout = document.querySelector('.liAbout')
var liActiveTrabajos = document.querySelector('.liTrabajos')
var liActiveContacto = document.querySelector('.liContacto')

burger.addEventListener('click', openMenu)

function openMenu() {
    nav.classList.toggle('nav-active')
    burger.classList.toggle('toggle')
    liActiveHome.classList.toggle('active')
    liActiveAbout.classList.toggle('active')
    liActiveTrabajos.classList.toggle('active')
    liActiveContacto.classList.toggle('active')
}

linkHome.addEventListener('click', function closeMenu() {
    nav.classList.remove('nav-active')
    burger.classList.remove('toggle')
})

linkAbout.addEventListener('click', function closeMenu() {
    nav.classList.remove('nav-active')
    burger.classList.remove('toggle')
})

linkTrabajos.addEventListener('click', function closeMenu() {
    nav.classList.remove('nav-active')
    burger.classList.remove('toggle')
})

linkContacto.addEventListener('click', function closeMenu() {
    nav.classList.remove('nav-active')
    burger.classList.remove('toggle')
})