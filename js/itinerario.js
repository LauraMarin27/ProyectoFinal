'use strict'
/*──────────────────────────────────────────────*\ 
 * itinerario.js
 * 
 * Interacciones:
 * - Mostrar resultado según selección de tipo de experiencia y duración
 * - Cerrar ventana de resultado
 * - Seleccionar tipo de experiencia visualmente
 * 
 * Datos:
 * - Input radio con name="tipo"
 * - Input select con id="duracion"
 * 
 * Estructura:
 * - Selección de elementos del DOM
 * - Evento: click en botón para mostrar resultados
 * - Evento: click en botón cerrar
 * - Evento: click para resaltar opción seleccionada
\*──────────────────────────────────────────────*/

// Todas las ventanas de resultados que se mostrarán
const ventanaResultado = document.querySelectorAll(`.Resultado`)
// Botones para cerrar los resultados
const botonCerrar = document.querySelectorAll(`.Resultado-cerrar-button`)
// Botones de generar mi itinerario
const botonMostrarResultados = document.querySelectorAll(`.Cuestionario-boton-button`)
// Iconos de experiencia (playa, ciudad, naturaleza , combinado)
const tipoExperiencia = document.querySelectorAll(`.icono-nombre`)
// Input de selección de duración
const duracion = document.getElementById(`duracion`)
const opcion = document.querySelectorAll(`.opcion`)



opcion.forEach((_,i)=>{
  opcion[i].addEventListener(`click`, ()=>{
    console.log(opcion[i].id)
  })
})



/**
 * Evento que muestra el resultado correspondiente según la combinación
 * de tipo de experiencia y duración seleccionada.
 * 
 * @param {MouseEvent} e Evento del clic
 * @return {undefined} No tiene return
 */
botonMostrarResultados.forEach((_, i) => {
  botonMostrarResultados[i].addEventListener(`click`, (e) => {
    e.preventDefault()

    // Valor del tipo de experiencia seleccionado por el usuario (playa, ciudad, etc.)
    const tipoSeleccionado = document.querySelector('input[name="tipo"]:checked').value;
    console.log(tipoSeleccionado)

    // Valor de duración seleccionada por el usuario (menos-semana, una-semana, etc.)
    const duracionSeleccionada = duracion.value
    console.log(duracionSeleccionada)

    // Mostrar resultado para tipo "playa"
    if (tipoSeleccionado === 'playa' && duracionSeleccionada === 'menos-semana') {
      document.getElementById('resultado-playa-menos-semana').classList.add('Mostrar')
    } else if (tipoSeleccionado === 'playa' && duracionSeleccionada === 'una-semana') {
      document.getElementById('resultado-playa-una-semana').classList.add('Mostrar')

    } else if (tipoSeleccionado === 'playa' && duracionSeleccionada === 'dos-semanas') {
      document.getElementById(`resultado-playa-dos-semanas`).classList.add(`Mostrar`)
    } else if (tipoSeleccionado === 'playa' && duracionSeleccionada === 'tres-semanas') {
      document.getElementById(`resultado-playa-tres-semanas`).classList.add(`Mostrar`)
    } else if (tipoSeleccionado === 'playa' && duracionSeleccionada === 'un-mes') {
      document.getElementById(`resultado-playa-un-mes`).classList.add(`Mostrar`)
    } else if (tipoSeleccionado === 'playa' && duracionSeleccionada === 'mas-de-un-mes') {
      document.getElementById(`resultado-playa-mas-mes`).classList.add(`Mostrar`)
    }


    // Mostrar resultado para tipo "naturaleza"
    if (tipoSeleccionado === 'naturaleza' && duracionSeleccionada === 'menos-semana') {
      document.getElementById('resultado-naturaleza-menos-semana').classList.add('Mostrar')
    } else if (tipoSeleccionado === 'naturaleza' && duracionSeleccionada === 'una-semana') {
      document.getElementById('resultado-naturaleza-una-semana').classList.add('Mostrar')

    } else if (tipoSeleccionado === 'naturaleza' && duracionSeleccionada === 'dos-semanas') {
      document.getElementById(`resultado-naturaleza-dos-semanas`).classList.add(`Mostrar`)
    } else if (tipoSeleccionado === 'naturaleza' && duracionSeleccionada === 'tres-semanas') {
      document.getElementById(`resultado-naturaleza-tres-semanas`).classList.add(`Mostrar`)
    } else if (tipoSeleccionado === 'naturaleza' && duracionSeleccionada === 'un-mes') {
      document.getElementById(`resultado-naturaleza-un-mes`).classList.add(`Mostrar`)
    } else if (tipoSeleccionado === 'naturaleza' && duracionSeleccionada === 'mas-de-un-mes') {
      document.getElementById(`resultado-naturaleza-mas-mes`).classList.add(`Mostrar`)
    }


    // Mostrar resultado para tipo "ciudad"
    if (tipoSeleccionado === 'ciudad' && duracionSeleccionada === 'menos-semana') {
      document.getElementById('resultado-ciudad-menos-semana').classList.add('Mostrar')
    } else if (tipoSeleccionado === 'ciudad' && duracionSeleccionada === 'una-semana') {
      document.getElementById('resultado-ciudad-una-semana').classList.add('Mostrar')

    } else if (tipoSeleccionado === 'ciudad' && duracionSeleccionada === 'dos-semanas') {
      document.getElementById(`resultado-ciudad-dos-semanas`).classList.add(`Mostrar`)
    } else if (tipoSeleccionado === 'ciudad' && duracionSeleccionada === 'tres-semanas') {
      document.getElementById(`resultado-ciudad-tres-semanas`).classList.add(`Mostrar`)
    } else if (tipoSeleccionado === 'ciudad' && duracionSeleccionada === 'un-mes') {
      document.getElementById(`resultado-ciudad-un-mes`).classList.add(`Mostrar`)
    } else if (tipoSeleccionado === 'ciudad' && duracionSeleccionada === 'mas-de-un-mes') {
      document.getElementById(`resultado-ciudad-mas-mes`).classList.add(`Mostrar`)
    }

    // Mostrar resultado para tipo "combinado"
    if (tipoSeleccionado === 'combinado' && duracionSeleccionada === 'menos-semana') {
      document.getElementById('resultado-combinado-menos-semana').classList.add('Mostrar')
    } else if (tipoSeleccionado === 'combinado' && duracionSeleccionada === 'una-semana') {
      document.getElementById('resultado-combinado-una-semana').classList.add('Mostrar')

    } else if (tipoSeleccionado === 'combinado' && duracionSeleccionada === 'dos-semanas') {
      document.getElementById(`resultado-combinado-dos-semanas`).classList.add(`Mostrar`)
    } else if (tipoSeleccionado === 'combinado' && duracionSeleccionada === 'tres-semanas') {
      document.getElementById(`resultado-combinado-tres-semanas`).classList.add(`Mostrar`)
    } else if (tipoSeleccionado === 'combinado' && duracionSeleccionada === 'un-mes') {
      document.getElementById(`resultado-combinado-un-mes`).classList.add(`Mostrar`)
    } else if (tipoSeleccionado === 'combinado' && duracionSeleccionada === 'mas-de-un-mes') {
      document.getElementById(`resultado-combinado-mas-mes`).classList.add(`Mostrar`)
    }

  })
})

/**
 * Evento que cierra el resultado visible al hacer clic en el botón de cerrar.
 * 
 * @param {MouseEvent} e Evento del clic
 * @return {undefined} No tiene return
 */
botonCerrar.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    ventanaResultado[i].classList.remove('Mostrar')
  })
})

/**
 * Evento que marca visualmente el tipo de experiencia seleccionada,
 * eliminando la clase 'seleccionado' del resto.
 * 
 * @param {MouseEvent} e Evento del clic
 * @return {undefined} No tiene return
 */
tipoExperiencia.forEach((_, i) => {
  tipoExperiencia[i].addEventListener(`click`, () => {
    tipoExperiencia.forEach((_, j) => {
      tipoExperiencia[j].classList.remove(`seleccionado`)
    })
    tipoExperiencia[i].classList.add(`seleccionado`)
  })
})