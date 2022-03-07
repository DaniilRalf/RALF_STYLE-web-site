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



    //faq--------------------------------------
    const questions = document.querySelectorAll('.faq-block-item');

    questions.forEach(element=>{
        element.addEventListener('click', ()=>{
            // console.dir(element);
            let el = element.childNodes[3];
            // console.log(el);
            el.classList.toggle('faq__description-open');

            let close = element.childNodes[1].childNodes[3].childNodes[1];
            // console.log(close);
            close.classList.toggle('faq-block-item__icon-left__close');
            
        });
    });






    // DINAMIC===============================================================
    const dinamic = document.querySelector('.dinamic');
    const dinamicBack = document.querySelectorAll('.dinamic-back');
    const btn_close = document.querySelector('.dinamic-back-close');

    const contact__btn = document.querySelectorAll('.contact__btn');
    const delivery__btn = document.querySelectorAll('.delivery__btn');
    const politics__btn = document.querySelector('.politics__btn');
    const return__btn = document.querySelector('.return__btn');

    const contact = document.querySelector('.contact');
    const delivery = document.querySelector('.delivery');
    const politics = document.querySelector('.politics');
    const return_ = document.querySelector('.return'); 


    const closed = function () {
        new Promise((resolve)=>{
            dinamic.style.opacity = "0";
            dinamicBack.forEach(element=>{
                element.style.opacity = "0";
            });
            // dinamicBack.style.opacity = "0";
            setTimeout(()=>{
                resolve();
            }, 700);
        }).then(()=>{
            dinamic.style.display = "none";
            dinamicBack.forEach(element=>{
                element.style.display = "none";
            });
            // dinamicBack.style.display = "none";
        });
    };
    dinamic.addEventListener('click', ()=>{
        closed();
    });
    btn_close.addEventListener('click', ()=>{
        closed();
    });



    const open = function(one, second){
        new Promise((resolve)=>{
            one.style.display = "flex";
            second.style.display = "block";
            setTimeout(()=>{
                resolve();
            }, 0);
        }).then(()=>{
            one.style.opacity = "100%";
            second.style.opacity = "100%";
        });
    };



    contact__btn.forEach(element=> {
        element.addEventListener('click', ()=>{
            open(dinamic, contact);
        });
    });
    delivery__btn.forEach(element=> {
        element.addEventListener('click', ()=>{
            open(dinamic, delivery);
        });
    });
    politics__btn.addEventListener('click', ()=>{
        open(dinamic, politics);
    });
    return__btn.addEventListener('click', ()=>{
        open(dinamic, return_);
    });






    // TOVAR===============================================================





    

});