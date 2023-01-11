import ContactUs from '../ContactUs';
import Footer from '../Footer';
import {useEffect} from "react"
import { Website } from '../Constant/constant';

import ("./all-tec-css.css")


const Game=()=>{
  useEffect(() => {
    window.scrollTo(0, 0)    }
,[] ) 


    return(<>
 <div>
  <div className=" container d-flex flex-column justify-content-center" style={{height: "600px"}}>
    <div className="techeading  pl-5 pr-5 pb-3">We create entertaining games for mobiley</div>
    <div className="tecdisc pl-5 pr-5">A studio filled with geeks, nerds, artists and some real freaks, who know how to produce playful entertainment for the smart devices.</div>
  </div>


  <div className="container-fluid mt-3">
    <div className="row ml-1 mr-1">
      <div className="col-lg-6 col-xs-12 m-0 p-0">
        <img src={Website+"/Images/allpages/game1.jpg"} alt="image" className="imgs m-0" /></div>
      <div className=" col-lg-6 col-xs-12 d-flex flex-column justify-content-center p-lg-5 p-sm-0 ">
        <div className="headtitle "> Game from the Fun Factory</div>
        <div className="disall mt-4 textFormate">IndiaNIC works with our own Gaming Studio to create several chart-topping games for different platforms. Our visual artists know how to enliven a game through stunning images. We have a team of 2D and 3D animators who breathe life into mobile games developed by us. We’ve been successfully involved in the delivery of highly interactive and exciting gaming experience on Mobile, Console, and Virtual Reality platforms. Contact us to turn your idea into an addictive Android or iOS game application with engaging and realistic graphic designs.</div>
      </div>
    </div>
  </div>


  <div className="container-fluid mt-3 ">
    <div className="row ml-1 mr-1 ">
      <div className="col-lg-6 col-xs-12 d-flex flex-column justify-content-center order-2 order-lg-1 p-lg-5 p-sm-0 ">
        <div className="headtitle ">VR Games</div>
        <div className="disall mt-4 textFormate">Virtuality is the next big reality. The majority of content produced on VR devices are the games. We can create a new game from ground up exclusively for VR devices and bounce your game idea towards reality.
</div>
      </div>
      <div className="col-lg-6 col-xs-12 m-0 p-0 order-1 order-lg-2 "><img src={Website+"/Images/allpages/game2.jpg"} alt="image" className="imgs m-0 " />
      </div>
    </div>
  </div>


  <div className="container-fluid mt-3">
    <div className="row ml-1 mr-1">
      <div className="col-lg-6 col-xs-12 m-0 p-0">
        <img src={Website+"/Images/allpages/game3.jpg"} alt="image" className="imgs m-0" /></div>
      <div className=" col-lg-6 col-xs-12 d-flex flex-column justify-content-center p-lg-5 p-sm-0 ">
        <div className="headtitle "> Mobile Games Publishing</div>
        <div className="disall mt-4 textFormate">We're always excited to partner up with highly engaging game titles for the launch. If you have a game that hasn't been release yet, and it’s engaging and fun, you've got us by your side. We’ll help you take it to the market to get the early traction in acquisition.</div>
      </div>
    </div>
  </div>



</div>
<ContactUs></ContactUs>
    <Footer></Footer>    
    </>)
}


export default Game