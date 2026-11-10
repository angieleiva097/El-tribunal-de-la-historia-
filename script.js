const expedientes = {
  biblioteca: {
    nombre: "Biblioteca histórica",
    subtitulo: "Centro de documentación del tribunal",
    descripcion: "Este espacio reúne fuentes para investigar la historia política colombiana: libros, documentos, discursos, archivos y testimonios.",
    secciones: [
      "Historia política de Colombia",
      "Libros y referencias bibliográficas",
      "Documentos históricos",
      "Discursos y fuentes de consulta"
    ]
  },

  secretaria: {
    nombre: "Secretaría del tribunal",
    subtitulo: "Organización de los expedientes",
    descripcion: "Desde aquí se organiza el archivo histórico y se facilita la consulta de los documentos de cada personaje.",
    secciones: [
      "Registro de expedientes",
      "Índice de personajes",
      "Clasificación documental",
      "Guía de consulta"
    ]
  },

  gaitan: {
    nombre: "Jorge Eliécer Gaitán",
    subtitulo: "Expediente histórico",
    descripcion: "Investiga su trayectoria política, sus discursos, su pensamiento y su influencia en la historia colombiana.",
    secciones: [
      "Biografía y trayectoria",
      "Pensamiento político",
      "Discursos y documentos",
      "Libros y bibliografía",
      "Controversias históricas"
    ]
  },

  galan: {
    nombre: "Luis Carlos Galán",
    subtitulo: "Expediente histórico",
    descripcion: "Consulta su trayectoria, sus propuestas políticas, sus discursos y su lucha contra el narcotráfico.",
    secciones: [
      "Biografía y trayectoria",
      "Proyecto político",
      "Discursos y documentos",
      "Libros y bibliografía",
      "Controversias históricas"
    ]
  },

  samper: {
    nombre: "Ernesto Samper",
    subtitulo: "Expediente histórico",
    descripcion: "Examina su presidencia, el proceso 8.000 y las controversias políticas de su administración.",
    secciones: [
      "Biografía y trayectoria",
      "Gobierno 1994-1998",
      "Proceso 8.000",
      "Libros y documentos",
      "Controversias históricas"
    ]
  },

  misael: {
    nombre: "Misael Pastrana",
    subtitulo: "Expediente histórico",
    descripcion: "Investiga su trayectoria política, su presidencia y el contexto histórico de su gobierno.",
    secciones: [
      "Biografía y trayectoria",
      "Gobierno 1970-1974",
      "Decisiones políticas",
      "Libros y documentos",
      "Controversias históricas"
    ]
  },

  andres: {
    nombre: "Andrés Pastrana",
    subtitulo: "Expediente histórico",
    descripcion: "Consulta su gobierno, el proceso de paz del Caguán y el contexto del conflicto colombiano.",
    secciones: [
      "Biografía y trayectoria",
      "Gobierno 1998-2002",
      "Proceso de paz del Caguán",
      "Libros y documentos",
      "Controversias históricas"
    ]
  },

  belisario: {
    nombre: "Belisario Betancur",
    subtitulo: "Expediente histórico",
    descripcion: "Examina su presidencia, sus iniciativas de paz y los acontecimientos de su gobierno.",
    secciones: [
      "Biografía y trayectoria",
      "Gobierno 1982-1986",
      "Procesos de paz",
      "Libros y documentos",
      "Controversias históricas"
    ]
  }
};

const contenedor = document.getElementById("detalleExpediente");

if (contenedor) {
  const parametros = new URLSearchParams(window.location.search);
  const id = parametros.get("personaje");
  const expediente = expedientes[id];

  if (expediente) {
    const titulo = document.createElement("h1");
    titulo.textContent = expediente.nombre;

    const subtitulo = document.createElement("h2");
    subtitulo.textContent = expediente.subtitulo;

    const descripcion = document.createElement("p");
    descripcion.textContent = expediente.descripcion;

    const documentos = document.createElement("div");
    documentos.className = "seccion-documentos";

    const encabezado = document.createElement("h2");
    encabezado.textContent = "Contenido del expediente";

    documentos.appendChild(encabezado);

    expediente.secciones.forEach(seccion => {
      const elemento = document.createElement("p");
      elemento.textContent = "📜 " + seccion;
      documentos.appendChild(elemento);
    });

    contenedor.append(titulo, subtitulo, descripcion, documentos);
  } else {
    const error = document.createElement("h1");
    error.textContent = "Expediente no encontrado";
    contenedor.appendChild(error);
  }
}
