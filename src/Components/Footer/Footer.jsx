import "./Footer.css"

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (

      <footer className="footer" id="footer">
        <div className="social-icons">
            <a href="https://github.com/Marc-98" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/marc-meza-alegre" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="http://wa.me/+51949756104" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-whatsapp"></i>
            </a>
        </div>
        <p> Copyright {currentYear} &copy; marcmez.dev - Todos los derechos reservados.</p>
      </footer>

  )
}

export default Footer
