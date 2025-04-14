'use strict'
const menuAbrir = document.querySelector(`.Header-abrir`)
const nav = document.querySelector(`.Header-nav`)
const menuCerrar = document.querySelector(`.Header-cerrar`)

const body = document.querySelector(`body`)
console.log(menuCerrar)

menuAbrir.addEventListener(`click`, ()=>{
    nav.classList.add(`Header-nav--visible`)
    body.classList.add(`body--no-scroll`)
    

})

menuCerrar.addEventListener(`click`, ()=>{
    nav.classList.remove(`Header-nav--visible`)
    body.classList.remove(`body--no-scroll`)
})