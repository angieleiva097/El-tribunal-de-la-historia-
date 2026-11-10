const expedientes = [
  {
    id: "gaitan",
    nombre: "Jorge Eliécer Gaitán",
    corriente: "Liberal",
    descripcion: "Consulta documentos sobre su trayectoria política, sus discursos y su influencia en la historia colombiana."
  },
  {
    id: "galan",
    nombre: "Luis Carlos Galán",
    corriente: "Liberal",
    descripcion: "Consulta información sobre su proyecto político, sus discursos y la lucha contra el narcotráfico."
  },
  {
    id: "samper",
    nombre: "Ernesto Samper",
    corriente: "Liberal",
    descripcion: "Investiga su gobierno, el proceso 8.000 y las controversias de su administración."
  },
  {
    id: "misael",
    nombre: "Misael Pastrana",
    corriente: "Conservadora",
    descripcion: "Explora su trayectoria política, su gobierno y el contexto histórico de su presidencia."
  },
  {
    id: "andres",
    nombre: "Andrés Pastrana",
    corriente: "Conservadora",
    descripcion: "Consulta información sobre su gobierno, el proceso de paz y el contexto del conflicto colombiano."
  },
  {
    id: "belisario",
    nombre: "Belisario Betancur",
    corriente: "Conservadora",
    descripcion: "Investiga sus políticas, los diálogos de paz y los acontecimientos de su gobierno."
  }
];

const botones = document.querySelectorAll(".personaje");
const contenido = document.getElementById("contenidoArchivos");
const mensaje = document.getElementById("mensaje");

function mostrarExpedientes(personaje) {
  contenido.innerHTML = "";

  let seleccionados;

  if (personaje === "todos") {
    seleccionados = expedientes;
    mensaje.textContent = "Biblioteca histórica: todos los expedientes.";
  } else {
    seleccionados = expedientes.filter(
      expediente => expediente.id === personaje
    );

    mensaje.textContent = "Expediente seleccionado:";
  }

  seleccionados.forEach(expediente => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "expediente";

    const titulo = document.createElement("h3");
    titulo.textContent = expediente.nombre;

    const corriente = document.createElement("p");
    corriente.textContent = "Corriente política: " + expediente.corriente;

    const descripcion = document.createElement("p");
    descripcion.textContent = expediente.descripcion;

    const boton = document.createElement("button");
    boton.textContent = "Consultar expediente";
    boton.addEventListener("click", () => {
      alert(
        "Expediente de " + expediente.nombre +
        "\n\n" + expediente.descripcion +
        "\n\nPróximamente encontrarás aquí sus libros y documentos históricos."
      );
    });

    tarjeta.append(titulo, corriente, descripcion, boton);
    contenido.appendChild(tarjeta);
  });
}

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const personaje = boton.dataset.role;
    mostrarExpedientes(personaje);
    document.getElementById("archivos").scrollIntoView({
      behavior: "smooth"
    });
  });
});
