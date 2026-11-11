
/* EL TRIBUNAL DE LA HISTORIA
   ARCHIVO INTERACTIVO
*/

const expedientes = {
  gaitan: {
    nombre: "Jorge Eliécer Gaitán",
    subtitulo: "Expediente histórico · Fiscalía Liberal",
    descripcion: "Su pensamiento político, sus discursos y su influencia en la historia colombiana.",
    temas: [
      {
        titulo: "Biografía y trayectoria",
        hojas: [
          "Jorge Eliécer Gaitán nació en Bogotá en 1903. Fue abogado, dirigente político y una de las figuras más influyentes del liberalismo colombiano durante la primera mitad del siglo XX.",
          "Se destacó por su oratoria, su cercanía con sectores populares y su crítica a las desigualdades sociales. Fue alcalde de Bogotá, ministro y candidato presidencial.",
          "Su asesinato, el 9 de abril de 1948, desencadenó el Bogotazo y profundizó una etapa de violencia política en Colombia."
        ]
      },
      {
        titulo: "Pensamiento político",
        hojas: [
          "Gaitán defendió la participación política de los sectores populares y denunció las desigualdades económicas y sociales.",
          "Su discurso distinguía entre el país político y el país nacional, una forma de cuestionar la distancia entre las élites dirigentes y la ciudadanía.",
          "Su pensamiento debe estudiarse mediante sus discursos, sus actuaciones públicas y el contexto político de su época."
        ]
      },
      {
        titulo: "Discursos y documentos",
        hojas: [
          "Entre sus intervenciones más conocidas se encuentra la Oración por la Paz, pronunciada en Bogotá en febrero de 1948.",
          "Sus discursos permiten analizar la movilización popular, el lenguaje político y los conflictos partidistas de mediados del siglo XX."
        ]
      },
      {
        titulo: "Libro sobre su vida",
        hojas: [
          "Este apartado está reservado para una obra bibliográfica sobre Jorge Eliécer Gaitán.",
          "Cuando se incorpore una edición digital autorizada, el visitante podrá abrir el PDF directamente desde esta carpeta."
        ]
      }
    ]
  },

  galan: {
    nombre: "Luis Carlos Galán",
    subtitulo: "Expediente histórico · Fiscalía Liberal",
    descripcion: "Su proyecto político, sus discursos y su enfrentamiento con la influencia del narcotráfico.",
    temas: [
      {
        titulo: "Biografía y trayectoria",
        hojas: [
          "Luis Carlos Galán Sarmiento nació en Bucaramanga en 1943. Fue periodista y dirigente político colombiano.",
          "Fundó el movimiento Nuevo Liberalismo, con el que promovió reformas políticas y cuestionó prácticas tradicionales del sistema político.",
          "Fue asesinado el 18 de agosto de 1989, durante un acto de campaña presidencial en Soacha."
        ]
      },
      {
        titulo: "Proyecto político",
        hojas: [
          "El Nuevo Liberalismo planteó la renovación de la actividad política y la necesidad de fortalecer las instituciones democráticas.",
          "Galán criticó la corrupción y la penetración de organizaciones criminales en la política.",
          "Su trayectoria permite estudiar los debates sobre representación, ética pública y reforma institucional."
        ]
      },
      {
        titulo: "Discursos",
        hojas: [
          "Los discursos de Galán reflejan su defensa de la renovación política y su oposición a la influencia del narcotráfico.",
          "Esta carpeta puede complementarse con un registro audiovisual auténtico de sus intervenciones."
        ]
      },
      {
        titulo: "Libro sobre su campaña",
        hojas: [
          "Espacio destinado a una publicación sobre las campañas presidenciales y el proyecto político de Luis Carlos Galán.",
          "El PDF se incorporará cuando se identifique una versión autorizada."
        ]
      }
    ]
  },

  samper: {
    nombre: "Ernesto Samper",
    subtitulo: "Expediente histórico · Fiscalía Liberal",
    descripcion: "Su presidencia, el proceso 8.000 y las controversias de su administración.",
    temas: [
      {
        titulo: "Biografía y trayectoria",
        hojas: [
          "Ernesto Samper Pizano nació en Bogotá en 1950. Es un político colombiano vinculado al Partido Liberal.",
          "Desarrolló una trayectoria en cargos públicos y fue elegido presidente de Colombia para el período 1994-1998."
        ]
      },
      {
        titulo: "Gobierno 1994-1998",
        hojas: [
          "Durante su presidencia se impulsaron políticas sociales asociadas al programa El Salto Social.",
          "Su gobierno enfrentó tensiones políticas e institucionales relacionadas con las investigaciones sobre la financiación de la campaña presidencial."
        ]
      },
      {
        titulo: "Proceso 8.000",
        hojas: [
          "El proceso 8.000 investigó la entrada de dinero del narcotráfico en la campaña presidencial de 1994.",
          "El caso produjo investigaciones y decisiones judiciales contra distintos participantes. La Cámara de Representantes decidió no acusar al presidente Samper ante el Senado.",
          "Para analizar este episodio es importante distinguir entre denuncias, investigaciones, pruebas y decisiones de las autoridades."
        ]
      },
      {
        titulo: "Libro sobre su gobierno",
        hojas: [
          "Esta carpeta reunirá una publicación sobre la presidencia de Ernesto Samper y el contexto político del proceso 8.000.",
          "Se añadirá un PDF de acceso autorizado y su referencia bibliográfica."
        ]
      }
    ]
  },

  misael: {
    nombre: "Misael Pastrana",
    subtitulo: "Expediente histórico · Defensa Conservadora",
    descripcion: "Su trayectoria, su presidencia y las decisiones políticas de su gobierno.",
    temas: [
      {
        titulo: "Biografía y trayectoria",
        hojas: [
          "Misael Pastrana Borrero nació en Neiva en 1923. Fue dirigente del Partido Conservador y presidente de Colombia entre 1970 y 1974.",
          "Su carrera política se desarrolló durante el período del Frente Nacional."
        ]
      },
      {
        titulo: "Gobierno 1970-1974",
        hojas: [
          "Su presidencia correspondió a la etapa final del Frente Nacional, acuerdo de alternancia política entre liberales y conservadores.",
          "Durante su gobierno se impulsaron iniciativas económicas, sociales y de desarrollo urbano."
        ]
      },
      {
        titulo: "Decisiones políticas",
        hojas: [
          "La elección presidencial de 1970 estuvo marcada por controversias sobre los resultados frente a Gustavo Rojas Pinilla.",
          "El estudio de su gobierno permite examinar las limitaciones de la participación política y las transformaciones institucionales del período."
        ]
      },
      {
        titulo: "Libro sobre su presidencia",
        hojas: [
          "Espacio para una obra histórica sobre la presidencia de Misael Pastrana.",
          "Se incorporará un PDF verificable y autorizado."
        ]
      }
    ]
  },

  andres: {
    nombre: "Andrés Pastrana",
    subtitulo: "Expediente histórico · Defensa Conservadora",
    descripcion: "Su gobierno, las negociaciones del Caguán y el conflicto armado colombiano.",
    temas: [
      {
        titulo: "Biografía y trayectoria",
        hojas: [
          "Andrés Pastrana Arango nació en Bogotá en 1954. Fue alcalde de Bogotá y presidente de Colombia entre 1998 y 2002.",
          "Su presidencia estuvo especialmente marcada por las negociaciones de paz con las FARC-EP."
        ]
      },
      {
        titulo: "Gobierno 1998-2002",
        hojas: [
          "Durante su gobierno se desarrolló el Plan Colombia, en un contexto de conflicto armado y cooperación internacional.",
          "La administración enfrentó desafíos económicos, sociales y de seguridad."
        ]
      },
      {
        titulo: "Proceso de paz del Caguán",
        hojas: [
          "El gobierno estableció una zona desmilitarizada para adelantar conversaciones con las FARC-EP.",
          "Las negociaciones no lograron un acuerdo definitivo y finalizaron en febrero de 2002.",
          "El proceso continúa siendo objeto de análisis sobre negociación, seguridad y responsabilidades de las partes."
        ]
      },
      {
        titulo: "Libro sobre su presidencia",
        hojas: [
          "Esta sección incluirá una obra sobre la presidencia de Andrés Pastrana y el proceso de paz del Caguán.",
          "El PDF se añadirá con su fuente y permisos de consulta."
        ]
      }
    ]
  },

  belisario: {
    nombre: "Belisario Betancur",
    subtitulo: "Expediente histórico · Defensa Conservadora",
    descripcion: "Su presidencia, sus iniciativas de paz y los acontecimientos de su gobierno.",
    temas: [
      {
        titulo: "Biografía y trayectoria",
        hojas: [
          "Belisario Betancur Cuartas nació en Amagá, Antioquia, en 1923. Fue abogado, escritor y dirigente del Partido Conservador.",
          "Ejerció la presidencia de Colombia entre 1982 y 1986."
        ]
      },
      {
        titulo: "Gobierno 1982-1986",
        hojas: [
          "Su gobierno impulsó iniciativas de paz y afrontó importantes desafíos políticos, económicos y sociales.",
          "Durante su presidencia ocurrieron la toma y retoma del Palacio de Justicia en 1985 y la tragedia de Armero, acontecimientos de enorme impacto nacional."
        ]
      },
      {
        titulo: "Procesos de paz",
        hojas: [
          "Betancur promovió acercamientos y acuerdos de cese al fuego con organizaciones insurgentes.",
          "Los acuerdos de La Uribe de 1984 constituyen un episodio importante en la historia de las negociaciones con las FARC.",
          "Estas iniciativas deben analizarse junto con las dificultades de implementación y la persistencia de la violencia."
        ]
      },
      {
        titulo: "Libro sobre su presidencia",
        hojas: [
          "Espacio para una obra sobre el gobierno de Belisario Betancur y sus procesos de paz.",
          "Se incorporará un PDF autorizado y una referencia bibliográfica."
        ]
      }
    ]
  }
};

/*
  FUENTES EXTERNAS

  Agrega aquí únicamente enlaces comprobados.
  No se mostrarán botones de PDF sin URL.
*/
const fuentes = {
  biblioteca: {
    historia: "",
    documento: "",
    discursoLiberal: "",
    discursoConservador: ""
  },

  gaitan: {},
  galan: {},
  samper: {},
  misael: {},
  andres: {},
  belisario: {}
};

const contenedor =
  document.getElementById("detalleExpediente");

const parametros =
  new URLSearchParams(window.location.search);

const id = parametros.get("personaje");

function crearElemento(etiqueta, clase, texto) {
  const elemento = document.createElement(etiqueta);

  if (clase) elemento.className = clase;
  if (texto) elemento.textContent = texto;

  return elemento;
}

function reproducirEfecto(tipo) {
  document.dispatchEvent(
    new CustomEvent("efectoTribunal", {
      detail: { tipo }
    })
  );
}

function crearPortada(nombre, subtitulo, descripcion, icono) {
  const portada = crearElemento("section", "portada-archivo");

  portada.append(
    crearElemento("div", "sello", icono),
    crearElemento("h1", "", nombre),
    crearElemento("h2", "", subtitulo),
    crearElemento("p", "", descripcion)
  );

  return portada;
}

function crearEnlace(texto, url) {
  if (!url) {
    return crearElemento(
      "p",
      "nota-fuente",
      "Fuente digital pendiente de incorporar."
    );
  }

  const enlace = crearElemento(
    "a",
    "enlace-documento",
    texto
  );

  enlace.href = url;
  enlace.target = "_blank";
  enlace.rel = "noopener noreferrer";

  enlace.addEventListener("click", () => {
    const musica = document.getElementById("musicaTribunal");
    const boton = document.getElementById("botonMusica");

    if (musica && !musica.paused) {
      musica.pause();
      if (boton) {
        boton.textContent = "🔊 Activar música";
        boton.setAttribute("aria-pressed", "false");
      }
    }
  });

  return enlace;
}

function abrirHojas(titulo, hojas, enlacePDF = "") {
  reproducirEfecto("expediente");

  const visorAnterior =
    document.querySelector(".visor-documento");

  if (visorAnterior) visorAnterior.remove();

  const visor = crearElemento("section", "visor-documento");
  const papel = crearElemento("article", "hoja-expediente");
  const controles = crearElemento("div", "controles-paginas");

  const anterior = crearElemento(
    "button",
    "boton-archivo",
    "← Anterior"
  );

  const siguiente = crearElemento(
    "button",
    "boton-archivo",
    "Siguiente →"
  );

  const contador = crearElemento(
    "span",
    "contador-paginas"
  );

  const imprimir = crearElemento(
    "button",
    "boton-archivo",
    "🖨 Imprimir / Guardar PDF"
  );

  anterior.type = "button";
  siguiente.type = "button";
  imprimir.type = "button";

  let pagina = 0;

  function mostrarHoja() {
    papel.replaceChildren();

    papel.append(
      crearElemento("h2", "", titulo),
      crearElemento("p", "", hojas[pagina])
    );

    const numero = crearElemento(
      "p",
      "nota-fuente",
      `Folio ${pagina + 1} de ${hojas.length}`
    );

    papel.appendChild(numero);

    if (enlacePDF && pagina === hojas.length - 1) {
      papel.appendChild(
        crearEnlace("📄 Consultar PDF original", enlacePDF)
      );
    }

    contador.textContent =
      `Página ${pagina + 1} de ${hojas.length}`;

    anterior.disabled = pagina === 0;
    siguiente.disabled = pagina === hojas.length - 1;
  }

  anterior.addEventListener("click", () => {
    if (pagina > 0) {
      pagina--;
      mostrarHoja();
      reproducirEfecto("pagina");
    }
  });

  siguiente.addEventListener("click", () => {
    if (pagina < hojas.length - 1) {
      pagina++;
      mostrarHoja();
      reproducirEfecto("pagina");
    }
  });

  imprimir.addEventListener("click", () => {
    const ventana = window.open("", "_blank");

    if (!ventana) {
      alert("Permite las ventanas emergentes para guardar el documento.");
      return;
    }

    const documento = ventana.document;

    documento.title = titulo;

    const estilo = documento.createElement("style");
    estilo.textContent = `
      body {
        font-family: Georgia, serif;
        color: #282018;
        padding: 35px;
        line-height: 1.7;
      }
      article {
        break-after: page;
        margin-bottom: 35px;
      }
      h1 { color: #633d23; }
    `;

    documento.head.appendChild(estilo);

    const encabezado = documento.createElement("h1");
    encabezado.textContent = titulo;
    documento.body.appendChild(encabezado);

    hojas.forEach((contenido, indice) => {
      const articulo = documento.createElement("article");
      const subtitulo = documento.createElement("h2");
      const parrafo = documento.createElement("p");

      subtitulo.textContent = `Folio ${indice + 1}`;
      parrafo.textContent = contenido;

      articulo.append(subtitulo, parrafo);
      documento.body.appendChild(articulo);
    });

    ventana.focus();
    ventana.print();
  });

  controles.append(anterior, contador, siguiente, imprimir);
  visor.append(papel, controles);
  contenedor.appendChild(visor);

  mostrarHoja();

  visor.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function crearCarpeta(titulo, indice, accion, tipo = "carpeta") {
  const boton = crearElemento("button", tipo);
  boton.type = "button";

  const simbolo = crearElemento(
    "span",
    "simbolo",
    tipo.includes("libro") ? "📖" : "📁"
  );

  const nombre = crearElemento("strong", "", titulo);
  const indicacion = crearElemento(
    "small",
    "",
    "Haz clic para abrir"
  );

  boton.append(simbolo, nombre, indicacion);
  boton.addEventListener("click", accion);

  return boton;
}

function mostrarPolitico(personaje, clave) {
  contenedor.replaceChildren();

  contenedor.appendChild(
    crearPortada(
      personaje.nombre,
      personaje.subtitulo,
      personaje.descripcion,
      "📜"
       )
    );
     
  // FOTOGRAFÍA DEL PERSONAJE
  const fotografia = document.createElement("img");

  fotografia.src = `imagenes/${clave}.jpg`;
  fotografia.alt = `Fotografía histórica de ${personaje.nombre}`;
  fotografia.className = "foto-expediente";

  fotografia.onerror = function () {
    this.style.display = "none";
  };

  contenedor.appendChild(fotografia);
   

  contenedor.appendChild(
    crearElemento(
      "h2",
      "rotulo-seccion",
      "EXPEDIENTES DISPONIBLES"
    )
  );

  const estanteria = crearElemento("section", "estanteria");

  personaje.temas.forEach((tema, indice) => {
    const esLibro =
      tema.titulo.toLowerCase().includes("libro");

    const enlace =
      fuentes[clave]?.[indice] || "";

    const carpeta = crearCarpeta(
      tema.titulo,
      indice,
      () => abrirHojas(
        tema.titulo,
        tema.hojas,
        enlace
      ),
      esLibro ? "carpeta libro" : "carpeta"
    );

    estanteria.appendChild(carpeta);
  });

  contenedor.appendChild(estanteria);
}

function mostrarBiblioteca() {
  contenedor.replaceChildren();

  contenedor.appendChild(
    crearPortada(
      "Biblioteca histórica",
      "Centro de documentación del tribunal",
      "Consulta libros, documentos históricos y discursos de la historia política colombiana.",
      "⚖️"
    )
  );

  contenedor.appendChild(
    crearElemento(
      "h2",
      "rotulo-seccion",
      "ESTANTERÍA HISTÓRICA"
    )
  );

  const estanteria = crearElemento("section", "estanteria");

  const recursos = [
    {
      titulo: "Historia política de Colombia",
      tipo: "libro",
      hojas: [
        "La historia política de Colombia comprende los procesos de formación del Estado, los partidos políticos, las reformas institucionales y los conflictos sociales.",
        "Durante los siglos XIX y XX, los partidos Liberal y Conservador desempeñaron un papel central en la organización del poder político.",
        "La consulta de libros académicos permite comprender estos procesos desde distintas interpretaciones históricas."
      ],
      url: fuentes.biblioteca.historia
    },
    {
      titulo: "Documentos históricos",
      tipo: "carpeta",
      hojas: [
        "Los documentos históricos son fuentes primarias que permiten estudiar acontecimientos y decisiones de su época.",
        "Entre ellos se encuentran leyes, discursos, correspondencia, actas, decretos y registros oficiales.",
        "Para interpretar un documento deben identificarse su autor, fecha, contexto y propósito."
      ],
      url: fuentes.biblioteca.documento
    },
    {
      titulo: "Discurso liberal",
      tipo: "carpeta",
      hojas: [
        "Espacio dedicado a un discurso auténtico de Jorge Eliécer Gaitán o Luis Carlos Galán.",
        "El registro audiovisual se incorporará mediante un enlace verificado de YouTube."
      ],
      url: fuentes.biblioteca.discursoLiberal
    },
    {
      titulo: "Discurso conservador",
      tipo: "carpeta",
      hojas: [
        "Espacio dedicado a un discurso auténtico de Misael Pastrana, Andrés Pastrana o Belisario Betancur.",
        "El registro audiovisual se incorporará mediante un enlace verificado de YouTube."
      ],
      url: fuentes.biblioteca.discursoConservador
    }
  ];

  recursos.forEach((recurso, indice) => {
    estanteria.appendChild(
      crearCarpeta(
        recurso.titulo,
        indice,
        () => abrirHojas(
          recurso.titulo,
          recurso.hojas,
          recurso.url
        ),
        recurso.tipo === "libro"
          ? "carpeta libro"
          : "carpeta"
      )
    );
  });

  contenedor.appendChild(estanteria);
}

function mostrarIndice() {
  const visorAnterior =
    document.querySelector(".visor-documento");

  if (visorAnterior) visorAnterior.remove();

  const visor = crearElemento("section", "visor-documento");

  visor.appendChild(
    crearElemento(
      "h2",
      "rotulo-seccion",
      "ÍNDICE DE PERSONAJES"
    )
  );

  const indice = crearElemento("div", "indice-personajes");

  Object.entries(expedientes).forEach(([clave, personaje]) => {
    const ficha = crearElemento("article", "ficha-personaje");

    const foto = document.createElement("img");
    foto.src = `imagenes/${clave}.jpg`;
    foto.alt = `Fotografía de ${personaje.nombre}`;
    foto.loading = "lazy";

    foto.onerror = () => {
      foto.replaceWith(
        crearElemento("div", "sello", "👤")
      );
    };

    const nombre = crearElemento(
      "h3",
      "",
      personaje.nombre
    );

    const enlace = crearElemento(
      "a",
      "",
      "Abrir expediente →"
    );

    enlace.href = `expediente.html?personaje=${clave}`;

    ficha.append(foto, nombre, enlace);
    indice.appendChild(ficha);
  });

  visor.appendChild(indice);
  contenedor.appendChild(visor);
  reproducirEfecto("expediente");

  visor.scrollIntoView({ behavior: "smooth" });
}

function mostrarSecretaria() {
  contenedor.replaceChildren();

  contenedor.appendChild(
    crearPortada(
      "Secretaría del tribunal",
      "Organización de los expedientes",
      "Registro, clasificación y consulta de los archivos históricos del tribunal.",
      "📜"
    )
  );

  contenedor.appendChild(
    crearElemento(
      "h2",
      "rotulo-seccion",
      "ARCHIVADORES DEL TRIBUNAL"
    )
  );

  const estanteria = crearElemento("section", "estanteria");

  const opciones = [
    {
      titulo: "Registro de expedientes",
      hojas: [
        "El Tribunal de la Historia cuenta con seis expedientes políticos y dos espacios institucionales de consulta.",
        "Fiscalía Liberal: Jorge Eliécer Gaitán, Luis Carlos Galán y Ernesto Samper.",
        "Defensa Conservadora: Misael Pastrana, Andrés Pastrana y Belisario Betancur."
      ]
    },
    {
      titulo: "Índice de personajes",
      accion: mostrarIndice
    },
    {
      titulo: "Clasificación documental",
      hojas: [
        "Documentos biográficos: información sobre la vida y trayectoria de los personajes.",
        "Documentos políticos: discursos, programas de gobierno y decisiones institucionales.",
        "Fuentes bibliográficas: libros, investigaciones y estudios históricos.",
        "Material audiovisual: grabaciones y discursos conservados en archivos públicos."
      ]
    },
    {
      titulo: "Guía de consulta",
      hojas: [
        "Paso 1. Regresa al juzgado y selecciona al personaje que deseas investigar.",
        "Paso 2. Abre una de las carpetas de su expediente. Cada carpeta contiene hojas que puedes consultar.",
        "Paso 3. Utiliza los botones Anterior y Siguiente para avanzar entre los folios.",
        "Paso 4. Consulta las fuentes externas disponibles. Puedes imprimir o guardar los folios de lectura como PDF.",
        "Paso 5. Regresa al juzgado para investigar otro personaje y comparar diferentes perspectivas históricas."
      ]
    }
  ];

  opciones.forEach((opcion, indice) => {
    estanteria.appendChild(
      crearCarpeta(
        opcion.titulo,
        indice,
        opcion.accion || (() => abrirHojas(
          opcion.titulo,
          opcion.hojas
        ))
      )
    );
  });

  contenedor.appendChild(estanteria);
}

/* INICIAR LA PÁGINA */

if (contenedor) {
  if (id === "biblioteca") {
    mostrarBiblioteca();
  } else if (id === "secretaria") {
    mostrarSecretaria();
  } else if (expedientes[id]) {
    mostrarPolitico(expedientes[id], id);
  } else {
    contenedor.replaceChildren(
      crearPortada(
        "Expediente no encontrado",
        "Archivo del tribunal",
        "El expediente solicitado no existe. Regresa al juzgado para seleccionar otro.",
        "⚠️"
      )
    );
  }
}
