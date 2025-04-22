'use strict'
/* ──────────────────────────────────────────────────────────────── *\
 *  index.js
 * 
 *  Interacciones:
 *   – Carrousel de imágenes con botones y teclado
 *   – Intersección para animación de aparición de los elementos de .Info-especifica
 *   – Mostrar y cerrar detalles de la sección .Info
 * 
 *  Datos:
 *   – Total de imágenes del carrousel
 * 
 *  Estructura:
 * 
 *  - Carrousel 
 *      – Selección de elementos del DOM
 *      – Variables
 *      – Estilos iniciales
 *      – Funciones de navegación
 *      – Listeners (clic y teclado)
 * 
 *  -Info util 
 *      – Selección de elementos del DOM
 *      – Observer de intersección
 *      – Funciones de apertura/cierre de info
 *      – Listeners
\* ──────────────────────────────────────────────────────────────── */

/* ──────────────── CARROUSEL ──────────────── */

// 1. Selección de elementos del DOM
// Selección del contenedor principal del carrousel
const carrousel = document.querySelector(`.Hero-carrousel`)
// Selección del wrapper que contiene todas las imágenes del carrousel
const carrouselWrapper = carrousel.querySelector(`.Hero-imagenes`)
// Selección del botón para ir a la siguiente imagen
const carrouselNext = carrousel.querySelector(`.Hero-arrow--next`)
// Selección del botón para ir a la imagen anterior
const carrouselPrev = carrousel.querySelector(`.Hero-arrow--prev`)
// Selección de todas las imágenes del carrousel
const carrouselImg = carrousel.querySelectorAll(`.Hero-img`)
// Total de imágenes en el carrousel
const numImgs = carrouselImg.length

//2. Variables
// Contador que lleva el control de la imagen actual
let contador = 0

// 3. Estilos (anchura y columna para el elemento)
// Definimos la anchura total del wrapper en función del número de imágenes
carrouselWrapper.style.width = `${100 * numImgs}%`
// Definimos el número de columnas del grid según la cantidad de imágenes
carrouselWrapper.style.gridTemplateColumns = `repeat( ${numImgs} , 1fr )`

// 4. Funciones

/**
 * Mueve el wrapper del carrousel a la posición del contador actual
 * 
 * @function carrouselWrapperMove
 * @returns {void}
 * @author LauraMarin
 * @since 1.0.0
 */
const carrouselWrapperMove = () => {
    carrouselWrapper.style.translate = `-${(100 / numImgs) * contador}%`
}


/**
 * Avanza a la siguiente imagen del carrousel
 * 
 * @function carrouselNextHandler
 * @returns {void}
 * @author LauraMarin
 * @since 1.0.0
 */
const carrouselNextHandler = () => {
    contador++
    if (contador >= numImgs) {
        contador = 0
    }
    carrouselWrapperMove()


}

/**
 * Retrocede a la imagen anterior del carrousel
 * 
 * @function carrouselPrevHandler
 * @returns {void}
 * @author LauraMarin
 * @since 1.0.0
 */
const carrouselPrevHandler = () => {
    contador--
    if (contador < 0) {
        contador = numImgs - 1
    }
    carrouselWrapperMove()

}

/**
 * Controla la navegación del carrousel con el teclado
 * 
 * @function windowKeydownHandler
 * @param {KeyboardEvent} e Evento del teclado
 * @returns {void}
 * @author LauraMarin
 * @since 1.0.0
 */
const windowKeydownHandler = (e) => {
    const { key } = e

    key == 'ArrowRight' && carrouselNextHandler()
    key == 'ArrowLeft' && carrouselPrevHandler()

    if (key == 0 || key == 1 || key == 2 || key == 3 || key == 4 || key == 5 || key == 6 || key == 7 || key == 8 || key == 9) {
        contador = key - 1
        carrouselWrapperMove()

    }

}

// 5. Listeners
/**
 * Evento que ejecuta el handler para ir a la siguiente imagen del carrousel
 * @param {MouseEvent} e Evento de clic
 * @return {undefined} No tiene return
 */
carrouselNext.addEventListener(`click`, carrouselNextHandler)
/**
 * Evento que ejecuta el handler para ir a la imagen anterior del carrousel
 * @param {MouseEvent} e Evento de clic
 * @return {undefined} No tiene return
 */
carrouselPrev.addEventListener(`click`, carrouselPrevHandler)
/**
 * Evento que escucha las teclas para navegar por el carrousel
 * @param {KeyboardEvent} e Evento de teclado
 * @return {undefined} No tiene return
 */
window.addEventListener(`keydown`, windowKeydownHandler)

/* ──────────────── INFORMACIÓN UTIL DE COLOMBIA  ──────────────── */

// 1. Selección de elementos del DOM 
// Contenedor principal de la sección de información
const info = document.querySelector(`.Info`)
// Elementos específicos de información que se mostrarán con animación
const infoEspecifica = info.querySelectorAll(`.Info-especifica`)
// Elemento que se superpondra superiormente y tendra todos los detalles de la información
const infoSuperior = info.querySelectorAll(`.Info-superior`)
// Boton para cerrar los detalles
const botonCerrar = info.querySelectorAll(`.Info-superior-cerrar`)

// 2. Intersecting para animación 
/**
 * Callback del IntersectionObserver para mostrar animaciones al hacer scroll
 * 
 * @function callback
 * @param {IntersectionObserverEntry[]} cambios Lista de cambios observados
 * @param {IntersectionObserver} observer Instancia del observer
 * @returns {void}
 * @author LauraMarin
 * @since 1.0.0
 */
let callback = (cambios, observer) => {
    cambios.forEach((entry) => {
        let { isIntersecting, target } = entry
        if (isIntersecting) {
            target.classList.add(`isVisible`)
        }
    })
}

// visible al 50%
let options = {
    threshold: .5
}

let observer = new IntersectionObserver(callback, options)

// Observa cada uno de los elementos específicos de información
infoEspecifica.forEach(eachElemento => observer.observe(eachElemento))

// 3. Listeners para abrir/cerrar info
/**
 * Evento que muestra la información detallada al hacer clic en un bloque de información
 * @param {MouseEvent} e Evento de clic
 * @return {undefined} No tiene return
 */
infoEspecifica.forEach((_, i) => {
    infoEspecifica[i].addEventListener(`click`, () => {
        infoSuperior[i].classList.add(`Info-superior--visible`)

        /**
         * Evento que cierra la información detallada al hacer clic en el botón cerrar
         * @param {MouseEvent} e Evento de clic
         * @return {undefined} No tiene return
         */
        if (botonCerrar[i]) {
            botonCerrar[i].addEventListener(`click`, () => {
                infoSuperior[i].classList.remove(`Info-superior--visible`)
            })
        }
    })
})