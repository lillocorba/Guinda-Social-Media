const menuBtn = document.querySelector('.menu-btn')

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open')
        menuOpen = true
    } else {
        menuBtn.classList.remove('open')
        menuOpen = false;
    }
})

const btnCerrar = document.querySelector('#cerrarMenu')
var menuResponsive = document.querySelector('.cbp-spmenu-s2')

function cerrarMenu() {

    menuResponsive.style.display = 'none'

}