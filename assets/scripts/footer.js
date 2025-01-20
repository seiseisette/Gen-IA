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

    let lastScrollY = 0;
    let isFooterVisible = false;

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

        if (atPageBottom && !isFooterVisible) {
            // Mostra il footer quando si arriva al fondo
            footerBanner.classList.add("active");
            isFooterVisible = true;
        } else if (atPageTop && isFooterVisible && scrollingDown) {
            // Nascondi il footer quando si inizia a scorrere verso il basso dalla cima
            footerBanner.classList.remove("active");
            isFooterVisible = false;
        }

        lastScrollY = scrollY;
    }

    // Velocità animazione
    const disappearSpeed = 400; // Tempo di scomparsa
    const appearSpeed = disappearSpeed * 0.9; // Tempo di comparsa ridotto del 10%

    footerBanner.style.transition = `
        transform ${disappearSpeed}ms ease-in-out, 
        opacity ${appearSpeed}ms ease-in-out
    `;

    // Inizializzazione
    fetchFooterContent();
    window.addEventListener("scroll", handleScroll);
    handleScroll();
});