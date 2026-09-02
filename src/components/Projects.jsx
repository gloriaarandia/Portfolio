const proyectos = [
  {
    nombre: "Mi primera web",
    descripcion: "Una página hecha con HTML y CSS.",
    imagen: "cafetería.png",
    url: "#",
    github: "#"
  },
  {
    nombre: "Aplicación de gestión de biblioteca",
    descripcion:
      "Aplicación desarrollada en Java desde Eclipse, conectada a una base de datos para gestionar la información de una biblioteca.",
    imagen: "biblioteca.png",
    url: "#",
    github: "#"
  },
  {
    nombre: "Página web con WordPress",
    descripcion:
      "Diseño y desarrollo de una página web utilizando WordPress.",
    imagen: "/proyecto-html.jpg",
    url: "#",
    github: "#"
  },
  {
    nombre: "Mi portfolio",
    descripcion: "Este portfolio hecho con React.",
    imagen: "/proyecto-html.jpg",
    url: "#",
    github: "#"
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
                <a href={proyecto.url}>Ver proyecto</a>
                <a href={proyecto.github}>GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;