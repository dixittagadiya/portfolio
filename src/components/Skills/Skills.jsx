import "./Skills.css";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaFire,
} from "react-icons/fa";
import { SiRedux, SiMui } from "react-icons/si";

function Skills() {
  const skills = [
    {
      icon: <FaReact />,
      title: "React.js",
      desc: "Building modern and responsive web applications.",
    },
    {
      icon: <FaJs />,
      title: "JavaScript",
      desc: "ES6+, DOM, Async/Await and API integration.",
    },
    {
      icon: <SiRedux />,
      title: "Redux",
      desc: "State management using Redux Toolkit.",
    },
    {
      icon: <FaNodeJs />,
      title: "Node.js",
      desc: "Backend development and REST APIs.",
    },
    {
      icon: <FaFire />,
      title: "Firebase",
      desc: "Authentication and database integration.",
    },
    {
      icon: <SiMui />,
      title: "Material UI",
      desc: "Creating beautiful UI with MUI components.",
    },
    {
      icon: <FaHtml5 />,
      title: "HTML5",
      desc: "Semantic and accessible markup.",
    },
    {
      icon: <FaCss3Alt />,
      title: "CSS3",
      desc: "Responsive layouts and animations.",
    },
    {
      icon: <FaGitAlt />,
      title: "Git",
      desc: "Version control and collaboration.",
    },
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">
        My Skills
      </h2>

      <p className="skills-subtitle">
        Technologies and tools I use to build
        modern web applications.
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            className="skill-card"
            key={index}
          >
            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.title}</h3>

            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;