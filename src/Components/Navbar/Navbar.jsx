import "./Navbar.css"
import logo_light from "../../assets/logo_light.png"
import logo_dark from "../../assets/logo_dark.png"
import { useContext, useState } from "react"
import ThemeToggle from "../ThemeToggle/ThemeToggle"
import { ThemeContext } from "../../ThemeContext/ThemeContext"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const {theme} = useContext(ThemeContext)
  const handlescroll = (e,sectionID) => {

    e.preventDefault();
    const section = document.getElementById(sectionID);
    if (section) {
      section.scrollIntoView ({ behavior: "smooth",block :"start"});
    }
    setMenuOpen(false)
  }
  return (
    <nav>
      <img src={theme==="light" ? logo_light :logo_dark} alt="logo" className="logo" />
      <ul className={menuOpen ? "active":""}>
        <li><a href="#hero" onClick={(e)=>handlescroll(e,"hero")}>Home</a></li>
        <li><a href="#about" onClick={(e)=>handlescroll(e,"about")}>Sobre mi</a></li>
        <li><a href="#skills" onClick={(e)=>handlescroll(e,"skills")}>Habilidades</a></li>
        <li><a href="#portfolio" onClick={(e)=>handlescroll(e,"portfolio")}>Portafolio</a></li>
        <li><a href="#contact" onClick={(e)=>handlescroll(e,"contact")}>Contacto</a></li>
        <i className="fa-solid fa-xmark" onClick={()=> setMenuOpen(false)}></i>
        </ul>
      <ThemeToggle/>
      <i className="fa-solid fa-bars"
            onClick={()=> setMenuOpen(true)}></i>
    </nav>
  )
}

export default Navbar
