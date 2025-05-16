import "./Hero.css"
import foto from "../../assets/foto.png"
const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="text-container">
        <span>Hola Soy,</span>
        <h1>Marc Meza</h1>

        <p>Mi pasión por la programación fron-end y mi conjunto de habilidades en Html, CSS, Javascript, Tailwind y Wordpress me impulsan a crear soluciones web que sean atractivas, funcionales y efectivas.</p>
        <a href="http://wa.me/+51949756104" target="_blank" className="btn">Contáctame</a>
      </div>
      <div className="image-container">
        <div className="circle-bg"></div>
        <img src={foto} alt="foto" className="foto" />
      </div>
    </div>
  )
}

export default Hero
