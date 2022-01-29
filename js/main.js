'use strict'
window.addEventListener('DOMContentLoaded', ()=> {

    // burger \ menu----------------------------
    const burger = document.querySelector('.header-burger'),
          burgerItem = burger.querySelectorAll('.header-burger-item'),
          menu = document.querySelector('.menu-block');

    burger.addEventListener('click', (event) => {

        burgerItem.forEach((el, i)=> {
            if (i == 0){
                el.classList.toggle('first-line');
            }
            if (i == 1){
                el.classList.toggle('second-line');
            }
            if (i == 2){
                el.classList.toggle('third-line');
            }
        });
        menu.classList.toggle('menu-block-close');
    });








    

});