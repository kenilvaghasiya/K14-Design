import React, { useState, useEffect } from "react";
import axios from 'axios'
import("../../admin-css/admin.css");

const DataManiBox = (props) => {
    const updatedata=async (data)=>{
        console.log(data);
          await  axios.patch("/projectwork", data)
                .then(() => {
                })
                .catch(() => { alert("Error Try again") })
                props.updatedata();
    }

    const deleteData=async (datamain)=>{
        try {
            const res = await axios.delete('/projectwork', { data: {_id:datamain} })
            props.updatedata();

        } catch (e) {
            alert("No data")
        }

    }

    return (<>
      
        <div className='DataWorkcard'>
                            <div className='col-12 flexCard'>
                                <div className='col-6 p-0 DataWorkcard-name'>{props.data.name} { props.data.done===true?(<><img src="\Images\adminpanel\check.svg" alt="" className='checkpayment'/></>):(<></>)} </div>
                                <div className='col-6 p-0 textalignend DataWorkcard-name'>{props.data.price} <span>&#8377;</span></div>
                            </div>
                            <div className='col-12 flexCard'>
                                <div className='col-6 p-0 DataWorkcard-other'>{props.data.technology}</div>
                                <div className='col-6 p-0 textalignend DataWorkcard-other'>{props.data.date}</div>
                            </div>
                            <div className='col-12 flexCard'>
                                <div className='col-6 p-0 DataWorkcard-other' >Team leader: {props.data.teamLeader}</div>
                            </div>
                            <div className='col-12 flexCard flexjusend'>
                                <div>
                                    <img src="\Images\adminpanel\bin.svg" alt="delete"  className='binStyle'  onClick={()=>{deleteData(props.data._id)}}/>
                                </div>
                           {
                               props.data.complete===false?(<>
                               <div className='DataWorkcard--btn' onClick={()=>{updatedata({_id:props.data._id,complete:true,done:false});}}>
                                Complete
                            </div></>):(<>
                                <div className='DataWorkcard--btn' onClick={()=>{updatedata({_id:props.data._id,complete:true,done:true});}}>
                               { props.data.done===true?(<>Done</>):(<>Payment</>)} 
                            </div></>)
                           } 
                            </div>
                        </div>
    </>)
}

export default DataManiBox;

