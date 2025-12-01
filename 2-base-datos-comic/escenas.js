import { comic } from "./bd.js";

const param = new URLSearchParams(window.location.search);
const id = parseInt(param.get("id")); 

const escenas = comic.escenas.find(p => p.ep == id);

const contenedor = document.querySelector(".mitonic-info");

contenedor.innerHTML = `

<video width="100%" height="600px" controls>
<source src="${comic.video}" type="video/mp4">
</video>

<div class="mitonic-info">

        <h1 class="mitonic-titulo">${escenas.name}</h1>

        <div class="mitonic-meta">
            <span>${comic.year}</span>
            <span>${comic.genero}</span>
            <span>${comic.temporadas} Temporada</span>
        </div>

        

        <p class="mitonic-descripcion">${escenas.descripcion}</p>

        <p class="mitonic-cast">
            <strong>Protagonistas:</strong> Adrian Salvatierra, Ninove, Monje, Aristóteles, Platón, Socrates, Senador. <br>
            <strong>Creador:</strong> Hillary C.
        </p>
    </div>

`