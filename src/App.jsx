import Navbar from "./components/navbar";
import TechMarquee from "./components/TechMarquee";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <section id="inicio" className="hero">
        <p className="hero-saludo">Hola, soy Gloria</p>

        <h1>Desarrolladora web</h1>

        <p className="hero-descripcion">
          Estoy aprendiendo a crear páginas web y aplicaciones
          utilizando diferentes tecnologías.
        </p>

        <a href="#proyectos" className="hero-button">
          Ver mis proyectos
        </a>
      </section>

      <TechMarquee />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;