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

        if (scrollY + viewportHeight >= documentHeight) {
            footerBanner.classList.add("active");
        } else {
            footerBanner.classList.remove("active");
        }
    }

    // Initialize footer content and scroll listener
    fetchFooterContent();
    window.addEventListener("scroll", handleFooterScroll);
    handleFooterScroll();
});


*/



document.addEventListener("DOMContentLoaded", function () {
    const footerBanner = document.getElementById("footer-banner");
    let lastScrollY = window.scrollY;

    function handleFooterVisibility() {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const documentHeight = document.body.offsetHeight;

        // Scrolling down: footer appears only at the bottom
        if (scrollY + viewportHeight >= documentHeight) {
            footerBanner.classList.add("active");
        } 
        // Scrolling up: footer hides
        else if (scrollY < lastScrollY) {
            footerBanner.classList.remove("active");
        }

        // Update last scroll position
        lastScrollY = scrollY;
    }

    // Add scroll listener
    window.addEventListener("scroll", handleFooterVisibility);

    // Check initial position on page load
    handleFooterVisibility();

    // Ensure footer re-renders properly if viewport changes
    window.addEventListener("resize", handleFooterVisibility);
});