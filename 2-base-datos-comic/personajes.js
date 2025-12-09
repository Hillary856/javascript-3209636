import { comic } from "./bd.js"

//URLSearchParams(window.location.search)
//const parametros = new URLSearchParams("id");
const param = new URLSearchParams(window.location.search);
const id = parseInt(param.get("id")); 

const personaje = comic.personajes.find(p => p.id == id);

const contenedor = document.querySelector(".contenedor")

contenedor.innerHTML = `
<div class="personaje-imagen">
        <h2>${personaje.nombre}</h2>
        <img src="${personaje.imagem}" alt="Personaje">
    </div>

    
    <div class="cuadro-naranja">
        <h3>Datos del Personaje</h3>
        <p><strong>Edad:</strong> 30 años</p>
        <p>${personaje.descripcion}</p>
        <p><strong>Participación:</strong> Protagonista</p>
    </div>
 <a href="index.html"><button class="boton-inicio">INICIO</button></a>
`
