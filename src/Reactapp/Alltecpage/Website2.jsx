import ContactUs from '../ContactUs';
import Footer from '../Footer';
import {useEffect} from "react"
import { Website } from '../Constant/constant';
import ("./all-tec-css.css")


const Website2=()=>{

  useEffect(() => {
    window.scrollTo(0, 0)    }
,[] )


    return(<>
   <div>
  <div className=" container d-flex flex-column justify-content-center" style={{height: "600px"}}>
    <div className="techeading  pl-5 pr-5 pb-3">Web Development Company</div>
    <div className="tecdisc pl-5 pr-5">K14 is a top website design and web development company in India & USA delivering the best web development services to craft bespoke websites, web applications, web-tools, etc. to global businesses and startups with 100% project delivery.</div>
  </div>


  <div className="container-fluid mt-3">
    <div className="row ml-1 mr-1">
      <div className="col-lg-6 col-xs-12 m-0 p-0">
        <img src={Website+"/Images/allpages/web3.jpg"} alt="img" className="imgs m-0" /></div>
      <div className=" col-lg-6 col-xs-12 d-flex flex-column justify-content-center  p-lg-5 p-sm-0 ">
        <div className="headtitle "> Enterprise Solutions</div>
        <div className="disall textFormate">K14 is a top enterprise web development company having specialized in creating multi-level enterprise-grade web solutions to meet various corporate needs. We develop bespoke enterprise web portals, eCommerce solutions, B2B and B2C applications, ERP and CRM software apps, Reporting, Billing &amp; Secure Financial Transaction Processing Systems, etc. Our enterprise IT and web solutions are built using the latest web technologies and they are secure, robust and scalable which help businesses to reduce overall operational cost and enhance operational efficiency.</div>
      </div>
    </div>
  </div>


  <div className="container-fluid mt-3 ">
    <div className="row ml-1 mr-1 ">
      <div className="col-lg-6 col-xs-12 d-flex flex-column justify-content-center order-2 order-lg-1  p-lg-5 p-sm-0 ">
        <div className="headtitle "> E-Commerce</div>
        <div className="disall textFormate">We are a leading eCommerce web development company crafting beautiful web-based eCommerce solutions for ultimate online shopping experiences. Our eCommerce website development services include full-fledged online eCommerce store web design and custom eCommerce web development for small, medium and large-scale retail businesses. Our expertise in popular eCommerce platforms like Magento based eCommerce website development, WooCommerce, OsCommerce, Zen Cart, OpenCart, Shopify, etc. has helped us to deliver world-class eCommerce web solutions with robust online content management system.</div>
      </div>
      <div className="col-lg-6 col-xs-12 m-0 p-0 order-1 order-lg-2 "><img src={Website+"/Images/allpages/web2.jpg"} alt="img" className="imgs m-0 " />
      </div>
    </div>
  </div>


  <div className="container-fluid mt-3">
    <div className="row ml-1 mr-1">
      <div className="col-lg-6 col-xs-12 m-0 p-0">
        <img src={Website+"/Images/allpages/web1.jpg"} alt="img" className="imgs m-0" /></div>
      <div className=" col-lg-6 col-xs-12 d-flex flex-column justify-content-center  p-lg-5 p-sm-0 ">
        <div className="headtitle "> Mobile Backend & APIs</div>
        <div className="disall textFormate">Being a leading website development company since 1997, we offer top backend development services for web applications and mobile applications. Our master-coders provide custom REST API services and solutions to make the web and mobile apps interactive and user-friendly. We hold years of expertise in building on-site as well as cloud-based backend app solutions for mobile, desktop, web and IoT applications. Our API driven architecture fuels front-end of web apps and mobile apps. Whereas the powerful backend we develop will scale up your app when needed, performs faster and offers seamless 3rd party integration with optimum data storage security.</div>
      </div>
    </div>
  </div>



</div>
<ContactUs></ContactUs>
    <Footer></Footer>
    
    </>)
}


export default Website2