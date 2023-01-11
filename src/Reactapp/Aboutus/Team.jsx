import React from 'react';
import '../css/about.css'
import { Website } from '../Constant/constant';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Card';


const Team = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1800 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1800, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1
    }
  };


  return (<>
  <div className="container Team">
  <div className="ourTeamimg"><img src={Website+'/Images/About/ourteam.svg'} alt="" /></div>

    <Carousel responsive={responsive} className="CarouselCSS">
      <div className="mainCard">
        <Card
          img='/Images/emp/kenilvaghasiya.jpg'
          Name="Kenil Vaghasiya"
          Pro="Founder"
          About="With 4+ years of experience as a software engineer in the IT field, an Elite in Back-end development,front-end development and Project & Team Management."
          Link="https://www.linkedin.com/in/kenil-vaghasiya-a4b653172"
     />
      </div>
      
      <div className="mainCard">    <Card
        img='/Images/emp/mira.jpg'
        Name="Mira Vaghasiya"
        Pro="UI/UX Designer"
        About="With 2+ years of experience as a Ui / UX Designer in the IT field, I have designed a huge range of Websites & Applications using Sketch, Adobe XD, Figma for businesses."
        Link=""

      /></div>

      

      <div className="mainCard">    <Card
        img='/Images/emp/kunjal.jpg'
        Name="Kunjal Patel"
        Pro="App Developer"
        About="She is a Mobile Application expert with 5+ years of experience in mobile development and Project Management. She is excellent in Android."
        Link=""
      /></div>



    </Carousel>
    </div>
  </>)


}

export default Team;