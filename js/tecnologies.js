document.addEventListener("DOMContentLoaded", () => {

    const technologies = document.querySelector(".technologies");

    if (!technologies) return;

    const items = technologies.querySelectorAll(".technology-item");

    // Deslocamentos iniciais de cada ícone
    const positions = [
        [-180, -120, -25],
        [120, -180, 20],
        [-100, 180, -30],
        [200, 100, 25],
        [-220, 50, -20],
        [150, -130, 30],
        [-150, -200, -15],
        [220, 160, 25],
        [-180, 120, -25],
        [100, 200, 20],
        [-120, -150, -30],
        [200, -100, 15],
        [-200, 180, -20]
    ];

    items.forEach((item, index) => {

        const position = positions[index % positions.length];

        item.style.setProperty("--start-x", `${position[0]}px`);
        item.style.setProperty("--start-y", `${position[1]}px`);
        item.style.setProperty("--start-rotate", `${position[2]}deg`);

        item.querySelector("img").style.transitionDelay =
            `${index * 100}ms`;
    });

    // Habilita o estado inicial da animação
    technologies.classList.add("animation-enabled");

    // Detecta quando a seção aparece na tela
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                technologies.classList.add("is-visible");

                observer.disconnect();
            }

        });

    }, {
        threshold: 0.25
    });

    observer.observe(technologies);

});