import "./Investment.css"
import investment from "../../assets/investments.avif"

const Investment = () => {
  return (
    <div>
      <section class="investment">
    <main class="investment-text">
      <h1>Diverse ways to Invest</h1>
      <p>Grow Your money and invest for your future confidently.</p>
    </main>
    <main class="investment-container">
      <div class="investment-container-text">
       <h1>Earn Up to 35% returns
      </h1><p>Invest securely and confidently, on the go. Grow your money confidently by investing in pre-vetted, investment opportunities.</p></div>
      <div class="investment-container-image">
        <h3><span>&#8618</span>Learn about Investments</h3>
        <img src={investment} alt=""/>
      </div>
      </main>
   </section>
    </div>
  )
}

export default Investment
