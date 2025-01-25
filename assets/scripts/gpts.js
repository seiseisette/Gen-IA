/*
===============================================================================
# Project: Gen-IA
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

# Version: v3.2 COMPILER (160125)
# URL: https://genialabile.com/assets/scripts/gpts.js
===============================================================================
*/

function toggleMenu() {
    const menuContent = document.getElementById('menuContent');
    const toggleIcon = document.querySelector('.menu-title .toggle-icon');
    
    if (menuContent.style.display === 'none' || menuContent.style.display === '') {
        menuContent.style.display = 'block';
        toggleIcon.textContent = '-';
    } else {
        menuContent.style.display = 'none';
        toggleIcon.textContent = '+';
    }
}