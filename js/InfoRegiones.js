'use strict'

const tabs = document.querySelectorAll('.Regiones-tabs-button');
const tabContents = document.querySelectorAll('.Regiones-content');

tabs.forEach((_, i )=>{
    tabs[i].addEventListener(`click`, ()=>{
        
        tabs.forEach((_,j)=>{
            tabs[j].classList.remove('active')
            tabContents[j].classList.remove('active')
           
        })

        tabs[i].classList.add('active')

        tabContents[i].classList.add('active')

    })
})

//Me he ayudado con chatgpt 
//Para que las imágenes se muestren en el contenedor correspondiente según el bloque al que pertenecen, puedes organizar el código para que cada Departamento-grande esté asociado al contenedor Regiones-content al que pertenece
const departamentos = document.querySelectorAll(`.departamentos-list-li`);
const cerrarBotones = document.querySelectorAll('.Departamento-grande-button');

departamentos.forEach((departamento) => {
    departamento.addEventListener(`click`, (e) => {
        e.preventDefault();

        // Encontrar el contenedor padre más cercano (Regiones-content)
        const regionContent = departamento.closest('.Regiones-content');

        // Encontrar el contenedor Departamento-grande dentro de esa región
        const imagenGrande = regionContent.querySelector(`.Departamento-grande`);
        const imagen = imagenGrande.querySelector(`.imagenGrandeDepartamento`);
        const galeriaImg = departamento.querySelector('.departamentos-list-img');

     
        imagenGrande.classList.remove(`isVisible`);

       
        const ruta = galeriaImg.src;
       
        imagen.setAttribute(`src`, ruta);
    });
});

cerrarBotones.forEach((cerrar) => {
    cerrar.addEventListener(`click`, (e) => {
        e.preventDefault();

        // Encontrar el contenedor padre más cercano (Regiones-content)
        const regionContent = cerrar.closest('.Regiones-content');

        // Encontrar el contenedor Departamento-grande dentro de esa región
        const imagenGrande = regionContent.querySelector(`.Departamento-grande`);

        // Ocultar el contenedor Departamento-grande
        imagenGrande.classList.add(`isVisible`);
    });
});



document.querySelectorAll('.Regiones-content').forEach((regionContent) => {
    const grande = regionContent.querySelector(`.Carrousel-grande`);
    const puntos = regionContent.querySelectorAll(`.punto`);

    puntos.forEach((punto, i) => {
        punto.addEventListener(`click`, () => {
            let posicion = i;
            let operacion = posicion * -20;

            // Mover el carrusel correspondiente
            grande.style.transform = `translateX(${operacion}%)`;

            // Remover la clase 'activo' de todos los puntos en este carrusel
            puntos.forEach((p) => {
                p.classList.remove(`activo`);
            });

            // Agregar la clase 'activo' al punto actual
            punto.classList.add(`activo`);
        });
    });
});