const noticias = [
    "Equipos preparándose para torneos internacionales.",
    "Ciclismo colombiano en crecimiento.",
    "Selección Colombia en preparación."
];

const botones = document.querySelectorAll(".btn-warning");
const modalTexto = document.getElementById("contenidoModal");

if (botones) {
    botones.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            modalTexto.innerText = noticias[index];
            let modal = new bootstrap.Modal(document.getElementById('modalNoticia'));
            modal.show();
        });
    });
}


const form = document.getElementById("formulario");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let nombre = document.getElementById("nombre").value;
        document.getElementById("respuesta").innerText =
            "Gracias " + nombre + ", te responderemos pronto 😊";
    });
}