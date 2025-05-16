import "./Skills.css";
import ScrollCarousel from 'scroll-carousel';
import { useEffect } from 'react';

const Skills = () => {

  useEffect(() => {
    new ScrollCarousel('.my-carousel', { smartSpeed: true, autoplay: true });
  }, []);

  return (
      <div className="skills" id="skills">
        <h1>Mis habilidades</h1>
        <div className="skills-base"> 
            <div className="skills-box">
                <i className="fas fa-laptop-code"></i>
                <h3>Desarrollo WordPress</h3>
                <p>Experiencia creando y personalizando sitios web profesionales en WordPress, optimizando rendimiento, seguridad y posicionamiento SEO, integrando plugins y temas a medida para clientes de distintos rubros.</p>
            </div>
            <div className="skills-box">
                <i className="fas fa-drafting-compass"></i>
                <h3>Diseño UX/UI</h3>
                <p>Diseño de interfaces atractivas y funcionales en WordPress, priorizando la experiencia de usuario, la usabilidad y la adaptación a dispositivos móviles, utilizando constructores visuales y CSS personalizado.</p>
            </div>
            <div className="skills-box">
                <i className="fas fa-layer-group"></i>
                <h3>Aplicaciones Web</h3>
                <p>Implementación de funcionalidades avanzadas en WordPress mediante plugins, formularios, integración con servicios externos y personalización de la experiencia del usuario final.</p>
            </div> 
          </div>
            <div className="my-carousel">
                <div className="my-slide"><i className="fa-brands fa-react"></i></div>
                <div className="my-slide"><i className="fa-brands fa-css3-alt"></i></div>
                <div className="my-slide"><i className="fa-brands fa-html5"></i></div>
                <div className="my-slide"><i className="fa-brands fa-js"></i></div>
                <div className="my-slide"><i className="fa-brands fa-sass"></i></div>
                <div className="my-slide"><i className="fa-brands fa-wordpress"></i></div>
                
            </div>
      </div>
  )
}

export default Skills
