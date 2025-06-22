import "./Locked.css"
import padlock from "../../assets/padlock.png"

const Locked = () => {
  return (
    <div>
       <section class="locked">
    <main class="locked-image">
      <img src={padlock} alt=""/>
    </main>
    <main class="locked-text">
      <h3>Your security is our priority</h3>
      <p>PiggyVest uses the highest level of internet Security and it is secured by 256 bit SSL
        security encryption to ensure that your information is competely protected from fraud</p>
      <h4><span>&#8618</span> More on our security measures</h4>
    </main>
  </section>
    </div>
  )
}

export default Locked
