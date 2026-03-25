import { motion } from "framer-motion";


function Skills() {
    return (
        <motion.div className="card" id="skills" initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}>
        <h2>Skills</h2>
        <ul>
          <li>💻 PHP, Laravel, CodeIgniter</li>
          <li>🗄 MySQL</li>
          <li>⚛ React, JavaScript</li>
          <li>🎨 HTML, CSS, Bootstrap</li>
          <li>🔗 API Integration, Payment Gateway</li>
        </ul>
      </motion.div>
    );
  }
  
  export default Skills;