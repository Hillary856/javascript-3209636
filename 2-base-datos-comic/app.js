const infoComic = document.querySelector(".info-comic")
const listaCapitulos = document.querySelector(".lista-capitulos")

console.log(infoComic)
console.log(listaCapitulos)

//Modificar contenido de info general comic

infoComic.innerHTML = `
    <p>${comic.year}</p>
    <h1>${comic.nombreComic}</h1>
    <p>${comic.sipnosis}</p>
    <p>${comic.genero}</p>
    <p>${comic.personajes.join(", ")} </p>
`