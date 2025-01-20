/*
===============================================================================
# Project: Gen-IA
# Website: Minimal welcome website
===============================================================================

## GENiALABILE
Advanced-GPT inspiring multidimensional solutions and unlocking creative potential.

-------------------------------------------------------------------------------
## License
© 2025 GENiALABILE. All Rights Reserved.
A GPT-Based Project — Designed by seiseisette.
Repository: https://github.com/seiseisette/
This project is no longer available as open-source. Updated: 10 Jan 2025.
Use, distribution, or modification of this project is strictly prohibited without prior written authorization.
-------------------------------------------------------------------------------

# Version: v3.2 COMPILER (160125)
# URL: https://genialabile.com/assets/scripts/footer.js
===============================================================================
*/

document.addEventListener("DOMContentLoaded", function () {
    const footerBanner = document.getElementById("footer-banner");
    const footerContainer = document.getElementById("footer-content");

    async function fetchFooterContent() {
        try {
            const response = await fetch('https://genialabile.com/2footer.html');
            if (!response.ok) {
                throw new Error('Failed to fetch footer content');
            }
            const data = await response.text();
            footerContainer.innerHTML = data;
        } catch (error) {
            console.error('Error fetching footer:', error);
        }
    }

    function handleFooterScroll() {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const documentHeight = document.body.offsetHeight;

        const triggerOffset = window.innerWidth > 1024 ? 50 : 0; // Aggiunta sensibilità per schermi desktop

        if (scrollY + viewportHeight + triggerOffset >= documentHeight) {
            // Attiva il footer quando si arriva in fondo
            footerBanner.classList.add("active");
        } else {
            // Nascondi il footer quando si scorre verso l'alto
            footerBanner.classList.remove("active");
        }
    }

    // Inizializza il contenuto del footer
    fetchFooterContent();

    // Aggiungi il listener per lo scroll
    window.addEventListener("scroll", handleFooterScroll);

    // Controllo iniziale per il caricamento della pagina
    handleFooterScroll();
});