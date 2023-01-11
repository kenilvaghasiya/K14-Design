import ContactUs from '../ContactUs';
import Footer from '../Footer';
import {useEffect} from "react"
import { Website } from '../Constant/constant';

import ("./all-tec-css.css")


const Mobile=()=>{
  useEffect(() => {
    window.scrollTo(0, 0)    }
,[] )
    return(<>
   <div>
  <div className=" container d-flex flex-column justify-content-center" style={{height: "600px"}}>
    <div className="techeading  pl-5 pr-5 pb-3">Mobile App Development Company</div>
    <div className="tecdisc pl-5 pr-5">We develop mobile apps that help businesses for better operational efficiency and engagement. Hire certified mobile app developers from K14 who are experts for delivering excellence in Android, iOS and cross-platform app development services.</div>
  </div>
  <div className="container-fluid mt-3">
    <div className="row ml-1 mr-1">
      <div className="col-lg-6 col-xs-12 m-0 p-0">
        <img src={Website+"/Images/allpages/android.jpg"} alt="img" className="imgs m-0" /></div>
      <div className=" col-lg-6 col-xs-12 d-flex flex-column justify-content-center p-lg-5 p-sm-0 ">
        <div className="headtitle "> Android App Development</div>
        <div className="disall textFormate ">We are a leading Android app development company offering bespoke Android mobile app solutions for global brands, enterprises and startups. Covering the entire spectrum on the android platform, we can help you craft niche Android apps
          for Smartphones, Tablets, Android Wear and Android TV. Hire Android app developers from us having expertise to build custom Android apps that work on all Android devices with the latest Android OS version compatibility.</div>
      </div>
    </div>
  </div>
  <div className="container-fluid mt-3 ">
    <div className="row ml-1 mr-1 ">
      <div className="col-lg-6 col-xs-12 d-flex flex-column justify-content-center order-2 order-lg-1 p-lg-5 p-sm-0 ">
        <div className="headtitle "> iOS Apps Development</div>
        <div className="disall textFormate ">Our iphone app developers are highly experienced and works with latest iOS app development technologies to build applications. An iOS App offers multiple benefits, like it serves as both an advertising and promotional tool, increases customer reach, improves the service standards and consumer experience and also increases the revenue. Our mobile apps are made to carve the future of your business.</div>
      </div>
      <div className="col-lg-6 col-xs-12 m-0 p-0 order-1 order-lg-2 "><img src={Website+"/Images/allpages/apple.jpg"} alt="img" className="imgs m-0 " /></div>
    </div>
  </div>
</div>
<ContactUs></ContactUs>
    <Footer></Footer>
    
    </>)
}


export default Mobile