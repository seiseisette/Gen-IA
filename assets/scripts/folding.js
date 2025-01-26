/*
===============================================================================
# Project: genialabile.com
# Website: Minimal welcome website
===============================================================================

## GENiALABILE
Advanced-GPT inspiring multidimensional solutions and unlocking creative potential.

-------------------------------------------------------------------------------
### License
© 2025 Genialabile & Co. All Rights Reserved.
A GPT-Based Project — Designed by seiseisette.
Repository: https://github.com/seiseisette/
This project is no longer available as open-source. Updated: 10 Jan 2025.
Use, distribution, or modification of this project is strictly prohibited without prior written authorization.
-------------------------------------------------------------------------------

# Version: v3.2 FOLDING (250125)
# URL: https://genialabile.com/assets/scripts/folding.js
===============================================================================
*/

/*
===============================================================================
# Project: genialabile.com
# Website: Minimal welcome website
===============================================================================

## GENiALABILE
Advanced-GPT inspiring multidimensional solutions and unlocking creative potential.

-------------------------------------------------------------------------------
### License
© 2025 Genialabile & Co. All Rights Reserved.
A GPT-Based Project — Designed by seiseisette.
Repository: https://github.com/seiseisette/
This project is no longer available as open-source. Updated: 10 Jan 2025.
Use, distribution, or modification of this project is strictly prohibited without prior written authorization.
-------------------------------------------------------------------------------

# Version: v3.3 FOLDING (260125)
# URL: https://genialabile.com/assets/scripts/folding.js
===============================================================================
*/

function toggleMenu() {
    const menuContent = document.getElementById('menuContent');
    const toggleIcon = document.querySelector('.gpts-title .toggle-icon');

    // Debugging: Check if the element exists
    if (!menuContent) {
        console.error('Error: Element with ID "menuContent" not found.');
        return;
    }
    if (!toggleIcon) {
        console.error('Error: Element with class "toggle-icon" not found.');
        return;
    }

    // Toggle display state
    if (menuContent.style.display === 'none' || menuContent.style.display === '') {
        menuContent.style.display = 'block';
        toggleIcon.textContent = '-';
        console.log('Menu opened.'); // Debugging log
    } else {
        menuContent.style.display = 'none';
        toggleIcon.textContent = '+';
        console.log('Menu closed.'); // Debugging log
    }
}

// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector('.gpts-title');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
        console.log('Event listener attached to menu toggle.');
    } else {
        console.error('Error: Menu toggle element not found.');
    }
});


/*
function toggleMenu() {
    const menuContent = document.getElementById('menuContent');
    const toggleIcon = document.querySelector('.gpts-title .toggle-icon');
    
    if (menuContent.style.display === 'none' || menuContent.style.display === '') {
        menuContent.style.display = 'block';
        toggleIcon.textContent = '-';
    } else {
        menuContent.style.display = 'none';
        toggleIcon.textContent = '+';
    }
}
*/