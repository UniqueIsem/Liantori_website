/*-----jQuery-----*/
/*$('.button')on('click',()=>{
    $('.nav').toggleClass('activo')
})*/

const button = document.querySelector('.menu_button')
const nav = document.querySelector('.nav')

button.addEventListener('click', () => {
    nav.classList.toggle('activo')
})

let contador = 0;
function proyector(casa, btn) {
    let imgCasa1 = ["casa1.jpeg", "casa2.jpg", "casa3.jpg"];
    let imgCasa2 = ["casa2.jpg", "casa3.jpg", "casa1.jpeg"];
    let imgCasa3 = ["casa3.jpg", "casa1.jpeg", "casa2.jpg"];
    
    let imagen;
    let imgArray;

    switch (casa) {
        case 'casa1':
            imagen = document.getElementById("propiedad_aside1");
            contador = btn === "siguiente" ? ++contador : --contador;
            imgArray = imgCasa1;
            break;
        case 'casa2':
            imagen = document.getElementById("propiedad_aside2");
            contador = btn === "siguiente" ? ++contador : --contador;
            imgArray = imgCasa2;
            break;
        case 'casa3':
            imagen = document.getElementById("propiedad_aside3");
            contador = btn === "siguiente" ? ++contador : --contador;
            imgArray = imgCasa3;
            break;
    }
    
    if (contador >= imgArray.length) {
        contador = 0;
    } else if (contador < 0) {
        contador = imgArray.length - 1;
    }

    let rutaImg = "../images/" + imgArray[contador];
    imagen.style.backgroundImage = "url(" + rutaImg + ")";
}