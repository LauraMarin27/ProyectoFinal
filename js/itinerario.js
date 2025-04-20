'use strict'

const ventanaResultado = document.querySelectorAll(`.Resultado`)
const botonCerrar = document.querySelectorAll(`.cerrar`)
const botonMostrarResultados = document.querySelectorAll(`.Cuestionario-boton button`)
const tipoExperiencia = document.querySelectorAll(`.icono-nombre`)
const duracion = document.getElementById(`duracion`)




botonMostrarResultados.forEach((_,i)=>{
    botonMostrarResultados[i].addEventListener(`click`, (e)=>{
        e.preventDefault()

        const tipoSeleccionado = document.querySelector('input[name="tipo"]:checked').value
        const duracionSeleccionada = duracion.value

        if (tipoSeleccionado === 'playa' && duracionSeleccionada === 'menos-semana') {
            document.getElementById('resultado-playa-menos-semana').classList.add('Mostrar')
          }else if(tipoSeleccionado === 'playa' && duracionSeleccionada === 'una-semana'){
            document.getElementById('resultado-playa-una-semana').classList.add('Mostrar')

          }






    })
})

botonCerrar.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      ventanaResultado[i].classList.remove('Mostrar')
    })
  })



tipoExperiencia.forEach((_,i)=>{
    tipoExperiencia[i].addEventListener(`click`,()=>{
        tipoExperiencia.forEach((_,j)=>{
            tipoExperiencia[j].classList.remove(`seleccionado`)
        })

        tipoExperiencia[i].classList.add(`seleccionado`)
    })
})