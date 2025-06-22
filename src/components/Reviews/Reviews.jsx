import "./Reviews.css"
import fallback from "../../assets/fallbackImg.png"
import img1 from "../../assets/img1.jpeg"
import img2 from "../../assets/img2.jpeg"
import img3 from "../../assets/img3.jpeg"
import img4 from "../../assets/img4.jpeg"
import appleLogo from "../../assets/applelogo.png"
import apps from "../../assets/apps.png"



const Reviews = () => {
  return (
    <div>
       <section class="reviews">
      <main class="review-image">
        <img src={fallback} alt=""/>
      </main>
      <main class="review-text">
        <div class="review1">
      <div class="img1" >
         <img src={img1} alt=""/>
      </div>
        <div class="img2">
            <img src={img2} alt=""/>
        </div>
        <div class="img3">
            <img src={img3}  alt=""/>
            </div>
       <div class="img4">
         <img  src= {img4} alt="" class="img4"/>
       </div>
        <div class="img5">5m+</div></div>
        <div class="review2">
          <h2>Join 5+ million people who save and invest with us</h2>
        </div>
        <div class="review3">
          <div class="review-btn1">
           <img src= {appleLogo} alt=""/>
           <p>Get on iPhone</p>
          </div>
          <div class="review-btn2">
            <img src={apps} alt=""/>
            <p>Get on Android</p>
          </div>
        </div>
      </main>
     </section>
    </div>
  )
}

export default Reviews
