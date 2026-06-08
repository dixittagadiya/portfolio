import "./Skills.css";

function Skills() {
  const skills = [
    "React",
    "JavaScript",
    "Redux",
    "Node.js",
    "Firebase",
    "Material UI",
    "HTML",
    "CSS",
    "Git",
  ];

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;