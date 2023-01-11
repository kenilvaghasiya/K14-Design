import React from 'react';
import '../css/about.css'
import { Website } from '../Constant/constant';
import { Link } from 'react-router-dom';


const Card = (props) => {



    return (<>
        <div className="cardCarosal">
           
            <div className="linkedIn">
            {
                !props.Link?(''):(<> <div className="btnLinkwedIn"><a href={props.Link} style={{textDecoration:"none"}}>in</a></div></>)
            }
               
            </div>

            <img src={Website + props.img} alt="" />
            <div className="cardName">{props.Name}</div>
            <div className="cardPo">{props.Pro}</div>
            <dir className="cardAbout">{props.About}</dir>
        </div>



    </>)


}

export default Card;