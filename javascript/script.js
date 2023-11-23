const toggle = document.getElementById("toggle");
const body = document.body;

toggle.addEventListener("click", function() {
    body.classList.toggle("modo-oscuro");
});

function cartel()  {alert("Datos: Pamela Ulmann\nFrontEnd Developer\nEmail: pameu23@gmail.com")}