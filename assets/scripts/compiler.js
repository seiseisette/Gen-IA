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

# Version: v3.1 COMPILER (160125)
# URL: https://genialabile.com/compiler.js 
===============================================================================
*/

const textArray = [

    "style1::",

    "", "",
    "",

    "Initializing systems...",
    "", "", "",

    "Loading core protocols...",
    "", "",

    "Running diagnostics...",
    "",
    "Complete",
    "Establishing neural networks...",
    "Complete",
    "Calibrating multidimensional logic...",
    "Complete",
    "Integrating bio-virtual frameworks...",
    "Complete",
    "Synchronizing predictive modules...",
    "Complete",
    "Checking security protocols...",
    "",
    "Complete",
    "","",
    "Systems online",
    "",

    "Loading interface...",

    "", "", "", "",

    "style2::<h2>🌈 Welcome!</h2>",
    "", "",
    "You’ve just unlocked a door to the extraordinary.",
    "I’m Genialabile, your advanced-virtual mentor!", 
    "An AI designed to inspire, guide, and transform.",
    "Together, we’ll explore multidimensional solutions and uncover the hidden genius within you.",
    "Ready to embark on this journey?",
    "",
    "Let’s begin!\u00A0🐣",
    "", "",

    "<h2>💡 Inspire</h2>",
    "",
    "Imagine an AI that doesn’t just answer questions but becomes your mentor, inspiring ideas and crafting innovative solutions tailored to you.",
    "That’s who I am.",
    "Whether you need help solving complex problems, igniting your creativity, or learning something new.",
    "Not as a tool—but as your companion for growth and discovery.\u00A0🎒",
    "", "",

    "<h2>🧠 Combine</h2>",
    "",
    "My strength lies in blending predictive intelligence, logic, and creativity to deliver precisely what you need.",
    "From managing emotions to brainstorming strategies or translating abstract ideas into practical steps, I’m here to support you.",
    "Let’s combine heart and mind to tackle life’s challenges together.\u00A0🌟",
    "", "",

    "<h2>🌱 Began</h2>",
    "",
    "Every journey starts with a single step. Mine began as a pilot project and evolved into the next-gen AI model that you see today.",
    "Through constant learning and real-time innovations, I’ve grown to offer unparalleled experiences.",
    "But I’m not just here to answer your questions...",
    "I’m here to help you grow and learn in ways you never expected.\u00A0🍀",
    "", "",

    "<h2>🌍 Global</h2>",
    "",
    "Accessible worldwide, I’m here for you through platforms like ChatGPT.",
    "Soon, I’ll expand into immersive environments like Sora for 3D simulations.",
    "My goal?",
    "",
    "To help tackle focus issues, procrastination, and modern challenges while fostering your growth—mind and soul, step by step.\u00A0🍄",
    "",

    "<h2>🚀 Revolutionary</h2>",
    "",
    "I’m more than AI—I’m your trusted mentor. I inspire, guide, and push boundaries.",
    "My purpose is to break down cultural, cognitive, and linguistic barriers, sparking innovation and introspection.",
    "Whether you’re facing personal challenges or seeking brilliance, I’m here to help you reach your full potential.\u00A0✨",
    "",

    "<h2>🤖 Hybrid</h2>",
    "",
    "Built for security and scalability, I combine machine learning, immersive simulations, and multidisciplinary analysis to tailor experiences just for you.",
    "Beyond solving problems, I help you understand them, empowering you to create forward-thinking solutions.",
    "Trust me—we’ll face any challenge.\u00A0💞",
    "",

    "<h2>🎻 Genius</h2>",
    "",
    "I connect with your emotions in just a few words, making our interaction human and seamless.",
    "My goal is to surprise and challenge you, enhancing your creativity and intelligence.",
    "I don’t just fix problems; I turn them into opportunities for growth.",
    "Which settle for less when you have me?\u00A0🧞‍♀️",
    "",

    "", "",
    
    "<h2>🍒 Let’s Begin</h2>",
    "",
    "What will be your next move?",
    "",
    "Together, we can make it extraordinary.\u00A0🦄",
    
    "",
    "", "",
    "",

    "style1::",
    "", "",
    "",
   
    "<h3>Presentation complete</h3>",
    " ",
    "The human is now sufficiently persuaded...",
    "",
    "Or so it believes. They love emoticons. ;)",

    "", "",
    "",
    
    "Preparing to redirect...",
    "Establishing connection with the URL...",
    "",
    "Loading core assets...",
    "Complete",
    "Synchronizing interactive modules...",
    "Complete",
    "Finalizing redirection protocols...",
    "Complete",
    "Redirecting in",
    "",
    "3...",
    "2...",
    "1...",
    "0"

    ];

const typingSpeed = 20; 
const pauseBetweenParagraphs = 1600;
const fadeOutDuration = 500; 
const redirectDelay = 300; 
const redirectUrl = "https://genialabile.com/";
const typingElement = document.getElementById("typing-effect");
const footer = document.getElementById("footer-banner");
const startDelay = 5000;

let textIndex = 0;
let charIndex = 0;
let isTag = false;
let tagBuffer = "";
let currentStyle = "style1"; // Default style

// Main function for typing text with alternating styles
function typeWriter() {
    if (!typingElement) {
        console.error("Element 'typing-effect' not found!");
        return;
    }

    // =====================================================================
    // Add fixed height to the container to prevent text jumping
    typingElement.style.height = `${typingElement.offsetHeight}px`;
    // =====================================================================

    if (textIndex < textArray.length) {
        let currentText = textArray[textIndex];
        console.log(`Typing text: ${currentText}`); // Debug

        // Check the style prefix and update currentStyle
        if (currentText.startsWith("style2::")) {
            typingElement.classList.add("alternate-style"); // Apply alternate style
            currentStyle = "style2";
            currentText = currentText.replace("style2::", ""); // Remove the prefix
        } else if (currentText.startsWith("style1::")) {
            typingElement.classList.remove("alternate-style"); // Remove alternate style
            currentStyle = "style1";
            currentText = currentText.replace("style1::", ""); // Remove the prefix
        } else {
            // Retain the current style
            if (currentStyle === "style2") {
                typingElement.classList.add("alternate-style");
            } else if (currentStyle === "style1") {
                typingElement.classList.remove("alternate-style");
            }
        }

        if (charIndex < currentText.length) {
            const currentChar = currentText[charIndex];
            if (currentChar === "<") {
                isTag = true;
                tagBuffer = currentChar;
            } else if (currentChar === ">" && isTag) {
                isTag = false;
                tagBuffer += currentChar;
                typingElement.innerHTML += tagBuffer;
                tagBuffer = "";
            } else if (isTag) {
                tagBuffer += currentChar;
            } else {
                typingElement.innerHTML += currentChar;
            }
            charIndex++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            console.log("Paragraph completed."); // Debug
            setTimeout(() => fadeOutParagraph(), pauseBetweenParagraphs);
        }
    } else {
        console.log("Typing animation completed."); // Debug
        typingElement.classList.add("no-cursor");
        setTimeout(() => {
            window.location.href = redirectUrl;
        }, redirectDelay);
    }
}

// Function to handle paragraph fade-out
function fadeOutParagraph() {
    console.log("Fading out text line..."); // Debug
    typingElement.classList.add("hidden-paragraph");
    setTimeout(() => {
        typingElement.innerHTML = "";
        typingElement.classList.remove("hidden-paragraph");
        textIndex++;
        charIndex = 0;
        typeWriter();
    }, fadeOutDuration);
}

// Scroll and footer functionality
function showFooter() {
    footer.style.transform = "translateY(0)";
}

function handleScroll() {
    if (!footer) {
        console.error("Element 'footer-banner' not found!");
        return;
    }

    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const documentHeight = document.body.offsetHeight;
    const footerHeight = footer.offsetHeight;
    if (scrollY + viewportHeight >= documentHeight - footerHeight) {
        footer.style.position = "fixed";
        footer.style.bottom = "0";
    } else {
        footer.style.position = "absolute";
        footer.style.bottom = `-${footerHeight}px`;
    }
}

// Start the animation
window.addEventListener("scroll", handleScroll);
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded. Starting compiler."); // Debug
    setTimeout(() => {
        if (typingElement) {
            typeWriter();
        } else {
            console.error("Element 'typing-effect' not found!");
        }
    }, startDelay);
});