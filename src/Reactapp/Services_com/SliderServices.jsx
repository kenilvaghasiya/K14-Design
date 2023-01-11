import react from 'react';
import { Website } from '../Constant/constant';
import "./sliderser.css"

const SliderServices=()=>{

    return(<>
    
    
    <div className="container-fluid d-flex justify-content-center aftermobile">
   <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  
  <div className="carousel-inner">
  <div className="carousel-item active" data-bs-interval={4000}>
      <img src={Website+"/Images/Tec/A1.png"} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Game Development</h5>
        <p>We approach every work and play with curiosity and experimentation and producing meaningful and interesting products. By focusing on creating well-designed, highly enjoyable entertainment experiences, K14  has well maintained makers of mobile games.</p>
      </div>
    </div>
    

    <div className="carousel-item " data-bs-interval={4000}>
      <img src={Website+"/Images/Tec/A3.png"} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Mobile</h5>
        <p>We have experienced professionals to create high performing, digitally transformative and feature packed applications for all types of mobile applications. We build both native and cross-platform mobile apps with advanced feature integration based on Augmented Reality, Virtual Reality and many more.
        </p>
      </div>
    </div>

    <div className="carousel-item" data-bs-interval={4000}>
      <img src={Website+"/Images/Tec/A2.png"} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Web Development</h5>
        <p> Our main focus is on creativity and best quality Solutions. We create websites that can  handle powerful, flexible, customizable, responsive, mobile-friendly, affordable and launch in record time.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

    </>)
}

export default SliderServices