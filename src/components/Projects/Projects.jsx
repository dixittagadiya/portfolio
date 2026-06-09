import "./Projects.css";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "E-Commerce App",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80",
      desc:
        "Full-featured e-commerce application with authentication, wishlist, cart, payment integration and admin dashboard.",
      tech: ["React", "Redux", "Firebase", "MUI"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "BookMyShow Clone",
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
      desc:
        "Movie booking platform with seat selection, Razorpay integration and booking history.",
      tech: ["React", "Redux", "Razorpay"],
      github: "#",
      live: "#",
    },
    {
      title: "Car Booking App",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80",
      desc:
        "Car rental application with booking system, wishlist, filters and order management.",
      tech: ["React", "Redux", "LocalStorage"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">
        My Projects
      </h2>

      <p className="projects-subtitle">
        A collection of projects showcasing my
        React.js development skills.
      </p>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
          >
            {project.featured && (
              <span className="featured-badge">
                Featured
              </span>
            )}

            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="project-card-content">
              <h3>{project.title}</h3>

              <p>{project.desc}</p>

              <div className="tech-stack">
                {project.tech.map(
                  (item, i) => (
                    <span key={i}>
                      {item}
                    </span>
                  )
                )}
              </div>

              <div className="project-buttons">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="live-btn">
                    <FaExternalLinkAlt />
                    Live Demo
                  </button>
                </a>

                <a
                  href={'https://www.linkedin.com/in/dixit-tagadiya-b830b1319/'}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="github-btn">
                    <FaGithub />
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;