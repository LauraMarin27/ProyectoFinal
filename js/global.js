'use strict'

/* ──────────────────────────────────────────────────────────────── *\
 *  global.js
 * 
 *  Interacciones:
 *   – Abrir el menú de navegación al hacer clic en el botón de abrir
 *   – Cerrar el menú de navegación al hacer clic en el botón de cerrar
 * 
 *  Datos:
 *   – Elementos del DOM
 * 
 *  Estructura:
 *   – Constantes
 *   – Listeners
\* ──────────────────────────────────────────────────────────────── */

//Etiqueta encapsuladora
const header = document.querySelector(`.Header`)
// Botón que abre el menú de navegación
const menuAbrir = header.querySelector(`.Header-abrir`)
// Contenedor del menú de navegación
const nav = header.querySelector(`.Header-nav`)
// Botón que cierra el menú de navegación
const menuCerrar = header.querySelector(`.Header-cerrar`)
// Etiqueta body del documento para controlar el scroll
const body = header.querySelector(`body`)

/**
 * Evento que abre el menú de navegación al hacer clic en el botón de abrir
 * @param {MouseEvent} e Evento de clic
 * @return {undefined} No tiene return
 */
menuAbrir.addEventListener(`click`, () => {
    nav.classList.add(`Header-nav--visible`)
    body.classList.add(`body--no-scroll`)

})

/**
 * Evento que cierra el menú de navegación al hacer clic en el botón de cerrar
 * @param {MouseEvent} e Evento de clic
 * @return {undefined} No tiene return
 */
menuCerrar.addEventListener(`click`, () => {
    nav.classList.remove(`Header-nav--visible`)
    body.classList.remove(`body--no-scroll`)
})