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
    let scrollingTimeout;

    async function fetchFooterContent() {
        try {
            const response = await fetch('https://genialabile.com/2footer.html');
            if (!response.ok) throw new Error('Failed to fetch footer content');
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

        const atPageBottom = scrollY + viewportHeight >= documentHeight - 20;
        const atPageTop = scrollY <= 5;
        const scrollingDown = scrollY > lastScrollY;

        clearTimeout(scrollingTimeout);

        // Mostra il footer quando si arriva al fondo
        if (atPageBottom && !isFooterVisible) {
            footerBanner.classList.add("active");
            isFooterVisible = true;
        }

        // Nascondi il footer quando si torna verso il basso dalla cima
        if (atPageTop && isFooterVisible && scrollingDown) {
            footerBanner.classList.remove("active");
            isFooterVisible = false;
        }

        // Nascondi il footer su scorrimenti continui verso il basso
        scrollingTimeout = setTimeout(() => {
            if (!atPageBottom && scrollingDown) {
                footerBanner.classList.remove("active");
                isFooterVisible = false;
            }
        }, 150); // Velocità ottimizzata per mobile

        lastScrollY = scrollY;
    }

    function addTouchSupport() {
        let touchStartY = 0;
        let touchEndY = 0;

        window.addEventListener("touchstart", (e) => {
            touchStartY = e.touches[0].clientY;
        });

        window.addEventListener("touchmove", (e) => {
            touchEndY = e.touches[0].clientY;

            if (touchEndY < touchStartY && !isFooterVisible) {
                footerBanner.classList.add("active");
                isFooterVisible = true;
            } else if (touchEndY > touchStartY && isFooterVisible) {
                footerBanner.classList.remove("active");
                isFooterVisible = false;
            }
        });
    }

    // Adattamento animazione per mobile
    const disappearSpeed = window.innerWidth < 768 ? 350 : 500;
    const appearSpeed = disappearSpeed * 0.9;

    footerBanner.style.transition = `
        transform ${disappearSpeed}ms ease-in-out, 
        opacity ${appearSpeed}ms ease-in-out
    `;

    // Inizializza contenuto del footer e ascoltatori
    fetchFooterContent();
    window.addEventListener("scroll", handleScroll);
    addTouchSupport();
    handleScroll();
});