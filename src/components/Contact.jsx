function Contact() {
  return (
    <section id="contacto">
      <h2>Contacto</h2>

      <p>
        Si quieres contactar conmigo, puedes encontrarme en:
      </p>

      <div className="contact-links">
        <a href="mailto:gloriartra@gmail.com">
          Email
        </a>

        <a
          href="https://github.com/gloriaarandia"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/gloriaarandia"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a href="Curriculum.pdf" download className="cv-button">
          Descargar CV
        </a>
      </div>
    </section>
  );
}

export default Contact;