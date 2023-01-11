import React from 'react';
import '../css/about.css'
import { Website } from '../Constant/constant';

const AddInfo =()=>{

 return(<>
 <div className="container-fluid mainAbout" >
     
     <div className="MapContainer row">
         <div className='col-lg-6 col-xs-12 col-sm-12 about information'>
            <p className="TitelOffice">Our Offices</p>
            <p className="addText">Raj Empire, near vraj chowk sarthaba jakatnaka ,Surat</p>
            <p className="addText"> +919601714264 , +918000477096</p>
            <p className="addText" style={{color:'#F13C31'}}> K14developers@gmail.com</p>
         </div>
         <div className='col-lg-6 col-xs-12 col-sm-12 indianImg'>
             <img src={Website+'/Images/About/indiaImge.svg'} alt="india" />
         </div>
     </div>
      </div>
 </>)


}

export default AddInfo;