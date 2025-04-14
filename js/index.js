'use strict'

const carrousel = document.querySelector(`.Hero-carrousel`)
const carrouselWrapper = document.querySelector(`.Hero-imagenes`)
const carrouselNext = document.querySelector(`.Hero-arrow--next`)
const carrouselPrev = document.querySelector(`.Hero-arrow--prev`)
const carrouselImg = document.querySelectorAll(`.Hero-img`)

const numImgs = carrouselImg.length

carrouselWrapper.style.width = `${100 * numImgs}%`
carrouselWrapper.style.gridTemplateColumns = `repeat( ${numImgs} , 1fr )`


let contador = 0


//Funciones
const carrouselWrapperMove = () =>{
    carrouselWrapper.style.translate = `-${(100 / numImgs) * contador}%`

}

const carrouselNextHandler = () =>{
    contador++
    if (contador >= numImgs) {
        contador = 0
    }
    carrouselWrapperMove()
   

}
const carrouselPrevHandler = () =>{
    contador--
    if (contador < 0) {
        contador = numImgs - 1
    }
    carrouselWrapperMove()
    


}

const windowKeydownHandler = ( e )=>{
    const { key } = e
    
    key == 'ArrowRight' && carrouselNextHandler()
    key == 'ArrowLeft'  && carrouselPrevHandler()
    
    if( key == 0 || key == 1 || key == 2 || key == 3 || key == 4 || key == 5 || key == 6 || key == 7 || key == 8 || key == 9 ){
        contador = key - 1
        carrouselWrapperMove()
        
    }

}


carrouselNext.addEventListener(`click` , carrouselNextHandler )
carrouselPrev.addEventListener(`click` , carrouselPrevHandler )
window.addEventListener(`keydown` , windowKeydownHandler )

const info = document.querySelector(`.Info`)
const infoEspecifica = document.querySelectorAll(`.Info-especifica`)
const infoSuperior = document.querySelectorAll(`.Info-superior`)
const botonCerrar = document.querySelectorAll(`.Info-superior-cerrar`)




infoEspecifica.forEach((_,i)=>{
    infoEspecifica[i].addEventListener(`click`,()=>{
         infoSuperior[i].classList.add(`Info-superior--visible`)

        if(botonCerrar[i]){
            botonCerrar[i].addEventListener(`click`,()=>{
                infoSuperior[i].classList.remove(`Info-superior--visible`)
               
            })
        }
      
    })
})




