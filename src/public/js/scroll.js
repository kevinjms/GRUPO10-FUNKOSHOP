document.addEventListener('DOMContentLoaded', function () {
    // Obtiene la posición superior de la imagen
    const imgElement = document.querySelector('.scroll');
    const imgTopOffset = imgElement.getBoundingClientRect().top;

    // Duración del desplazamiento en milisegundos
    const scrollDuration = 700;

    // Función para el desplazamiento suave
    function scrollToImage() {
        const start = window.pageYOffset;
        const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

        function scroll() {
            const currentTime = 'now' in window.performance ? performance.now() : new Date().getTime();
            const timeElapsed = currentTime - startTime;
            const scrollY = easeInOutCubic(timeElapsed, start, imgTopOffset, scrollDuration);

            window.scrollTo(0, scrollY);

            if (timeElapsed < scrollDuration) {
                requestAnimationFrame(scroll);
            }
        }

        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }

        scroll();
    }

    // Iniciar el desplazamiento suave después de 500ms
    setTimeout(scrollToImage, 100);
});
