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

    let lastScrollY = window.scrollY;
    let isWideScreen = window.innerWidth > 1024; // Definisce se lo schermo è largo

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
        const currentScrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const documentHeight = document.body.offsetHeight;

        const sensitivity = isWideScreen ? 20 : 50; // Maggiore sensibilità su schermi larghi

        if (currentScrollY + viewportHeight >= documentHeight) {
            // Se si raggiunge il fondo
            footerBanner.classList.add("active");
        } else if (currentScrollY > lastScrollY + sensitivity) {
            // Scorrimento verso il basso (nascondi)
            footerBanner.classList.remove("active");
        } else if (currentScrollY < lastScrollY - sensitivity) {
            // Scorrimento verso l'alto (mostra)
            footerBanner.classList.add("active");
        }

        lastScrollY = currentScrollY;
    }

    function handleResize() {
        // Aggiorna lo stato dello schermo largo
        isWideScreen = window.innerWidth > 1024;
    }

    // Inizializza il contenuto del footer
    fetchFooterContent();

    // Listener per lo scroll
    window.addEventListener("scroll", handleFooterScroll);

    // Listener per il ridimensionamento dello schermo
    window.addEventListener("resize", handleResize);

    // Controllo iniziale
    handleFooterScroll();
});