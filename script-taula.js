document.addEventListener('DOMContentLoaded', function () {

    fetch('movies.json')
        .then(function (resposta) {
            return resposta.json()
        })
        .then(function (pellicules) {

            const tbody = document.querySelector('#taulaPelis tbody')

            pellicules.forEach(function (peli) {

                const fila = document.createElement('tr')
                fila.innerHTML = `
                    <td><img src="${peli.poster}" alt="${peli.titol}" class="poster-min"></td>
                    <td>${peli.titol}</td>
                    <td>${peli.genere}</td>
                    <td>${peli.any}</td>
                    <td>
                        ${peli.arxiu ? 
                            `<a href="reproductor.html?file=${peli.arxiu}&title=${peli.titol}&poster=${peli.poster}" class="btn btn-warning btn-sm">Reproduir</a>` 
                            : 
                            `<button class="btn btn-warning btn-sm" disabled>No disponible</button>`
                        }
                    </td>
                `
                tbody.appendChild(fila)
            })

            $('#taulaPelis').DataTable()
        })
})