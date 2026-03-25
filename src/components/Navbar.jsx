function Navbar() {
    return (
      <div style={styles.nav}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
    );
  }
  
  const styles = {
    nav: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      padding: "15px",
      position: "sticky",
      top: 0,
      background: "#fff",
      zIndex: 1000,
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    },
  };
  
  export default Navbar;