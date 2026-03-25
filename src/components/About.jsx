import { motion } from "framer-motion";

function About() {
    return (
      <motion.div className="card" id="about" 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}>
        <h2>About Me</h2>
        <p>
          Full Stack PHP Developer with 4 years of experience in building scalable
          web applications using Laravel and CodeIgniter. Specialized in REST APIs,
          e-commerce platforms, and admin dashboards.
        </p>
      </motion.div>
    );
  }
  
  export default About;