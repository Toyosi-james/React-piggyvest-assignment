import "./Footer.css"
import logo from "../../assets/piggyvest logo.svg"
import compliance from "../../assets/piggy compliance.avif"
import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"
import tiktok from "../../assets/tiktok.png"
import youtube from "../../assets/youtube.png"

const Footer = () => {
  return (
    <div>
      <footer>
        <main class="first">
          <div class="first-logo">
            <img src={logo} alt=""/>
            </div>
            <div class="compliance">
            <img src={compliance} alt=""/>
          </div>
        </main>
        <main class="second">
          <div class="second-1">
            <h4>Products</h4>
                  <p>Piggybank</p>
                      <p>Invest</p>
                        <p>  Safelock</p>
                         <p> Target Savings</p>
                              <p>  Flex Naira</p>
                                <p>Flex Dollar</p>
          </div>
          <div class="second-2">
           <h4> Company</h4>
                 <p>  About</p>
                     <p> FAQs</p>
                         <p>Blog</p>
          </div>
          <div class="second-3">
            <h4> Legal</h4>
              <p>  Terms</p>
               <p>   Privacy</p>
                 <p>   Security </p>
          </div>
        </main>
        <main class="third">
        <div class="icons">
          <img src={facebook} alt=""/>
          <img src={twitter} alt=""/>
          {/* <img src="./assets/twitter (3).png" alt=""> */}
          <img src={tiktok} alt=""/>
          <img src={youtube} alt=""/>
        </div>
        <div class="third-text">
          <p>Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria.</p>
          <p>Contact@piggyvest.com</p>
          <p>+2347000339339</p>
        </div>
        </main>
      </footer>
    </div>
  )
}

export default Footer
