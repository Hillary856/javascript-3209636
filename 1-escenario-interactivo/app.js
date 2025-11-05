const diamantes = document.querySelectorAll('.diamond');
const score = document.querySelector('.contador');
let i = 0

// no puedo dar nulo
console.log(diamantes);
console.log(score);

diamantes.forEach(item => {


    item.addEventListener('click', () => {
        item.classList.add('saltar');
        i++
        score.textContent = i
    })


    item.addEventListener('animationend', () => {
        item.computedStyleMap.display = "none"
    }, { once: true })

})


const monedas = document.querySelectorAll('.money')
const recolecta = document.querySelector('.suma')
let counterMonedas = 0

console.log(monedas);
console.log(score);

monedas.forEach(item => {


    item.addEventListener('click', () => {
        item.classList.add('saltar');
        counterMonedas++
        recolecta.textContent = counterMonedas
    })


    item.addEventListener('animationend', () => {
        item.computedStyleMap.display = "none"
    }, { once: true })

})



const corazon = document.querySelectorAll('.heart')
const otromas = document.querySelector('.mas')
let couterCorazones = 0

console.log(otromas);
console.log(corazon);

corazon.forEach(item => {


    item.addEventListener('click', () => {
        item.classList.add('saltar');
        couterCorazones++
        otromas.textContent = couterCorazones
    })


    item.addEventListener('animationend', () => {
        item.computedStyleMap.display = "none"
    }, { once: true })

})


const escenas = document.querySelectorAll(".escena");
const btnanterior = document.querySelector(".flecha1");
const btnsiguiente = document.querySelector(".flecha2");
const miniaturas = document.querySelectorAll(".miniatura");

let indice = 0;

/*Funciones*/
function mostrarescena (i) {
  for (let j = 0; j < escenas.length; j++) {
     escenas[j].classList.remove("activa");
  }
  escenas[i].classList.add("activa");
  indice = i;
}
mostrarescena(2);

/*Eventos*/

//funcion anterior//
btnanterior.addEventListener("click", () => { 
    indice = indice - 1;
    if (indice < 0) {
        indice = escenas.length - 1; //para ir a última imagen//
    }
    mostrarescena(indice);
});

//funcion siguiente//
btnsiguiente.addEventListener("click", () => { 
    indice = indice + 1;
    if (indice > escenas.length - 1) {
        indice = 0; //para volver a la primera imagen//
    }
    mostrarescena(indice);
});

//Miniatura//
miniaturas.forEach((min, i) => {
    min.addEventListener("click", () => {
        mostrarescena(i);
    });
});


