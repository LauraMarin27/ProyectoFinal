'use strict'

/*─────────────────────────────────────────────*\
* infoRegiones.js
* Interacciones:
* - Activar pestañas por región (tabs)
* - Mostrar/ cerrar imagen grande del departamento seleccionado
* - Carrusel de imágenes por región con control por puntos y teclado
*
* Datos:
* - Elementos del DOM para regiones.html
*
* Estructura:
 * 
 * - Tabs por región 
 *      – Selección de elementos del DOM
 *      – Listeners
 * 
 * - Imagen ampliada de departamentos 
 *      – Selección de elementos del DOM
 *      – Función de apertura
 *      – Función de cierre
 * 
 * - Carrusel por región
 *      – Selección de elementos del DOM
 *      – Variables
 *      – Función para mover carrusel
 *      – Listeners (click y teclado) 
\*─────────────────────────────────────────────*/

/* ──────────────── TABS POR REGIÓN ──────────────── */
// 1. Selección de elementos del DOM

// Selección de todos los botones de pestañas de regiones
const tabs = document.querySelectorAll('.Regiones-tabs-button')
// Selección de todos los contenedores de contenido por región
const tabContents = document.querySelectorAll('.Regiones-content')


// 2. Listeners
/**
 * Evento que activa la pestaña correspondiente y muestra su contenido.
 * 
 * @param {MouseEvent} e Evento del click
 * @return {undefined} No tiene return
 */
tabs.forEach((_, i) => {
    tabs[i].addEventListener(`click`, () => {

        tabs.forEach((_, j) => {
            tabs[j].classList.remove('active')
            tabContents[j].classList.remove('active')

        })

        tabs[i].classList.add('active')

        tabContents[i].classList.add('active')

    })
})

/* ──────── IMAGEN AMPLIADA DE DEPARTAMENTOS ──────── */
// Me ayudé con ChatGPT para esto:
// Cuando click en .departamentos-list-li,
// buscar el contenedor más cercano con la clase .Regiones-content,
// dentro de ese bloque selecciona el .Departamento-grande y le remove isVisible

// 1. Selección de elementos del DOM
// Elementos de lista de departamentos (cada uno representa la imagen de los departamentos mostrados por región)
const departamentos = document.querySelectorAll(`.departamentos-list-li`)
// Botones para cerrar la imagen ampliada del departamento
const cerrarBotones = document.querySelectorAll('.Departamento-grande-button')

// 2. Función de apertura al hacer click en un departamento
/**
 * Evento que muestra la imagen ampliada del departamento seleccionado.
 * 
 * @param {MouseEvent} e Evento del click
 * @return {undefined} No tiene return
 */
departamentos.forEach((departamento) => {
    departamento.addEventListener(`click`, (e) => {

        // Encontrar el contenedor padre más cercano (Regiones-content)
        const regionContent = departamento.closest('.Regiones-content')

        // Encontrar el contenedor Departamento-grande dentro de esa región
        const imagenGrande = regionContent.querySelector(`.Departamento-grande`)
        const imagen = imagenGrande.querySelector(`.imagenGrandeDepartamento`)
        const galeriaImg = departamento.querySelector('.departamentos-list-img')


        imagenGrande.classList.remove(`isVisible`)


        const ruta = galeriaImg.src

        imagen.setAttribute(`src`, ruta)
    })
})

// 3. Función de cierre al hacer click en botón cerrar
// Me ayudé con ChatGPT para esto:
// Cuando click en .Departamento-grande-button,
// buscar el contenedor más cercano con la clase .Regiones-content,
// dentro de ese bloque selecciona el .Departamento-grande y le add isVisible

/**
 * Evento que oculta la imagen ampliada del departamento.
 * 
 * @param {MouseEvent} e Evento del click
 * @return {undefined} No tiene return
 */
cerrarBotones.forEach((cerrar) => {
    cerrar.addEventListener(`click`, (e) => {
        e.preventDefault()

        // Encontrar el contenedor padre más cercano (Regiones-content)
        const regionContent = cerrar.closest('.Regiones-content')

        // Encontrar el contenedor Departamento-grande dentro de esa región
        const imagenGrande = regionContent.querySelector(`.Departamento-grande`)

        // Ocultar el contenedor Departamento-grande
        imagenGrande.classList.add(`isVisible`)
    })
})


/* ──────────────── CARRUSEL POR REGIÓN ──────────────── */

document.querySelectorAll('.Regiones-content').forEach((regionContent) => {
    // 1. Selección de elementos del DOM
    // Carrusel principal (contenedor deslizante)
    const grande = regionContent.querySelector(`.Carrousel-grande`)
    // Puntos de navegación del carrusel
    const puntos = regionContent.querySelectorAll(`.punto`)
    // Todas las imágenes del carrusel
    const carrouselImg = regionContent.querySelectorAll(`.Carrousel-imagen-info`)
    // Número total de imágenes en el carrusel
    const numImgs = carrouselImg.length

    // 2. Variables
    // Índice actual de imagen activa en el carrusel
    let contador = 0

    /**
 * Mueve el carrusel a la imagen correspondiente según el valor de contador.
 * También actualiza los puntos de navegación activando el actual.
 * 
 * @function moverCarrousel
 * @returns {void}
 * @author LauraMarin
 * @since 1.0.0
 */
    const moverCarrousel = () => {
        if (!grande) return
        let operacion = contador * -20
        grande.style.transform = `translateX(${operacion}%)`
        puntos.forEach((_, i) => {
            puntos[i].classList.remove(`activo`)

            if (i === contador) {
                puntos[i].classList.add(`activo`)
            }

        })

    }
    /**
     * Evento que cambia la imagen del carrusel al hacer click en un punto.
     * 
     * @param {MouseEvent} e Evento del click
     * @return {undefined} No tiene return
     */
    puntos.forEach((punto, i) => {
        punto.addEventListener(`click`, () => {
            contador = i
            moverCarrousel()
        })
    })

    /**
 * Evento global que permite controlar el carrusel con el teclado.
 * Flecha derecha avanza una imagen, flecha izquierda retrocede.
 * 
 * @param {KeyboardEvent} e Evento del teclado
 * @return {undefined} No tiene return
 * @author LauraMarin
 * @since 1.0.0
 */
    const windowKeydownHandler = (e) => {
        const { key } = e

        if (key === 'ArrowRight') {
            contador = (contador + 1) % numImgs
            moverCarrousel()
        }

        if (key === 'ArrowLeft') {
            contador = (contador - 1 + numImgs) % numImgs
            moverCarrousel()
        }
    }

    window.addEventListener(`keydown`, windowKeydownHandler)

})
