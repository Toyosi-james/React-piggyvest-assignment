import "./Hero.css"
import apple from "../../assets/apple.png"
import apps from "../../assets/apps.png"
import piggyHero from"../../assets/piggy screenshot.png"

const Hero = () => {
  return (
    <div>
       <section class="hero">
    <main class="hero-left">
      <button>The 2024PiggyVestSavings Report</button>
      <h1>The Better Way to save & Invest</h1>
      <p>Piggyvest helps over 5 million customers achieve their financial goals by helping them save and invest with
        ease</p>
      <div class="hero-btn">
        <div class="hero-btn1">
          <div class="hero-icons">
            <img src={apple} alt=""/>
            <h4>Get on iPhone</h4>
          </div>
        </div>
        <div class="hero-btn2">
          <div class="hero-icons">
            <img src={apps} alt=""/>
            <h4>Get on Android</h4>
          </div>
        </div>
      </div>
    </main>
    <main class="hero-image">
      <img src={piggyHero} alt=""/>
    </main>
  </section>
    </div>
  )
}

export default Hero
