
document.addEventListener("DOMContentLoaded", () => {
    const element = document.getElementById("typing-text");

    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const originalContent = Array.from(element.childNodes);

    element.innerHTML = "";

    const characters = [];

    function prepareTyping(nodes, parent) {
        nodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE) {
                const text = node.textContent;

                for (const character of text) {
                    const span = document.createElement("span");
                    span.textContent = character;

                    span.style.visibility = "hidden";

                    parent.appendChild(span);
                    characters.push(span);
                }
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                const clone = node.cloneNode(false);
                parent.appendChild(clone);

                prepareTyping(Array.from(node.childNodes), clone);
            }
        });
    }

    prepareTyping(originalContent, element);

    let index = 0;

    function typeWriter() {
        if (index < characters.length) {
            characters[index].style.visibility = "visible";
            index++;

            setTimeout(typeWriter, 35);
        }
    }

    typeWriter();
});
