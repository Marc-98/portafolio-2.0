import "./Portfolio.css"
import ferea from "../../assets/ferea.png"
import orto_bienestar from "../../assets/orto_bienestar.png"
import pubilla_iberic from "../../assets/pubilla_iberic.png"
import sexto_sentindo from "../../assets/sexto_sentindo.png"
const portfolioItems = [
    {
        id: 1,
        image: ferea,
        title: "Ferea",
        description: "Ferea Servicios Hosteleros es una empresa especializada en catering personalizado para eventos en toda España.",
        demolink: "https://fereaservicioshosteleros.com",
    },
    {
        id: 2,
        image: orto_bienestar,
        title: "Orto Bienestar",
        description: "Orto Bienestar es una tienda online de productos ortopédicos y de bienestar. Ofrecemos una amplia gama de productos para mejorar la calidad de vida de nuestros clientes.",
        demolink: "https://ortobienestar.com",
    },
    {
        id: 3,
        image: pubilla_iberic,
        title: "Pubilla Iberic",
        description: "Pubilla Ibèric es una tienda online especializada en jamones, paletillas y embutidos ibéricos y de bellota. Seleccionan los mejores productos de origen nacional.",
        demolink: "https://pubillaiberic.com",
    },
    {
        id: 4,
        image: sexto_sentindo,
        title: "Sexto Sentido",
        description: "Sexto Sentido es una tienda online de productos de aromaterapia y bienestar. Ofrecemos una amplia gama de productos para mejorar la calidad de vida de nuestros clientes.",
        demolink: "https://sextosentidorubi.com/",
    },  ]
    const Portfolio = () => {
    	return (
    <div>
      <div className="portfolio" id="portfolio">
        <h1>Portafolio</h1>
        <div className="portfolio-container">
            {portfolioItems.map((item) => (
                <div className="portfolio-card" key={item.id}>
                <img src={item.image} alt={item.title} className="portfolio-image"/>
                <div className="portfolio-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <a href={item.demolink} target="_blank" rel="noopener noreferrer" className="demo-button">Visitar</a>
                </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
