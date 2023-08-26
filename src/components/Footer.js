// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="floating-text">
      Created By
      <a
        href="https://www.linkedin.com/in/theajayrawat/"
        target="_blank"
        title="Ajay Rawat's Linkedin Profile"
      >&nbsp;
        Ajay Rawat
      </a>
    </div>
  );
};

export default Footer;
