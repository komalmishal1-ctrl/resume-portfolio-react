import { motion } from "framer-motion";


function Education() {
    return (
        <motion.div className="card"  initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}>
        <h2>Education</h2>
        <p>B.Sc IT - Gokhale College</p>
        <p>HSC - Lords Universal College</p>
        <p>SSC - Manohar Hariram Chogle Vidyalaya</p>
      </motion.div>
    );
  }
  
  export default Education;