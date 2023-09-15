// Función para agregar una nueva tarea
const agregarTarea = () => {
    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const listaTareas = document.getElementById("listaTareas");
    const nuevaTareaTexto = nuevaTareaInput.value.trim();

    if (nuevaTareaTexto !== "") {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = nuevaTareaTexto;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.className = "delete";

        botonEliminar.onclick = () => {
            listaTareas.removeChild(nuevaTarea);
        };

        nuevaTarea.appendChild(botonEliminar);
        listaTareas.appendChild(nuevaTarea);
        nuevaTareaInput.value = "";
    }
};

// Función para marcar una tarea como completada
const marcarCompleta = tarea => {
    tarea.classList.toggle("completed");
};

// Agregar evento de clic a las tareas para marcarlas como completadas
document.getElementById("listaTareas").addEventListener("click",
event => {
    if (event.target.tagName === "LI") {
        marcarCompleta(event.target);
    }
});

const mostrarCompletas = () => {
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
    if (tarea.classList.contains("completed")) {
    tarea.style.display = "flex";
    } else {
    tarea.style.display = "none";
    }
    });
    };



const mostrarPendientes = () => {
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
        if (!tarea.classList.contains("completed")) {
            tarea.style.display = "flex";
        } else {
            tarea.style.display = "none";
        }
    });
};


const mostrarTodas = () => {
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
        tarea.style.display = "flex";
    });
};
