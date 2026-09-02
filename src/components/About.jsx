const tecnologias = [
  "HTML",
  "CSS",
  "JavaScript",
  "Java",
  "SQL",
  "WordPress",
  "React"
];

function About() {
  return (
    <section id="sobre-mi">
      <h2>Sobre mí</h2>

      <p>
        Empecé estudiando Comunicación Audiovisual y, después de un año buscando trabajo relacionado con este ámbito, 
        comencé a interesarme por el mundo del diseño y desarrollo de páginas web. 
        Desde entonces, inicié el FP Superior de Desarrollo de Aplicaciones Web en UNIR y, poco a poco, 
        he ido aprendiendo y trabajando con nuevas tecnologías como Java, SQL, WordPress, JavaScript y React.
      </p>

      <br></br>

      <p>
        Me gusta especialmente la parte de frontend, ya que me permite combinar la parte técnica con mi lado más creativo. 
        Cada proyecto que realizo es una oportunidad para aprender algo nuevo, y este portfolio es, 
        en sí mismo, una muestra de ese proceso de aprendizaje.
      </p>

      <br></br>

      <h3>Tecnologías</h3>

      <div className="technologies">
        {tecnologias.map(tecnologia => (
          <span key={tecnologia}>{tecnologia}</span>
        ))}
      </div>
    </section>
  );
}

export default About;