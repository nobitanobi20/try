// =========================================
// CUSTOM CURSOR
// =========================================

const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

let mouseX = 0;
let mouseY = 0;

let posX = 0;
let posY = 0;

// Track mouse
window.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor2.style.left = mouseX + "px";
    cursor2.style.top = mouseY + "px";

});

// Smooth animation
function animateCursor() {

    posX += (mouseX - posX) * 0.18;
    posY += (mouseY - posY) * 0.18;

    cursor.style.left = posX + "px";
    cursor.style.top = posY + "px";

    requestAnimationFrame(animateCursor);

}

animateCursor();

// Hover effect
document.querySelectorAll("a, button, .btn, .skill-card, .project-card").forEach(el => {

    el.addEventListener("mouseenter", () => {

        cursor.style.transform = "translate(-50%, -50%) scale(2)";
        cursor.style.borderColor = "#00f5ff";
        cursor.style.boxShadow = "0 0 25px rgba(0,245,255,.8)";

    });

    el.addEventListener("mouseleave", () => {

        cursor.style.transform = "translate(-50%, -50%) scale(1)";
        cursor.style.borderColor = "#00f5ff";
        cursor.style.boxShadow = "none";

    });

});