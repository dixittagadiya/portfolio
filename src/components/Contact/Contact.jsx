import "./Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Get In Touch</h2>
      <p className="contact-subtitle">
        Have a project in mind or want to collaborate? Let's connect.
      </p>

      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <div className="info-card">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <p>yourmail@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <FaPhoneAlt />
            <div>
              <h4>Phone</h4>
              <p>+91 9876543210</p>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt />
            <div>
              <h4>Location</h4>
              <p>Surat, Gujarat, India</p>
            </div>
          </div>

          <div className="social-links">
            <a href="#">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/dixit-tagadiya-b830b1319/">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <input type="text" placeholder="Subject" />

          <textarea
            rows="6"
            placeholder="Write Your Message..."
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;