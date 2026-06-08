import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="overlay"></div>

      <div className="hero-content">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>
            Hi, I'm <span>Dixit</span>
          </h1>

          <div className="animated-role">
            <AnimatedText />
          </div>

          <p>
            Building modern web applications and
            beautiful user interfaces.
          </p>

          <button>Hire Me</button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;