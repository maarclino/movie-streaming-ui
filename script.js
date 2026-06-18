document.addEventListener('DOMContentLoaded', function() {

    // 1. Llegir els paràmetres de la URL
    const params = new URLSearchParams(window.location.search)

    // 2. Agafar els elements HTML
    const reproductor = document.getElementById('video-player')
    const video = document.getElementById('video-source')
    const titolpelicula = document.getElementById('titol-pelicula')

    // 3. Assignar els valors
    titolpelicula.textContent = params.get('title')
    video.setAttribute('src', 'videos/' + params.get('file'))
    reproductor.setAttribute('poster', params.get('poster'))

    // 4. Recarregar el vídeo amb .load()
    reproductor.load()
})