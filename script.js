document.addEventListener("DOMContentLoaded", () => {
    
    /* 1. Header Glass Effect */
    const header = document.querySelector("header");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    /* 2. Intersection Observer for Scroll Reveal */
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach(el => observer.observe(el));

    /* 3. Dev Signature */
    console.log(
        "%c obsidia.cz %c\n Crafted meticulously. Status: Online. ",
        "background: #fff; color: #000; padding: 4px 8px; font-weight: bold; border-radius: 2px;",
        "color: #888;"
    );
});