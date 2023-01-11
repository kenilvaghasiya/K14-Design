import { Website } from "../../Constant/constant";
import React,{useState,useEffect} from "react";
import("../admin-css/admin.css");


const Userinfo = (props) => {
const [state, setstate] = useState([])

useEffect(() => {
       setstate(props.data[0].skill)
}, [])

    return (<>


        <div className="container">
            <div className="row UserInfoPage">
                <div className="col-lg-4 col-xs-12"><img src={Website+props.data[0].img} alt="" className="UserInfoPageIMG" /></div>
                <div className="col-lg-8 col-xs-12">
                    <div className="Username"> {props.data[0].fname} </div>
                    <div className="UserWork">{props.data[0].prof}</div>
                    <div className="UserAbout">{props.data[0].about}</div>
                    <div className="UserLocation">{props.data[0].location}</div>
                </div>
            </div>

            <div className="row UserContect">
                <div className="col-12 UserHeader"> Contact Info</div>
                <div className="col-12 ml-2 mt-2 mb-2">
                    <div className="row">
                        <div className="col-3">Email:</div> 
                        <div className="col-6">{props.data[0].username}</div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-3">Number:</div> 
                        <div className="col-6">{props.data[0].number}</div>
                    </div>
                </div>
            </div>

            <div className="row UserContect pb-3">
                <div className="col-12 UserHeader"> Technology</div>
                <div className="col-12">
                    <div className="d-flex">
                        {state.length!=0 &&(
                        state.map((data,index)=>{
return(<div className="UserSkillBox" key={index}> {data}</div>)})) ||(<div className="UserSkillBox"> NoSkill</div>)}
               </div></div>
            </div>
        </div>


    </>)
}


export default Userinfo