const audio = document.getElementById('audioFondo');
const video = document.getElementById('video');

// Función para que se reiniciar la música.
function restartAudio() {
    audio.currentTime = 0; // Establece el tiempo de reproducción en 0 (inicio)
    audio.play();
}

audio.addEventListener('ended', restartAudio()); // Cuando termine, reinicia la reproducción

// Cuando se esté viendo el video la música se pausará.
video.addEventListener('play', () => {
    audio.pause();
});

// Cuando se pause el video o finalice seguirá la música de fondo.
video.addEventListener('pause', () => {
    audio.play();
});

