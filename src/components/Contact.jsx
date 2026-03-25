import { motion } from "framer-motion";

function Contact() {
    return (
        <motion.div className="card" id="contact" initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}>
        <h2>Contact</h2>
        <p>📧 komalmishal1@gmail.com</p>
        <p>📞 +91 9768451311</p>
      </motion.div>
    );
  }
  
  export default Contact;