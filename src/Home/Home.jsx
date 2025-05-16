import "./Home.css"
import Hero from '../Components/Hero/Hero'
import About from '../Components/About/About'
import Skills from "../Components/Skills/Skills"
import Portfolio from "../Components/Portfolio/Portfolio"
import ContactForm from "../Components/ContactForm/ContactForm"
import Footer from "../Components/Footer/Footer"
const Home = () => {
  return (
    <div className='home'>
      <Hero/>
      <About/>
      <Skills/>
      <Portfolio/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Home
