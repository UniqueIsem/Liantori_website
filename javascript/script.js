/*-----jQuery-----*/
/*$('.button')on('click',()=>{
    $('.nav').toggleClass('activo')
})*/

const button = document.querySelector('.menu_button')
const nav = document.querySelector('.nav')

button.addEventListener('click', () => {
    nav.classList.toggle('activo')
})

var imgCasa1 = ["casa1.jpg", "casa2.jpg", "casa3.jpg"];
var imgCasa2 = ["casa1.jpg", "casa2.jpg", "casa3.jpg"];
var imgCasa3 = ["casa1.jpg", "casa2.jpg", "casa3.jpg"];
var contador1 = 0;
var contador2 = 0;
var contador3 = 0;
var imagen
function proyector(casa, btn) {
    switch(casa){
        case 'casa1':
            imagen = document.getElementById("propiedad_img1")
            if (btn == "siguiente") {
                contador1++;
                if (contador1 == imgCasa1.length) {
                    contador1 = 0;
                }
            } else if (btn == "anterior") {
                contador1--;
                if (contador1 < 0) {
                    contador1 = imgCasa1.length - 1;
                }
            }
            const rutaImg = "../images/" + imgCasa1[contador1];
            imagen.style.backgroundImage = 'url(${rutaImg})'
            break;
        case 'casa2':
            imagen = document.getElementById("propiedad_img2")
            if (btn == "siguiente") {
                contador2++;
                if (contador2 == imgCasa2.length) {
                    contador2 = 0;
                }
            } else if (btn == "anterior") {
                contador2--;
                if (contador2 < 0) {
                    contador2 = imgCasa2.length - 1;
                }
            }
            imagen.src = "../images/" + imgCasa2[contador2];
            break;
        case 'casa3':
            imagen = document.getElementById("propiedad_img3")
            if (btn == "siguiente") {
                contador3++;
                if (contador3 == imgCasa3.length) {
                    contador3 = 0;
                    
                }
            } else if (btn == "anterior") {
                contador3--;
                if (contador3 < 0) {
                    contador3 = imgCasa3.length - 1;
                }
            }
            imagen.src = "../images/" + imgCasa3[contador3];
            break;
    }
}