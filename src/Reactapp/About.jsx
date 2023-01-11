import React,{useEffect} from 'react';
import './css/about.css'
import { Website } from './Constant/constant';
import Team from './Aboutus/Team';
import ContactUs from './ContactUs';
import Footer from './Footer';
import AddInfo from './Aboutus/AddInfo';
import Loding from './Loding'

const About =()=>{
    useEffect(() => {
        window.scrollTo(0, 0)    }
  ,[] )


 return(<>
 <Loding/>
 <div style={{paddingTop:'100px'}}>
<Team/>
<AddInfo/>
<ContactUs/>
<Footer/>
</div>
 </>)


}

export default About;