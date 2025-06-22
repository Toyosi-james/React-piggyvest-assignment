import "./Header.css"
import logo from "../../assets/piggyvest logo.svg"

const Header = () => {
  return (
    <div>
      <header>
    
    <main class="piggy-left">
      <img src={logo} alt="logo"/>
      <ul>
        <li><a href="#">Save</a></li>
        <li><a href="#">Invest</a></li>
        <li><a href="#">Stories</a></li>
        <li><a href="#">FAQs</a></li>
        <li><a href="#">Resources</a></li>
      </ul>
    </main>
    <main class="btn">
      <div class="btn-1">
        <button>Sign in</button>
      </div>
      <div class="btn2">
        <button>Create free account</button>
      </div>
    </main>
  </header> 
    </div>
  )
}

export default Header
