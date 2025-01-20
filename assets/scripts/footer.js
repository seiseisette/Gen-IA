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
    let isScrollingUp = false;
    let debounceTimeout;

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

    function handleFooterVisibility() {
        const currentScrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const documentHeight = document.body.offsetHeight;

        // Determine scroll direction
        isScrollingUp = currentScrollY < lastScrollY;

        if (currentScrollY + viewportHeight >= documentHeight) {
            // User is at the bottom of the page
            footerBanner.classList.add("active");
        } else if (isScrollingUp) {
            // User is scrolling up
            footerBanner.classList.add("active");
        } else {
            // User is scrolling down
            footerBanner.classList.remove("active");
        }

        lastScrollY = currentScrollY;
    }

    function debounce(func, delay) {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(func, delay);
    }

    // Initialize footer content
    fetchFooterContent();

    // Add scroll listener with debounce for better performance
    window.addEventListener("scroll", () => {
        debounce(handleFooterVisibility, 100); // Adjust sensitivity by changing delay
    });

    // Initial check
    handleFooterVisibility();
});