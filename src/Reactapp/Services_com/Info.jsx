import react ,{useEffect} from "react"
import { Fade, Flip,Bounce} from 'react-reveal';
import { NavLink } from "react-router-dom"
import { Website } from "../Constant/constant";
import ("./sliderser.css")


const Info = () => {
   
    

    return (<>

        <div className="container-fluid mt-3">
            <div className="row ml-1 mr-1">
                <Fade left>                          
                <div className="col-lg-6 col-xs-12 m-0 p-0"><img src={Website+"/Images/Service/mobile.jpg"} alt="img" className="imgs m-0" /></div>
               </Fade>
               <Fade right>
                <div className="col-lg-6 col-xs-12 d-flex flex-column justify-content-center  p-lg-5 p-sm-0">
                    <div className="headtitle"> Mobile Apps Development</div>
                    <div className="disall mt-4 textFormate">From B2B or B2E apps for enterprises, small businesses, and startups, we have a proven track record of offering high-impact, result driven and engaging mobile application development services. K14 is a top mobile app development company
                        that is renowned for delivering native Android app development, native iOS app development, hybrid and cross-platform app development services to build next-gen mobile applications using the latest technology stack.</div>
              <NavLink  exact to="/services/mobile">      <button className="btn btnasd rounded-pill mt-4" style={{ backgroundColor: '#F13C31', color: 'white' }}>Learn More</button>   </NavLink>  
                </div>
                </Fade>
            </div>
        </div>

        <div className="container-fluid mt-5">
            <div className="row ml-1 mr-1">
            <Fade left> 
                <div className="col-lg-6 col-xs-12 d-flex flex-column justify-content-center order-2 order-lg-1   p-lg-5 p-sm-0 ">
                    <div className="headtitle"> Web Development</div>
                    <div className="disall mt-4 textFormate">Being a leading website application development company, our certified developers have unparalleled expertise in working with the latest web technologies to deliver custom web solutions. Whether creating a web presence for your company, an information hub for your business or empowering your apps/IoT devices through backend- K14 does it all by covering a wide spectrum of web solutions and framework.Being a leading website application development company, our certified developers have unparalleled expertise in working with the latest web technologies to deliver custom web solutions. Whether creating a web presence for your company, an information hub for your business or empowering your apps/IoT devices through backend- K14 does it all by covering a wide spectrum of web solutions and framework.</div>
                    <NavLink  exact to="/services/website">     <button className="btn btnasd rounded-pill mt-4" style={{ backgroundColor: '#F13C31', color: 'white' }}>Learn More</button> </NavLink >
                </div>
                </Fade>
            <Fade right>                          
                <div className="col-lg-6 col-xs-12 p-0 order-1 order-lg-2"> <img src={Website+"/Images/allpages/web3.jpg"} alt="img" className="imgs m-0"/></div>
            </Fade>                          
            </div>
        </div>

        <div className="container-fluid mt-5">
            <div className="row ml-1 mr-1">
            <Fade left>                          
                <div className="col-lg-6 col-xs-12 m-0 p-0"><img src={Website+"/Images/Service/UIUX.jpg"} alt="img" className="imgs m-0" /></div>
                </Fade>
                <Fade right> 
                <div className="col-lg-6 col-xs-12 d-flex flex-column  justify-content-center   p-lg-5 p-sm-0">
                    <div className="headtitle">UI/UX Design</div>
                    <div className="disall mt-4 textFormate">UI/UX Design is all about providing personalization, convenience, simplicity, engagement, minimalism and accessibility. Our main aim is to create your brand identity with an exceedingly crafted visual strategy to maximize all opportunities of your firm growing.</div>
                </div>
                </Fade>
            </div>
        </div>


        <div className="container-fluid mt-5">
            <div className="row ml-1 mr-1">
                <Fade left>
                <div className="col-lg-6 col-xs-12 d-flex flex-column justify-content-center order-2 order-lg-1 p-lg-5 p-sm-0">
                    <div className="headtitle"> Game Development</div>
                    <div className="disall mt-4 textFormate">We approach every work and play with curiosity and experimentation and producing meaningful and interesting products. By focusing on creating well-designed, highly enjoyable entertainment experiences, K14  has well maintained makers of mobile games.</div>
                    <NavLink  exact to="/services/game">     <button className="btn btnasd rounded-pill mt-4" style={{ backgroundColor: '#F13C31', color: 'white' }} >Learn More</button></NavLink>
                </div>
                </Fade>
                <Fade right>
                <div className="col-lg-6 col-xs-12 p-0 order-1 order-lg-2"><img src={Website+"/Images/Service/game.jpg"} alt="img" className="imgs " /></div>
                </Fade>
            </div>
        </div>


    </>)

}


export default Info