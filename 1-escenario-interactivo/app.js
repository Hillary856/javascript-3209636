 const diamantes = document.querySelectorAll('.diamond');
 const score = document.querySelector('.contador');
 let i = 0

 // no puedo dar nulo
 console.log(diamantes);
 console.log(score);

 diamantes.forEach( item => {
    

item.addEventListener('click', () => {
    item.classList.add('saltar');
    i++
    score.textContent = i
})


item.addEventListener( 'animationend', () => {
item.computedStyleMap.display = "none"
}, {once: true})

 })