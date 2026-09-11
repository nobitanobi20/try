// =========================================
// LOADER
// =========================================

window.addEventListener("load", () => {

    gsap.to("#loader", {
        opacity: 0,
        duration: 1,
        delay: 0.8,
        onComplete: () => {
            document.getElementById("loader").style.display = "none";
        }
    });

});

// =========================================
// NAVBAR SCROLL EFFECT
// =========================================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        nav.style.background = "rgba(5,10,18,.82)";
        nav.style.backdropFilter = "blur(30px)";
        nav.style.boxShadow = "0 10px 40px rgba(0,0,0,.35)";

    } else {

        nav.style.background = "rgba(5,10,18,.35)";
        nav.style.boxShadow = "none";

    }

});

// =========================================
// HERO ANIMATION
// =========================================

gsap.from(".hero-left", {

    x: -120,
    opacity: 0,
    duration: 1.3,
    ease: "power4.out"

});

gsap.from("#hero3d", {

    scale: .6,
    opacity: 0,
    duration: 1.5,
    delay: .3,
    ease: "back.out(1.7)"

});

// =========================================
// SECTION ANIMATIONS
// =========================================

gsap.utils.toArray("section").forEach((section) => {

    gsap.from(section.children, {

        opacity: 0,
        y: 70,
        duration: 1,
        stagger: .15,

        scrollTrigger: {

            trigger: section,
            start: "top 75%"

        }

    });

});

// =========================================
// SKILL CARDS
// =========================================

document.querySelectorAll(".skill-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        gsap.to(card, {

            rotateY: 12,
            rotateX: -8,
            duration: .35

        });

    });

    card.addEventListener("mouseleave", () => {

        gsap.to(card, {

            rotateY: 0,
            rotateX: 0,
            duration: .35

        });

    });

});

// =========================================
// PROJECT CARD TILT
// =========================================

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = (x - rect.width / 2) / 18;
        const rotateX = -(y - rect.height / 2) / 18;

        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(900px) rotateX(0) rotateY(0)";

    });

});

// =========================================
// BUTTON MAGNETIC EFFECT
// =========================================

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mousemove", e => {

        const rect = btn.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(btn, {

            x: x * .18,
            y: y * .18,
            duration: .3

        });

    });

    btn.addEventListener("mouseleave", () => {

        gsap.to(btn, {

            x: 0,
            y: 0,
            duration: .4

        });

    });

});

// =========================================
// ACTIVE NAV LINKS
// =========================================

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(sec => {

        const top = sec.offsetTop - 150;

        if (window.scrollY >= top) {

            current = sec.getAttribute("id");

        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// =========================================
// MOBILE MENU
// =========================================

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("show");

});

// =========================================
// SMOOTH SCROLL
// =========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});