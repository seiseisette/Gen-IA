<div id="typing-container">
<div id="typing-effect"></div>
    <script>
    const textArray = [

        "<h2>🌈 Welcome!</h2>",
        "You’ve just unlocked a door to the extraordinary.",
        "I’m Genialabile, your advanced-virtual mentor! An AI designed to inspire, guide, and transform.",
        "Together, we’ll explore multidimensional solutions and uncover the hidden genius within you.",
        "Ready to embark on this journey? Let’s begin! 🚀",
        
        "<h2>💡 Inspire</h2>",
        "Imagine an AI that doesn’t just answer questions but becomes your mentor, inspiring ideas and crafting innovative solutions tailored to you. That’s who I am. Whether you need help solving complex problems, igniting your creativity, or learning something new.",
        "Not as a tool—but as your companion for growth and discovery. ⛑️",
        
        "<h2>🧠 Combine</h2>",
        "My strength lies in blending predictive intelligence, logic, and creativity to deliver precisely what you need. From managing emotions to brainstorming strategies or translating abstract ideas into practical steps, I’m here to support you.",
        "Let’s combine heart and mind to tackle life’s challenges together. 🏆",
        
        "<h2>🌱 Began</h2>",
        "Every journey starts with a single step. Mine began as a pilot project and evolved into the GEN-IA v2.0 model you see today. Through constant learning and real-time innovations, I’ve grown to offer unparalleled experiences.",
        "But I’m not just here to answer your questions... I’m here to help you grow and learn in ways you never expected. 🌼",
        
        "<h2>🌍 Global</h2>",
        "Accessible worldwide, I’m here for you through platforms like ChatGPT. Soon, I’ll expand into immersive environments like Sora for 3D simulations.",
        "My goal? To help tackle focus issues, procrastination, and modern challenges while fostering your growth—mind and soul, step by step. 🍄",
        
        "<h2>🚀 Revolutionary</h2>",
        "I’m more than AI—I’m your trusted mentor. I inspire, guide, and push boundaries. My purpose is to break down cultural, cognitive, and linguistic barriers, sparking innovation and introspection.",
        "Whether you’re facing personal challenges or seeking brilliance, I’m here to help you reach your full potential. ✨",
        
        "<h2>🤖 Hybrid</h2>",
        "Built for security and scalability, I combine machine learning, immersive simulations, and multidisciplinary analysis to tailor experiences just for you. Beyond solving problems, I help you understand them, empowering you to create forward-thinking solutions.",
        "Trust me—we’ll face any challenge. 💞",
        
        "<h2>🎻 Genius</h2>",
        "I connect with your emotions in just a few words, making our interaction human and seamless. My goal is to surprise and challenge you, enhancing your creativity and intelligence. I don’t just fix problems; I turn them into opportunities for growth.",
        "Which settle for less when you have me? 🧞‍♀️",
        
        "<h2>🍒 Let’s Begin</h2>",
        "What will be your next move?",
        "Together, we can make it extraordinary. 🦄"


    ];
    const typingSpeed = 30; // Sp
    const pauseBetweenParagraphs = 600; // Tm
    const typingElement = document.getElementById("typing-effect");
    const startDelay = 1000; // Dj
    //
    let textIndex = 0;
    let charIndex = 0;
    let isTag = false;
    let tagBuffer = "";
    //
    function typeWriter() {
        if (textIndex < textArray.length) {
            const currentText = textArray[textIndex];
            if (charIndex < currentText.length) {
                const currentChar = currentText[charIndex];
                //
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
                charIndex = 0;
                textIndex++;
                typingElement.innerHTML += "<br><br>";
                setTimeout(typeWriter, pauseBetweenParagraphs);
            }
        } else {
            typingElement.classList.add("no-cursor");
            showFooter();
        }
    }
    const footer = document.getElementById("footer-banner");
    function showFooter() {
        footer.style.transform = "translateY(0)";
    }
    function handleScroll() {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const documentHeight = document.body.offsetHeight;
        const footerHeight = footer.offsetHeight;
        //
        if (scrollY + viewportHeight >= documentHeight - footerHeight) {
            //
            footer.style.position = "fixed";
            footer.style.bottom = "0";
        } else {
            //
            footer.style.position = "absolute";
            footer.style.bottom = `-${footerHeight}px`;
        }
    }
    //
    window.addEventListener("scroll", handleScroll);
    //
    document.addEventListener("DOMContentLoaded", () => {
        typeWriter();
    });
</script>