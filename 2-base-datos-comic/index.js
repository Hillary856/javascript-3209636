import { comic } from "./bd.js"

const destacados = document.querySelector(".comic-destacado")
const mediaContenedor = document.querySelector(".media-contenedor")
const gridpersonajes = document.querySelector(".grid-personajes")

console.log(destacados)
console.log(mediaContenedor)
console.log(gridpersonajes)

destacados.innerHTML = `
<div class="comic-imagen">
            <img src="${comic.portada}">
        </div>
        <div class="comic-detalles">
            <h1>${comic.nombreComic}</h1>
            <h2>Temporada 2</h2>
            <p>${comic.sipnosis}</p>
            <div class="stats">
                <div class="stat">
                    <span class="numero">${comic.episodios}</span>
                    <span class="label">Episodios</span>
                </div>
                <div class="stat">
                    <span class="numero">${comic.calificacion}</span>
                    <span class="label">Calificación</span>
                </div>
                <div class="stat">
                    <span class="numero">${comic.seguidores}</span>
                    <span class="label">Seguidores</span>
                </div>
            </div>
        </div>

`
comic.escenas.forEach(escena => {
    const miCard = document.createElement("div")
    miCard.classList.add("media-card")
    miCard.innerHTML = `
    <a class ="link" href="escenas.html?id=${escena.ep}">
    <img src="${escena.image}" alt="">
            <div class="overlay">
                <p>${escena.name}</p>
            </div>
    </a>
    `
    mediaContenedor.appendChild(miCard)
    console.log(escena.name)
}
)


comic.personajes.forEach(personaje => {
    const miCard = document.createElement("div")
    miCard.classList.add("tarjeta-personaje")
    miCard.innerHTML = `
    <a class ="link" href= "personajes.html?id=${personaje.id}">
        <div class="personaje-avatar">👤</div>
        <h3>${personaje.nombre}</h3>
        <p>${personaje.descripcion}</p>
        </a>
    `
    gridpersonajes.appendChild(miCard)
})