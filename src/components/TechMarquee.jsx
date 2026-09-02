const tecnologias = ["HTML", "CSS", "JavaScript", "Java", "SQL", "WordPress", "React"];

function TechMarquee() {
  return (
    <div className="marquee">
      <marquee behavior="scroll" direction="left" scrollamount="5">
        {tecnologias.map((tech, i) => (
          <span key={i}>{tech}</span>
        ))}
      </marquee>
    </div>
  );
}

export default TechMarquee;