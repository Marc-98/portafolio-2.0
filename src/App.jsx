import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import { ThemeProvider } from "./ThemeContext/ThemeContext"
import 'scroll-carousel/dist/scroll.carousel.min.css';
function App() {
  return (
    <>
    <ThemeProvider>
     <Router>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
     </Router>
     </ThemeProvider>
    </>
    
  )
}

export default App
