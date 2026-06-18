document.addEventListener('DOMContentLoaded', function() {

    fetch('movies.json')
        .then(function(resposta) {
            return resposta.json()
        })
        .then(function(pellicules) {
            pellicules.forEach(function(peli) {
    
                // Saltem les del banner
                if (peli.seccio === 'banner') return
            
                // Creem la targeta
                const col = document.createElement('div')
                col.className = 'col-12 col-sm-6 col-lg-3'
                col.innerHTML = `
                    <div class="card bg-dark text-white">
                        <img src="${peli.poster}" class="card-img-top" alt="${peli.titol}">
                        <div class="card-body">
                            <h5 class="card-title">${peli.titol}</h5>
                            <p class="card-text">${peli.genere} · ${peli.any}</p>
                            ${peli.arxiu ? 
                                `<a href="reproductor.html?file=${peli.arxiu}&title=${peli.titol}&poster=${peli.poster}" 
                                class="btn btn-warning btn-sm">${peli.seccio === 'continua' ? 'Continuar' : 'Reproduir'}</a>` 
                                : 
                                `<button class="btn btn-warning btn-sm" disabled>No disponible</button>`
                            }
                        </div>
                    </div>
                `
            
                // Afegim al contenidor correcte
                if (peli.seccio === 'continua') {
                    document.getElementById('continua-veient').appendChild(col)
                } else if (peli.seccio === 'recomanades') {
                    document.getElementById('recomanades').appendChild(col)
                }
            })
        })
})