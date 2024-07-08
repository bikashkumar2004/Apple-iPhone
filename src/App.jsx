import Navbar from "./Componats/Navbar"
import Hero from "./Componats/Hero"
import Highlights from "./Componats/Highlights"
import Model from "./Componats/Model"
import Features from "./Componats/Features"
import HowItWorks from "./Componats/HowItWorks"
import Footer from "./Componats/Footer"


function App() {
  

  return (
    <main className="bg-black">
       <Navbar/>
       <Hero/>
       <Highlights/>
       <Model/>
       <Features/>
       <HowItWorks/>
       <Footer/>
    </main>
  )
}

export default App
