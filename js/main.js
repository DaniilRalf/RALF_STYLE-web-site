'use strict';
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



    // tovar------------------------------------
    const tovar = document.querySelectorAll('.tovar-hudi-block');

    tovar.forEach(item => {
        item.addEventListener('mouseenter', () =>{
            let tovarUrl = item.childNodes[1].childNodes[0].src;
            let tovarUrlNew = `${tovarUrl.substring(0, tovarUrl.length - 4)}` + `-on.png`;
            item.childNodes[1].childNodes[0].src = tovarUrlNew;
        });
        item.addEventListener('mouseleave', () =>{
            let tovarUrl = item.childNodes[1].childNodes[0].src;
            let tovarUrlNew = `${tovarUrl.substring(0, tovarUrl.length - 7)}` + `.png`;
            item.childNodes[1].childNodes[0].src = tovarUrlNew;
        });
    });






});