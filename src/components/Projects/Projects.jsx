import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "E-Commerce App",
      tech: "React + Redux"
    },
    {
      title: "BookMyShow Clone",
      tech: "React + Razorpay"
    },
    {
      title: "Car Booking App",
      tech: "React"
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.tech}</p>

            <button>View Project</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;