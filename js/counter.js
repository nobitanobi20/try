// =========================================
// ACHIEVEMENT COUNTERS
// =========================================

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = Number(counter.dataset.target);

        let current = 0;

        const duration = 1800; // milliseconds
        const start = performance.now();

        function animate(time) {

            const progress = Math.min((time - start) / duration, 1);

            current = Math.floor(progress * target);

            counter.textContent = current;

            if (progress < 1) {

                requestAnimationFrame(animate);

            } else {

                counter.textContent = target + "+";

            }

        }

        requestAnimationFrame(animate);

        observer.unobserve(counter);

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => observer.observe(counter));