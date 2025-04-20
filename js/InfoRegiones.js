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
    const grande = regionContent.querySelector(`.Carrousel-grande`)
    const puntos = regionContent.querySelectorAll(`.punto`)
    const carrouselImg = regionContent.querySelectorAll(`.Carrousel-imagen-info`)
    const numImgs = carrouselImg.length

    let contador = 0;

    const moverCarrousel = ()=>{
        if (!grande) return;
        let operacion = contador * -20
        grande.style.transform = `translateX(${operacion}%)`;
        puntos.forEach((_, i)=>{
            puntos[i].classList.remove(`activo`)

            if(i === contador){
                puntos[i].classList.add(`activo`)
            }

        })

    }





    puntos.forEach((punto, i) => {
        punto.addEventListener(`click`, () => {
            contador = i;
            moverCarrousel()
        });
    });


    const windowKeydownHandler = (e)=>{
        const { key } = e

        if(key === 'ArrowRight'){
            contador = (contador + 1) % numImgs
            moverCarrousel()
        }

        if (key === 'ArrowLeft') {
            contador = (contador - 1 + numImgs) % numImgs;
            moverCarrousel();
        }



    }

    window.addEventListener(`keydown` , windowKeydownHandler )




});

