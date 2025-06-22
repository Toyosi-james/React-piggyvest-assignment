import "./Tech.css"
import tclogo from "../../assets/tclogo.png"
import output from "../../assets/output.png"
import techcrunch from "../../assets/techcrunch.png"
import pymnts from "../../assets/pymnts.svg"
import fastcompany from "../../assets/fastcompany.svg"
import cio from "../../assets/cio.svg"

const Tech = () => {
  return (
    <div>
      <section class="tech-logo">
        <main class="tech-logo-text">
          <h2>As featured in</h2>
        </main>
        <main class="tech-logo-image">
         <div class="tclogo">
             <img src={tclogo} alt=""/>
             </div>
          <div class="output">
            <img src={output} alt=""/>
            </div>
          <div class="techcrunch">
            <img src={techcrunch} alt=""/>
            </div>
          <div class="pymnts">
            <img src={pymnts} alt=""/>
            </div>
         <div class="fastcompany">
             <img src={fastcompany} alt=""/>
             </div>
          <div class="cio">
            <img src={cio} alt=""/>
            </div>
        </main>
      </section> 
      
      
    </div>
  )
}

export default Tech
