import React,{useEffect} from 'react';
import Footer from './Footer';
import Info from './Services_com/Info';
import SliderServices from './Services_com/SliderServices';
import ContactUs from './ContactUs';
import { Fade, Flip,Bounce} from 'react-reveal';
import Loding from './Loding'


const Services =()=>{

    useEffect(() => {
        window.scrollTo(0, 0)    }
  ,[] )

    return(<>
    <Loding/>
        <SliderServices></SliderServices>
        <Info/>
        <ContactUs></ContactUs>
        <Footer />
        </>)
}

export default Services;