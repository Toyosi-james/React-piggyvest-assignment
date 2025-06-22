import "./Cards.css"
import piggyBank from "../../assets/piggybank.png"
import safeLock from "../../assets/safelock.png"
import targetSavings from "../../assets/target.avif"
import flexNaira from "../../assets/flex naira.avif"
import flexDollar from "../../assets/flex dollar.avif"
import houseMoney from "../../assets/house money.png"



const Cards = () => {
  return (
    <div>
     <section class="cards">
    <main class="card-text">
      <h1>Many ways to build your savings</h1>
      <p>Earn 12%-22% when you save with any of these PiggyVest plans.</p>
    </main>
    <main class="cards-container">

      <main class="first-cards">
        <div class="card-1">
          <div class="card-1-text">
            <h2>Automated Savings</h2>
            <p>Build a dedicated savings faster on your terms, automatically or manually.</p>
          </div>
          <div class="card-1-image">
            <h3>Piggybank</h3>
            <img src={piggyBank} alt=""/>
          </div>
        </div>
        <div class="card-2">
          <div class="card-2-text">
            <h2>Fixed Savings</h2>
            <p>Lock money away for a fixed duration without having access to it until maturity. it's like having
              a custom fixed deposit.</p>
          </div>
          <div class="card-2-image">
            <h3>Safelock</h3>
            <img src={safeLock} alt=""/>
          </div>
        </div>
      </main>
      <main class="first-cards">
        <div class="card-3">
          <div class="card-3-text">
            <h2>Goal-oriented Savings</h2>
            <p>Reach all your savings goals faster. save towards multiple goals on your own or with a group.</p>
          </div>
          <div class="card-3-image-text">
            <h3>TargetSavings</h3>
            <img src={targetSavings} alt=""/>
          </div>
        </div>
        <div class="card-4">
          <div class="card-4-text">
            <h2>Flex Naira</h2>
            <p>Save, transfer, manage, organise,and withdraw your money at any time.</p>
          </div>
          <div class="card-4-image-text">
            <h3>FlexNaira</h3>
            <img src={flexNaira} alt=""/>
          </div>
        </div>
      </main>
      <main class="first-cards">
        <div class="card-5">
          <div class="card-5-text">
            <h2>Flex Dollar</h2>
            <p>Save and grow your money in  foreign currencies such as Dollars.</p>
          </div>
          <div class="card-5-text-image">
            <h3>FlexDollar</h3>
            <img src={flexDollar} alt=""/>
          </div>
        </div>
        <div class="card-6">
          <div class="card-6-text">
            <h2>HouseMoney</h2>
            <p>Plan for your rent and household expenses.</p>
          </div>
          <div class="card-6-text-image">
            <h3>HouseMoney</h3>
            <img src={houseMoney} alt=""/>
          </div>
        </div>
      </main>
    </main>
  </section>  
      
      
    </div>
  )
}

export default Cards
