// ========================================
// PORTAFOLIO KEVIN BUSCH
// ========================================


// Confirmar que la página cargó

document.addEventListener(
    "DOMContentLoaded",
    () => {

        console.log(
            "Portafolio de Kevin Busch cargado correctamente."
        );

    }
);


// ========================================
// CAMBIAR NAVBAR AL HACER SCROLL
// ========================================

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(6, 10, 18, 0.97)";

        } else {

            navbar.style.background =
                "rgba(6, 10, 18, 0.85)";

        }

    }
);