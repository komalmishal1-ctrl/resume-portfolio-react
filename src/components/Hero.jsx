import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <motion.div
      className="card hero"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="glow">Komal Vaibhav Sodaye</h1>

      <TypeAnimation
        sequence={[
          "Full Stack Developer",
          1500,
          "Laravel Expert",
          1500,
          "React Developer",
          1500,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="typing-text"
      />
    </motion.div>
  );
}

export default Hero;