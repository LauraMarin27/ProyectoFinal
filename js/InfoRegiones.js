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