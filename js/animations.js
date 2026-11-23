
document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(`
        .section-heading,
        .technologies img,
        .information-card,
        .project-card,
        .footer-heading,
        .contact-card
    `);

    elements.forEach((element, index) => {
        element.classList.add("reveal");

        // Pequeno atraso entre elementos próximos
        element.style.setProperty(
            "--reveal-delay",
            `${(index % 3) * 120}ms`
        );
    });

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");

                // Executa a animação apenas uma vez
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.15
    });

    elements.forEach((element) => {
        observer.observe(element);
    });

});
