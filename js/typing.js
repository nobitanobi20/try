// =========================================
// TYPING ANIMATION
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    const typingElement = document.querySelector(".typing");

    if (!typingElement) return;

    new Typed(".typing", {

        strings: [

            "Cybersecurity Engineer",
            "Penetration Tester",
            "Network Security Engineer",
            "Blue Team Analyst",
            "Ethical Hacker",
            "SOC Analyst",
            "Digital Forensics Enthusiast",
            "Offensive Security Researcher",
            "CTF Player",
            "Linux Power User",
            "Python Developer",
            "Open Source Learner"

        ],

        typeSpeed: 60,

        backSpeed: 35,

        backDelay: 1800,

        startDelay: 500,

        smartBackspace: true,

        loop: true,

        showCursor: true,

        cursorChar: "|"

    });

});