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

    let lastScrollY = 0; // Posizione di scorrimento precedente
    let isFooterVisible = false; // Stato visibilità footer
    let scrollingTimeout; // Timeout per controllo fluido

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

    function handleScroll() {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const documentHeight = document.body.offsetHeight;

        const atPageBottom = scrollY + viewportHeight >= documentHeight - 10;
        const atPageTop = scrollY <= 10;
        const scrollingDown = scrollY > lastScrollY;

        clearTimeout(scrollingTimeout);

        // Mostra il footer quando si arriva al fondo
        if (atPageBottom && !isFooterVisible) {
            footerBanner.classList.add("active");
            isFooterVisible = true;
        }

        // Nascondi il footer in cima, quando si inizia a scorrere verso il basso
        if (atPageTop && isFooterVisible && scrollingDown) {
            footerBanner.classList.remove("active");
            isFooterVisible = false;
        }

        // Evita rimbalzi: controlla il comportamento con un timeout
        scrollingTimeout = setTimeout(() => {
            if (!atPageBottom && scrollingDown) {
                footerBanner.classList.remove("active");
                isFooterVisible = false;
            }
        }, 150);

        lastScrollY = scrollY;
    }

    // Velocità di animazione migliorata
    const disappearSpeed = 500; // Tempo di scomparsa in ms
    const appearSpeed = disappearSpeed * 0.9; // Tempo di comparsa ridotto del 10%

    footerBanner.style.transition = `
        transform ${disappearSpeed}ms ease-in-out, 
        opacity ${appearSpeed}ms ease-in-out
    `;

    // Inizializza contenuto del footer e ascoltatori
    fetchFooterContent();
    window.addEventListener("scroll", handleScroll);
    handleScroll();
});