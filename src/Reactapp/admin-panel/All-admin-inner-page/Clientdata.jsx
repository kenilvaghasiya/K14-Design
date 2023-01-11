import React, { useEffect, useState, useCallback } from 'react'
import deleteimg from '../../img/delete.png'
import axios from "axios"

const Clientdata = () => {

    const [dataall, set] = useState([])
    const [deletdata, set2] = useState(1)


    const datagetdb = async () => {
        try {
            fetch('/getalldata/clint')
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

            // set(await res.data);
        } catch (e) {
            alert("No data")
        }
    };

    const deletedata = async (_id) => {
        try {
            const res = await axios.delete('/contectus', { data: { _id } })
        } catch (e) {
            alert("No data")
        }
    }

    useEffect(() => {
        datagetdb();
    }, [deletdata]);

return (<>

        {dataall && dataall.map((val, index) => {

            return (
                <div className="clinteboxmenu row mt-2 overflow-hidden " key={index}>
                    <div className="col-11  pt-2 ">
                        <div className="row ">
                            <p className=" col-4 m-0 overflow-hidden " style={{ fontSize: 20 }}>{val.fname + " " + val.lname}</p>
                            <p className=" col-4  m-0 overflow-hidden">{val.email}</p>
                            <p className=" col-4  m-0 overflow-hidden">{val.number}</p>
                        </div>
                        <div>
                            {val.service}
                        </div>
                        <div className="overflow-hidden" style={{ fontSize: 12 }}>
                            {val.about}
                        </div>
                    </div>
                    <div className="col-1 d-flex justify-content-center align-items-center mainbtndelete" style={{ backgroundColor: '#FE0F0F' }} onClick={() => { deletedata(val._id);
                    set2(deletdata+1) }}>
                        <div className="deletbtnstyle" />
                        <img src={deleteimg} alt style={{ width: 30, height: 30, zIndex: 1 }} />
                    </div>
                </div>
            )
        })}


    </>)
}


export default Clientdata







{/* <div className="clinteboxmenu row mt-2 overflow-hidden ">
<div className="col-11  ">
    <div className="row ">
        <p className=" col-4 m-0 overflow-hidden " style={{ fontSize: 20 }}>Kenil Vaghasiya</p>
        <p className=" col-4  m-0 overflow-hidden">Kenilvaghasiya704@gmail.com</p>
        <p className=" col-4  m-0 overflow-hidden">9913809010</p>
    </div>
    <div>
        Website
    </div>
    <div className="overflow-hidden" style={{ fontSize: 12 }}>
        Maybe you have handmade items you’re eager to sell, or perhaps you’d like to sell merchandise related to your niche. Whatever your specialty, take your business to the next level by starting an online store.
    </div>
</div>
<div className="col-1 d-flex justify-content-center align-items-center mainbtndelete" style={{ backgroundColor: '#FE0F0F' }}>
    <div className="deletbtnstyle" />
    <img src={deleteimg} alt style={{ width: 30, height: 30, zIndex: 1 }} />
</div>
</div> */}