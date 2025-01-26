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

# Version: v3.2 COMPILER (160125)
# URL: https://genialabile.com/assets/scripts/folding.js
===============================================================================
*/



function toggleMenu() {
    const menuContent = document.getElementById('menuContent');
    const toggleIcon = document.querySelector('.menu-title .toggle-icon');
    
    // Debug: Check if the menu content exists
    if (!menuContent) {
        console.error("Debug: 'menuContent' not found. Ensure the element with ID 'menuContent' exists in the HTML.");
        alert("Error: Menu section not found. Please disable Ad-Block, especially on browsers like Arc Browser.");
        return;
    }

    // Debug: Check if the toggle icon exists
    if (!toggleIcon) {
        console.error("Debug: '.menu-title .toggle-icon' not found. Ensure the element with the class '.menu-title .toggle-icon' exists in the HTML.");
        alert("Error: Toggle icon not found. Please disable Ad-Block to ensure the menu loads properly.");
        return;
    }

    // Debug: Log the current state before toggling
    console.log("Debug: Current 'menuContent' display state:", menuContent.style.display);
    console.log("Debug: Current 'toggleIcon' text content:", toggleIcon.textContent);

    // Toggle menu visibility
    if (menuContent.style.display === 'none' || menuContent.style.display === '') {
        menuContent.style.display = 'block';
        toggleIcon.textContent = '-';
        console.log("Debug: Menu opened.");
    } else {
        menuContent.style.display = 'none';
        toggleIcon.textContent = '+';
        console.log("Debug: Menu closed.");
    }
}

// Add a listener to ensure debugging if the script fails
document.addEventListener("DOMContentLoaded", () => {
    const menuContent = document.getElementById('menuContent');
    const toggleIcon = document.querySelector('.menu-title .toggle-icon');
    
    // Debug: Check if critical elements are loaded
    if (!menuContent || !toggleIcon) {
        console.warn("Warning: The menu or its toggle icon failed to load. If you're using a browser like Arc Browser, try disabling Ad-Block.");
    } else {
        console.log("Debug: Menu and toggle icon loaded successfully.");
    }
});



/*
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
    */