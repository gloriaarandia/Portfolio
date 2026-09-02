const proyectos = [
  {
    nombre: "Web de una cafetería",
    descripcion: "Una página hecha con HTML y CSS.",
    imagen: "cafetería.png",
    url: "https://p-gina-cafeter-a-yg92.vercel.app/",
    github: "https://github.com/gloriaarandia/P-gina-cafeter-a.git"
  },
  {
    nombre: "Aplicación de gestión de biblioteca",
    descripcion:
      "Aplicación desarrollada en Java desde Eclipse, conectada a una base de datos para gestionar la información de una biblioteca.",
    imagen: "biblioteca.png",
    url: "https://github.com/gloriaarandia/Biblioteca-JPA.git",
    github: "https://github.com/gloriaarandia/Biblioteca-JPA.git"
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