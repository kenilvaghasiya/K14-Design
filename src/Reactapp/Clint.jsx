import React,{useEffect ,useState} from 'react';
import './css/clint.css'


const Clint =()=>{

const [review,setreview]=useState(  {
      name: 'Kenil Vaghasiya',
      company: "K14developers",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/1.jpg"
  
    })


  
   

    return(<><div className="ClintReview">
<div className="container mainreviewClint">
     <div className="col devpro pl-0">  Client Review</div>
     </div>
 <div className="mainBOx">
  <div className="ReviewCard">
    <div className="ReviewCardContener">
      <div className="ReviewCardImg"><img src={review.img} /></div>
      <div className="ReviewCardcontent">
        <div className="ReviewCardcontent-name">{review.name}</div>
        <div className="ReviewCardcontent-web">{review.company}</div>
        <div className="ReviewCardcontent-data">{review.review}</div>
      </div>
    </div>
  </div>
  <div className="mainCont">
    <div className="mainBOx2">
      <div className="iamgeClint classCM4" onMouseEnter={()=>{setreview(data[0])}} > <img src="/Images/Clint/1.jpg" alt="img" className="imgRes" /> </div>
      <div className="iamgeClint classCM4" onMouseEnter={()=>{setreview(data[1])}}> <img src="/Images/Clint/2.jfif" alt="img" className="imgRes" /> </div>
      <div className="iamgeClint classCM4" onMouseEnter={()=>{setreview(data[2])}}> <img src="/Images/Clint/3.jfif" alt="img" className="imgRes" /> </div>
      <div className="iamgeClint classCM4" onMouseEnter={()=>{setreview(data[3])}}> <img src="/Images/Clint/4.jfif" alt="img" className="imgRes" /> </div>
    </div>
    <div className="mainBOx2">
      <div className="iamgeClint classCM4" onMouseEnter={()=>{setreview(data[4])}}> <img src="/Images/Clint/5.jfif" alt="img" className="imgRes" /> </div>
      <div className="iamgeClint classCM2" onMouseEnter={()=>{setreview(data[5])}}> <img src="/Images/Clint/6.jfif" alt="img" className="imgRes" /> </div>
      <div className="iamgeClint classCM2" onMouseEnter={()=>{setreview(data[6])}}> <img src="/Images/Clint/7.jfif" alt="img" className="imgRes" /> </div>
      <div className="iamgeClint classCM2" onMouseEnter={()=>{setreview(data[7])}}> <img src="/Images/Clint/8.jfif" alt="img" className="imgRes" /> </div>
      <div className="iamgeClint classCM4" onMouseEnter={()=>{setreview(data[8])}}> <img src="/Images/Clint/9.jfif" alt="img" className="imgRes" /> </div>
    </div>
    <div className="mainBOx2">
      <div className="iamgeClint classCM4" onMouseEnter={()=>{setreview(data[9])}}> <img src="/Images/Clint/10.jfif" alt="img" className="imgRes" /> </div>
      <div className="iamgeClint classCM2" onMouseEnter={()=>{setreview(data[10])}}> <img src="/Images/Clint/11.jfif" alt="img" className="imgRes" /> </div>
      <div className="iamgeClint classCM2" onMouseEnter={()=>{setreview(data[11])}}> <img src="/Images/Clint/13.jpg" alt="img" className="imgRes" /> </div>
      <div className="iamgeClint classCM2" onMouseEnter={()=>{setreview(data[12])}}> <img src="/Images/Clint/11.jfif" alt="img" className="imgRes" /> </div>
      <div className="iamgeClint classCM2" onMouseEnter={()=>{setreview(data[13])}}> <img src="/Images/Clint/10.jfif" alt="img" className="imgRes" /> </div>
      <div className="iamgeClint classCM4" onMouseEnter={()=>{setreview(data[14])}}> <img src="/Images/Clint/17.jfif" alt="img" className="imgRes" /> </div>
    </div>
    <div className="mainBOx2">
      <div className="iamgeClint classCM4" onMouseEnter={()=>{setreview(data[15])}}> <img src="/Images/Clint/18.jpeg" alt="img" className="imgRes" /> </div>
      <div className="iamgeClint classCM2" onMouseEnter={()=>{setreview(data[16])}}> <img src="/Images/Clint/17.jfif" alt="img" className="imgRes" /> </div>
      <div className="iamgeClint classCM2" onMouseEnter={()=>{setreview(data[17])}}> <img src="/Images/Clint/6.jfif" alt="img" className="imgRes" /> </div>
      <div className="iamgeClint classCM1" onMouseEnter={()=>{setreview(data[18])}}> <img src="/Images/Clint/1.jpg" alt="img" className="imgRes" /> </div>
      <div className="iamgeClint classCM2" onMouseEnter={()=>{setreview(data[19])}}> <img src="/Images/Clint/16.jpg" alt="img" className="imgRes" /> </div>
      <div className="iamgeClint classCM2 " onMouseEnter={()=>{setreview(data[20])}}> <img src="/Images/Clint/4.jfif" alt="img" className="imgRes" /> </div>
      <div className="iamgeClint classCM4" onMouseEnter={()=>{setreview(data[21])}}> <img src="/Images/Clint/6.jfif" alt="img" className="imgRes" /> </div>
    </div>
    <div className="mainBOx2">
      <div className="iamgeClint  classCM4" onMouseEnter={()=>{setreview(data[22])}}> <img src="/Images/Clint/6.jfif" alt="img" className="imgRes" /> </div>
      <div className="iamgeClint classCM2" onMouseEnter={()=>{setreview(data[23])}}> <img src="/Images/Clint/18.jpeg" alt="img" className="imgRes" /> </div>
      <div className="iamgeClint classCM2" onMouseEnter={()=>{setreview(data[24])}}> <img src="/Images/Clint/4.jfif" alt="img" className="imgRes" /> </div>
      <div className="iamgeClint classCM2" onMouseEnter={()=>{setreview(data[25])}}> <img src="/Images/Clint/9.jfif" alt="img" className="imgRes" /> </div>
      <div className="iamgeClint classCM2" onMouseEnter={()=>{setreview(data[26])}}> <img src="/Images/Clint/8.jfif" alt="img" className="imgRes" /> </div>
      <div className="iamgeClint classCM4" onMouseEnter={()=>{setreview(data[27])}}> <img src="/Images/Clint/10.jfif" alt="img" className="imgRes" /> </div>
    </div>
    <div className="mainBOx2">
      <div className="iamgeClint classCM4" onMouseEnter={()=>{setreview(data[28])}}> <img src="/Images/Clint/9.jfif" alt="img" className="imgRes" /> </div>
      <div className="iamgeClint classCM2" onMouseEnter={()=>{setreview(data[29])}}> <img src="/Images/Clint/7.jfif" alt="img" className="imgRes" /> </div>
      <div className="iamgeClint classCM2" onMouseEnter={()=>{setreview(data[30])}}> <img src="/Images/Clint/4.jfif" alt="img" className="imgRes" /> </div>
      <div className="iamgeClint classCM2" onMouseEnter={()=>{setreview(data[31])}}> <img src="/Images/Clint/6.jfif" alt="img" className="imgRes" /> </div>
      <div className="iamgeClint classCM4" onMouseEnter={()=>{setreview(data[32])}}> <img src="/Images/Clint/11.jfif" alt="img" className="imgRes" /> </div>
    </div>
    <div className="mainBOx2">
      <div className="iamgeClint classCM4" onMouseEnter={()=>{setreview(data[33])}}> <img src="/Images/Clint/16.jpg" alt="img" className="imgRes" /> </div>
      <div className="iamgeClint classCM4" onMouseEnter={()=>{setreview(data[34])}}> <img src="/Images/Clint/8.jfif" alt="img" className="imgRes" /> </div>
      <div className="iamgeClint classCM4" onMouseEnter={()=>{setreview(data[35])}}> <img src="/Images/Clint/9.jfif" alt="img" className="imgRes" /> </div>
      <div className="iamgeClint classCM4" onMouseEnter={()=>{setreview(data[36])}}> <img src="/Images/Clint/10.jfif" alt="img" className="imgRes" /> </div>
    </div>
  </div>
</div>
</div>
        </>)
}

export default Clint;



const data = [
    {
      name: 'Mira Vaghasiya',
      company: "shok Leyland",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/1.jpg"
    }
    ,
      {
      name: 'Brandon O’Brien',
      company: "Acme Corp",
      review:"Since having our new website built by Thrive, we have seen a 200% increase in the number of online contact forms being filled out and returned to us. Matt and his team worked closely with us to provide a site that met all of the criteria that we were looking for. The end result was a website that is attractive, organized and effective. Thanks to Thrive for all of your hard work and support!",
    img:"/Images/Clint/2.jfif"
   
    },
      {
      name: 'Patty O’Furniture',
      company: "K14developers",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/3.jfif"
    
    },
      {
      name: 'Olive Yew',
      company: "Wonka Industries",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/4.jfif"
    
    },
      {
      name: 'Aida Bugg',
      company: "K14developers",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/5.jfif"
  
    },
      {
      name: 'Maureen Biologist',
      company: "tark Industries",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/6.jfif"
   
    }
    ,  {
      name: 'Teri Dactyl',
      company: "Ollivander's Wand Shop",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/7.jfif"
    
    }
    ,  {
      name: 'Peg Legge',
      company: "Bubba Gump",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/8.jfif"
   
    }
    ,  {
      name: 'Allie Grater',
      company: "Olivia Pope & Associates",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/9.jfif"
  
    }
    ,  {
      name: 'Liz Erd',
      company: "Cyberdyne Systems",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/10.jfif"
   
    }
    ,  {
      name: 'A. Mused',
      company: "Gekko & Co",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/11.jfif"
   
    }
,{
      name: 'Constance Noring',
      company: "Wayne Enterprises",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/13.jpg"
    }
    ,
      {
      name: 'A. Mused',
      company: "Gekko & Co",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/11.jfif"
   
    },
      {
      name: 'Liz Erd',
      company: "Cyberdyne Systems",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/10.jfif"
    
    },
      {
      name: 'U.R. Nice',
      company: "Cheers",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/17.jfif"
    
    },
      {
      name: 'Jen Tile',
      company: "Genco Pura Olive Oil Company",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/18.jpeg"
  
    },
      {
      name: 'U.R. Nice',
      company: "Cheers",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/17.jfif"
   
    }
    ,  {
      name: 'Maureen Biologist',
      company: "tark Industries",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/6.jfif"
    
    }
    ,  {
      name: 'Mira Vaghasiya',
      company: "shok Leyland",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/1.jpg"
   
    }
    ,  {
      name: 'Rose Bush',
      company: "The New York Inquirer",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/16.jpg"
  
    }
    ,  {
      name: 'Olive Yew',
      company: "Wonka Industries",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/4.jfif"
   
    }
    ,  {
      name: 'Maureen Biologist',
      company: "tark Industries",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/6.jfif"
   
    }
,{
      name: 'Maureen Biologist',
      company: "tark Industries",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/6.jfif"
    }
    ,
      {
      name: 'Jen Tile',
      company: "Genco Pura Olive Oil Company",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/18.jpeg"
   
    },
      {
      name: 'Olive Yew',
      company: "Wonka Industries",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/4.jfif"
    
    },
      {
      name: 'Allie Grater',
      company: "Olivia Pope & Associates",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/9.jfif"
    
    },
      {
      name: 'Peg Legge',
      company: "Bubba Gump",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/8.jfif"
  
    },
      {
      name:'Liz Erd',
      company: "Cyberdyne Systems",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/10.jfif"
   
    }
    ,  {
      name: 'Allie Grater',
      company: "Olivia Pope & Associates",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/9.jfif"
    
    }
    ,  {
      name: 'Teri Dactyl',
      company: "Ollivander's Wand Shop",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/7.jfif"
   
    }
    ,  {
      name: 'Olive Yew',
      company: "Wonka Industries",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/4.jfif"
  
    }
    ,  {
      name: 'Maureen Biologist',
      company: "tark Industries",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/6.jfif"
   
    }
    ,  {
      name: 'A. Mused',
      company: "Gekko & Co",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/11.jfif"
   
    }
,{
      name: 'Rose Bush',
      company: "The New York Inquirer",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/16.jpg"
    },
      {
      name: 'Peg Legge',
      company: "Bubba Gump",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/8.jfif"
    },
      {
      name: 'Allie Grater',
      company: "Olivia Pope & Associates",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/9.jfif"
    
    },
      {
      name: 'Liz Erd',
      company: "Cyberdyne Systems",
      review:"I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",
    img:"/Images/Clint/10.jfif"
    
    },
    
  ]