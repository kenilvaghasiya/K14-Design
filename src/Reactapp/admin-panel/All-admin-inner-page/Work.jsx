import { Website } from "../../Constant/constant";
import React, { useState, useEffect } from "react";
import DataManiBox from "./Allcomponents/DataManiBox";
import AddWorkmodel from "./Allcomponents/AddWorkmodel";
import("../admin-css/admin.css");


const Work = () => {
    const [lgShow, setLgShow] = useState(false);
    const [dataall, set] = useState([])
    const [updateone, setUpdate] = useState(1)
    const [dataalltrue, settrue] = useState([])
    const [totalprice, setPrice] = useState([]);



    const datagetdb = async () => {
        try {
            fetch('/projectwork')
                .then(
                    data => data.json()
                )
                .then(
                    data => {
                        set(data.message)
                    }
                )
                .catch(error =>
                    console.log(error)
                );
        } catch (e) {
            alert("No data")
        }
    };


    const datagetdbTrue = async () => {
        try {
            fetch('/projectworktrue')
                .then(
                    data => data.json()
                )
                .then(
                    data => {
                        setPrice([])
                        settrue(data.message)
                        data.message.map((data2) => {
                            if (data2.done === true && data2.complete === true){
                                setPrice((data)=>[...data,parseInt(data2.price)])
                        }
                    })
        }
                )
                .catch (error =>
console.log(error)
                );
        } catch (e) {
    alert("No data")
}
    };



useEffect(() => {
    datagetdb();
    datagetdbTrue();

}, [lgShow, updateone]);

function add(accumulator, a) {
    return accumulator + a;
}


return (<>
    <div className='container-fluid'>
        <div className='Headerbar'>
            <div className='Earningsbar'>
                <div className='col-6 Earnings-txt'>Earnings</div>
                <div className='col-6 Earnings-price'>{totalprice.reduce(add,0)} <span>&#8377;</span></div>
            </div>

            <div className='addbtn' onClick={() => { setLgShow(true) }}>Add</div>
        </div>

        <div className='mt-4 row '>
            <div className='CardDesign'>
                <div className='col-12 CardDesign--head'>
                    Pending
                </div>
                <div className='col-12 p-0 m-0 barScrol'>
                    {dataall.map((data) => {
                        console.log(data);
                        return (<>
                            <DataManiBox data={data} updatedata={() => { setUpdate(updateone + 1) }} />
                        </>)
                    })}

                </div>
            </div>


            <div className='CardDesign'>
                <div className='col-12 CardDesign--head'>
                    Completed
                </div>
                <div className='col-12 p-0 m-0 barScrol'>
                    {dataalltrue.map((data) => {
                        console.log(data);
                        return (<>
                            <DataManiBox data={data} updatedata={() => { setUpdate(updateone + 1) }} />
                        </>)
                    })}

                </div>
            </div>
        </div>


    </div>

    <AddWorkmodel
        onHide={() => { setLgShow(false) }} showModale={lgShow} />
</>)
}


export default Work