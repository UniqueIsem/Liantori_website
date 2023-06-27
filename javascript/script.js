/*-----jQuery-----*/
/*$('.button')on('click',()=>{
    $('.nav').toggleClass('activo')
})*/

const button = document.querySelector('.menu_button')
const nav = document.querySelector('.nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})

