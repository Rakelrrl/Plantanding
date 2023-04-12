
// class Memorama {

//     constructor(){

//         this.can
//     }

// }

/* Cuando el documento se haya cargado completamente */
// document.addEventListener("DOMContentLoaded", () => {

//     new Memorama(); 

// })

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});





/* CAROUSEL */

let counter = 1;

    setInterval(function(){
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if(counter > 3){
        counter = 1;
        }
    }, 5000);



/* CARRITO Y FAV */

// const favoritos = document.querySelector("anadirFavoritos")

// favoritos.addEventListener("click", function(){
    
// })




