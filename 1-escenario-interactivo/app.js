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