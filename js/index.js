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



carrouselNext.addEventListener(`click` , carrouselNextHandler )
carrouselPrev.addEventListener(`click` , carrouselPrevHandler )


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




