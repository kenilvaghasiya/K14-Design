import React from 'react';
import img1 from './img/logo 1.png'
import "./css/nav.css"
import $ from "jquery";
import { NavLink } from 'react-router-dom';


const Nav =()=>{

    $(document).ready(function(){

        $('#logoani1').mousemove(function(evt){
        
            var x=evt.pageX;
            var y=evt.pageY;
            var wy=50;
            $('#logoani').css({ "transform" : "rotateX("+(wy-y+10)+"deg) rotateY("+($(window).width()-x)+"deg)"});
        })
        
        $('#logoani1').mouseleave(function(evt){
            $('#logoani').css({ "transform" : "rotateX(0deg) rotateY(0deg)"});
        })


        $('#maintogbtn').click(function(){
            $('#listbtn').slideToggle();
         });

         $('.linkid').click(function(){
            $('#listbtn').slideToggle();
         })
       
      
    });
        

    return(
    
    <nav >

        <div className="navbar1" style={{position:'fixed'}} >
            <ul className="navlist">

             <li className="li1"> <NavLink activeClassName='linkid2'  exact to='/home' className='linkid'>Home</NavLink></li>
             <li className="li1"><NavLink activeClassName='linkid2'  exact to='/services' className='linkid'>Services</NavLink></li>
                <li>

                <div  className="space"> </div>
                  
                </li> 
            <li className="li1"><NavLink activeClassName='linkid2'  exact to='/about' className='linkid'>About</NavLink></li>
            <li className="li1"><NavLink activeClassName='linkid2'  exact to='/contactus' className='linkid'>Contact Us</NavLink></li>

            </ul>

                <div className="logo1" id="logoani1">
                        <div className="logo12" id="logoani">
                            <img src={img1} alt="logo img"
                                className="mainlogo"/>
                        </div>
                </div>

        <div className='togbtn'  >
       
        <div className="btnlogo" id="maintogbtn">
        <svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line id="m11" x1="2.00092" y1="2" x2="23.557" y2="2" stroke="black" strokeWidth="4" strokeLinecap="round"/>
        <line id="m12" x1="2" y1="9.81848" x2="12.8994" y2="9.81848" stroke="black" strokeWidth="4" strokeLinecap="round"/>
        <line id="m13" x1="18.6984" y1="9.81848" x2="22.8273" y2="9.81848" stroke="black" strokeWidth="4" strokeLinecap="round"/>
        <line id="m14" x1="2.00092" y1="18.4147" x2="23.557" y2="18.4147" stroke="black" strokeWidth="4" strokeLinecap="round"/>
        </svg></div>
        </div>
     
        <div id="listbtn" className="toglist"  >
              
                <ul id="mmp">
                    <li ><NavLink activeClassName='linkid2'  exact to='/Home' className='linkid'>Home</NavLink></li>
                      <li > <NavLink activeClassName='linkid2'  exact to='/services' className='linkid'>Services</NavLink></li>
                      <li ><NavLink activeClassName='linkid2'  exact to='/about' className='linkid'>About</NavLink></li>
                      <li ><NavLink activeClassName='linkid2'  exact to='/contactus' className='linkid'>Contact Us</NavLink></li>

                 </ul>

         </div>

        </div>
          
        </nav>
    )


}

export default Nav;