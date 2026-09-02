function Navbar() {
  return (
    <nav className="navbar">
      <h2>Mi Portfolio</h2>

      <div className="nav-links">
        <a href="#inicio">Inicio</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#contacto">Contacto</a>
      </div>
    </nav>
  );
}

export default Navbar; //sirve para hacer que el componente Navbar pueda utilizarse desde otros archivos.