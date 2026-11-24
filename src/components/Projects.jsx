const proyectos = [
  {
    nombre: "Plantilla del Atlético de Madrid",
    descripcion:
      "Aplicación web full-stack desarrollada con Angular, Spring Boot y base de datos en la nube para consultar la alineación titular sobre el campo, filtrar la plantilla y ver las estadísticas de cada jugador.",
    imagen: "plantilla.png",
    url: "https://atleti-plantilla.vercel.app/",
    github: "https://github.com/gloriaarandia/atleti-plantilla.git"
  },
  {
    nombre: "Moodboard",
    descripcion:
      "Plataforma de descubrimiento cultural basada en atmósferas con Angular y Spring Boot. Combina películas y libros (TMDB y Google Books), paletas de colores con ColorThief y bandas sonoras con pre-escucha (Deezer), además de filtros por estado de ánimo, ruleta aleatoria y gestión de favoritos.",
    imagen: "moodboard.png",
    url: "moodboard-eight-roan.vercel.app/",
    github: "https://github.com/gloriaarandia/Moodboard.git"
  },
  {
    nombre: "Calculadora",
    descripcion:
      "Calculadora utilizando HTML, CSS y Javascript.",
    imagen: "Calculadora.png",
    url: "https://calculadora-beta-one.vercel.app/",
    github: "https://github.com/gloriaarandia/Calculadora.git"
  },
  {
    nombre: "Mi portfolio",
    descripcion: "Este portfolio hecho con React.",
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