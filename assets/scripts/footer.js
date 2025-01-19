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
    const dynamicFooter = document.getElementById("dynamic-footer");

    // Handle footer visibility on scroll
    function handleFooterScroll() {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const documentHeight = document.body.offsetHeight;

        // Footer sticks when scrolled to the bottom
        if (scrollY + viewportHeight >= documentHeight) {
            footerBanner.classList.add("active");
        } else {
            footerBanner.classList.remove("active");
        }
    }

    // Add scroll listener
    window.addEventListener("scroll", handleFooterScroll);

    // Initial check in case of short pages
    handleFooterScroll();
});