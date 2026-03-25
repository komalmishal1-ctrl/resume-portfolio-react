import { motion } from "framer-motion";

function Experience() {
    return (
        <motion.div className="card" id="experience" initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}>
        <h2>Experience</h2>
  
        <p><strong>BCOD Web Solution (Feb 2025– Feb 2026)</strong></p>
        <p>Worked on CodeIgniter 4, APIs, and Payment Gateway integration.</p>
  
        <p><strong>s2TECH (March 2022– Jan 2025)</strong></p>
        <p>Developed 8 web applications using PHP, MySQL, and frontend technologies.</p>
      </motion.div>
    );
  }
  
  export default Experience;