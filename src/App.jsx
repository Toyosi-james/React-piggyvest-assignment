import "./App.css"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Locked from "./components/Locked/Locked"
import Cards from "./components/cards/Cards"
import Investment from "./components/Investment/Investment"
import Youtube from "./components/Youtube/Youtube"
import Reviews from "./components/Reviews/Reviews"
import Tech from "./components/tech/Tech"
import Footer from "./components/footer/Footer"
import Faq from "./components/faq/Faq"

const App = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <Locked/>
      <Cards/>
      <Investment/>
      <Youtube/>
      <Reviews/>
      <Tech/>
      <Footer/>
      <Faq/>
    </div>
  )
}

export default App
