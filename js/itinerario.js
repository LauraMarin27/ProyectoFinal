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

          }else if(tipoSeleccionado === 'playa' && duracionSeleccionada === 'dos-semanas'){
            document.getElementById(`resultado-playa-dos-semanas`).classList.add(`Mostrar`)
          }else if(tipoSeleccionado === 'playa' && duracionSeleccionada === 'tres-semanas'){
            document.getElementById(`resultado-playa-tres-semanas`).classList.add(`Mostrar`)
          }else if(tipoSeleccionado === 'playa' && duracionSeleccionada === 'un-mes'){
            document.getElementById(`resultado-playa-un-mes`).classList.add(`Mostrar`)
          }else if(tipoSeleccionado === 'playa' && duracionSeleccionada === 'mas-de-un-mes'){
            document.getElementById(`resultado-playa-mas-mes`).classList.add(`Mostrar`)
          }


          if (tipoSeleccionado === 'naturaleza' && duracionSeleccionada === 'menos-semana') {
            document.getElementById('resultado-naturaleza-menos-semana').classList.add('Mostrar')
          }else if(tipoSeleccionado === 'naturaleza' && duracionSeleccionada === 'una-semana'){
            document.getElementById('resultado-naturaleza-una-semana').classList.add('Mostrar')

          }else if(tipoSeleccionado === 'naturaleza' && duracionSeleccionada === 'dos-semanas'){
            document.getElementById(`resultado-naturaleza-dos-semanas`).classList.add(`Mostrar`)
          }else if(tipoSeleccionado === 'naturaleza' && duracionSeleccionada === 'tres-semanas'){
            document.getElementById(`resultado-naturaleza-tres-semanas`).classList.add(`Mostrar`)
          }else if(tipoSeleccionado === 'naturaleza' && duracionSeleccionada === 'un-mes'){
            document.getElementById(`resultado-naturaleza-un-mes`).classList.add(`Mostrar`)
          }else if(tipoSeleccionado === 'naturaleza' && duracionSeleccionada === 'mas-de-un-mes'){
            document.getElementById(`resultado-naturaleza-mas-mes`).classList.add(`Mostrar`)
          }


          if (tipoSeleccionado === 'ciudad' && duracionSeleccionada === 'menos-semana') {
            document.getElementById('resultado-ciudad-menos-semana').classList.add('Mostrar')
          }else if(tipoSeleccionado === 'ciudad' && duracionSeleccionada === 'una-semana'){
            document.getElementById('resultado-ciudad-una-semana').classList.add('Mostrar')

          }else if(tipoSeleccionado === 'ciudad' && duracionSeleccionada === 'dos-semanas'){
            document.getElementById(`resultado-ciudad-dos-semanas`).classList.add(`Mostrar`)
          }else if(tipoSeleccionado === 'ciudad' && duracionSeleccionada === 'tres-semanas'){
            document.getElementById(`resultado-ciudad-tres-semanas`).classList.add(`Mostrar`)
          }else if(tipoSeleccionado === 'ciudad' && duracionSeleccionada === 'un-mes'){
            document.getElementById(`resultado-ciudad-un-mes`).classList.add(`Mostrar`)
          }else if(tipoSeleccionado === 'ciudad' && duracionSeleccionada === 'mas-de-un-mes'){
            document.getElementById(`resultado-ciudad-mas-mes`).classList.add(`Mostrar`)
          }

          if (tipoSeleccionado === 'combinado' && duracionSeleccionada === 'menos-semana') {
            document.getElementById('resultado-combinado-menos-semana').classList.add('Mostrar')
          }else if(tipoSeleccionado === 'combinado' && duracionSeleccionada === 'una-semana'){
            document.getElementById('resultado-combinado-una-semana').classList.add('Mostrar')

          }else if(tipoSeleccionado === 'combinado' && duracionSeleccionada === 'dos-semanas'){
            document.getElementById(`resultado-combinado-dos-semanas`).classList.add(`Mostrar`)
          }else if(tipoSeleccionado === 'combinado' && duracionSeleccionada === 'tres-semanas'){
            document.getElementById(`resultado-combinado-tres-semanas`).classList.add(`Mostrar`)
          }else if(tipoSeleccionado === 'combinado' && duracionSeleccionada === 'un-mes'){
            document.getElementById(`resultado-combinado-un-mes`).classList.add(`Mostrar`)
          }else if(tipoSeleccionado === 'combinado' && duracionSeleccionada === 'mas-de-un-mes'){
            document.getElementById(`resultado-combinado-mas-mes`).classList.add(`Mostrar`)
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