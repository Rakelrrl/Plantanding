
// class Memorama {

//     constructor(){

//         this.can
//     }

// }

/* Cuando el documento se haya cargado completamente */
// document.addEventListener("DOMContentLoaded", () => {

//     new Memorama(); 

// })



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




