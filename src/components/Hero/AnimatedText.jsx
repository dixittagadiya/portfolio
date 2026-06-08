import { TypeAnimation } from "react-type-animation";

function AnimatedText() {
  return (
    <TypeAnimation
      sequence={[
        "React Developer",
        1500,
        "Frontend Developer",
        1500,
        "JavaScript Developer",
        1500,
        "Full Stack Learner",
        1500,
      ]}
      speed={50}
      repeat={Infinity}
    />
  );
}

export default AnimatedText;