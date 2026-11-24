const proyectos = [
  {
    nombre: "Plantilla del Atlético de Madrid",
    descripcion:
      "Aplicación full-stack: API REST propia con Spring Boot y Spring Data JPA, base de datos MySQL en la nube y frontend en Angular con búsqueda, filtros y ordenación. Los datos son de ejemplo.",
    tecnologias: ["Angular", "Spring Boot", "MySQL"],
    imagen: "plantilla.png",
    url: "https://atleti-plantilla.vercel.app/",
    github: "https://github.com/gloriaarandia/atleti-plantilla.git"
  },
  {
    nombre: "Moodboard",
    descripcion:
      "Plataforma de descubrimiento cultural basada en atmósferas con backend en Spring Boot y frontend en Angular. Integré búsqueda de películas y libros (TMDB y Google Books), extracción de paletas de color con ColorThief, pre-escucha de canciones con Deezer, filtros por estado de ánimo, ruleta aleatoria y favoritos.",
    tecnologias: ["Angular", "Spring Boot", "MySQL"],
    imagen: "moodboard.png",
    url: "https://moodboard-eight-roan.vercel.app/",
    github: "https://github.com/gloriaarandia/Moodboard.git"
  },
  {
    nombre: "Calculadora",
    descripcion:
      "Calculadora web interactiva con operaciones básicas, desarrollada con HTML, CSS y JavaScript para practicar lógica de interfaz y manipulación del DOM.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    imagen: "Calculadora.png",
    url: "https://calculadora-beta-one.vercel.app/",
    github: "https://github.com/gloriaarandia/Calculadora.git"
  },
  {
    nombre: "Mi portfolio",
    descripcion:
      "Sitio web personal donde reúno mis proyectos, tecnologías y enlaces de contacto, desarrollado con React.",
    tecnologias: ["React"],
    imagen: "Portfolio.png",
    url: "https://portfolio-ten-fawn-70.vercel.app/",
    github: "https://github.com/gloriaarandia/Portfolio.git"
  }
];

function Projects() {
  return (
    <section id="proyectos">
      <h2>Mis proyectos</h2>

      <div className="projects-container">
        {proyectos.map(proyecto => (
          <div className="project-card" key={proyecto.nombre}>
            <img src={proyecto.imagen} alt={proyecto.nombre} />

            <h3>{proyecto.nombre}</h3>
            <p>{proyecto.descripcion}</p>

            {proyecto.tecnologias && (
              <div className="project-tags">
                {proyecto.tecnologias.map((tech) => (
                  <span key={tech} className="project-badge">
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <div className="project-buttons">
              <a href={proyecto.url} target="_blank" rel="noopener noreferrer">
                Ver proyecto
              </a>
              <a href={proyecto.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;