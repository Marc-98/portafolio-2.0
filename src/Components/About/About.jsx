import "./About.css"
import fotodesk from "../../assets/foto2.png"
const About = () => {
  return (
      <div className="about-details" id="about">
        <div className="circle-bg"></div>
        <img src={fotodesk} alt="sobre mi" />
        <div className="about-infos">
        <h1>Sobre mí</h1>
        <p className="description">Soy estudiante de la carrera de Ingeniería de Sistemas en la Universidad Peruana de Ciencias Aplicadas y egresado técnico en Computación e Informática. Me apasiona el desarrollo web y la tecnología, y busco crear soluciones digitales modernas, funcionales y atractivas, aplicando mis conocimientos en HTML, CSS, JavaScript, Tailwind y WordPress.</p>
        <div className="experience-section">
            <div className="experience">
            <i className="fas fa-plus">
            </i>
            <span>1</span>
            <p>Años realizados</p>
            </div>
            <div className="experience">
            <i className="fas fa-plus">
            </i>
            <span>7</span>
            <p>Proyectos realizados</p>
            </div>
            <div className="experience">
            <i className="fas fa-plus">
            </i>
            <span>7</span>
            <p>Trabajos Profesionales</p>
            </div>
        </div>
        </div>
        </div>

  )
}

export default About
