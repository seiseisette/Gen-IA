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

        if (currentScrollY + viewportHeight >= documentHeight) {
            // Se l'utente è al fondo della pagina
            footerBanner.classList.add("active");
        } else if (currentScrollY > lastScrollY) {
            // Se l'utente scorre verso il basso
            footerBanner.classList.remove("active");
        } else if (currentScrollY < lastScrollY) {
            // Se l'utente scorre verso l'alto
            footerBanner.classList.add("active");
        }

        lastScrollY = currentScrollY;
    }

    // Inizializza il contenuto del footer
    fetchFooterContent();

    // Listener per lo scroll
    window.addEventListener("scroll", handleFooterScroll);

    // Controllo iniziale
    handleFooterScroll();
});