input = document.querySelector('.input');
button = document.querySelector('.btn');



// button.addEventListener('click',() => {

//     input.classList.add('activo');
//     removeActivo()

// });

// function removeActivo() {
//     button.addEventListener('click',() => {
// input.classList.remove('activo')

// });
// }



button.addEventListener('click',() => {

    input.classList.toggle('activo');

});
