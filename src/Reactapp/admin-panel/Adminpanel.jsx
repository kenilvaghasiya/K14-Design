import React, { useState, useEffect } from "react"
import "./admin-css/admin.css"
import { useHistory, NavLink } from "react-router-dom"
import Clientdata from "./All-admin-inner-page/Clientdata"
import Work from "./All-admin-inner-page/Work"
import Userinfo from "./All-admin-inner-page/Userinfo"
import axios from "axios"
import { Website } from "../Constant/constant"
import Loding from '../Loding'

import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
const Adminpanel = () => {
    const history = useHistory()
    const [UserData, setdata] = useState([{
        _id: "",
        username: "",
        password: "",
        fname: "",
        about: "",
        skill: [],
        location: "",
        number: "",
        img: "",
        prof: ""
    }])
    const [page, setpage] = useState(<Clientdata />);


    const getdata = async () => {
        try {
            const _id = localStorage.getItem('k14litem')
            const res = await axios.post('/userinfo', { data: { _id } })
            setdata(await res.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        const locstg = localStorage.getItem('k14litem')
        if (!locstg) {
            history.push('/login')
        }
        getdata()
    }, [setpage])


    const edminallpages = (event) => {

        const seleno = event.target.value;

        if (seleno === 1) {
            setpage(<Userinfo data={UserData} />)
        }
        if (seleno === 2) {
            setpage()
        }
        if (seleno === 3) {
            setpage(<Work/>)
        }
        if (seleno === 4) {
            setpage(<Clientdata />)
        }
        if (seleno === 5) {
            setpage()
        }
        if (seleno == 6) {
            localStorage.removeItem("k14litem")
            history.push('/login')
        }


    }


    return (<>
<Loding/>
        <div className="container-fluid" style={{ paddingTop: 100 }}>


            <div className="row ">
                <div  className="col-2 p-0 m-0">
                <ProSidebar toggled='true' className='sliderDesign'>
                    <SidebarHeader>
                        <div className="row m-3 pt-4 d-flex justify-content-center align-items-center">
                            <img src={Website + UserData[0].img} className="userphoto m-0 p-0" />
                            <div className="col">
                                <p className="useridname  mb-0 "> {UserData[0].fname}</p>
                                <p className="useridprofe  mb-0 "> {UserData[0].prof}</p>
                            </div>
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <div className="mt-5">
                            <ul className="menubarlist p-0 text-light pl-4 ">
                                <li value={1} onClick={edminallpages}>User Info</li>
                                <li value={2} onClick={edminallpages}>Timer</li>
                                <li value={3} onClick={edminallpages}>Work</li>
                                <li value={4} onClick={edminallpages}>Client Messages</li>
                                <li value={5} onClick={edminallpages}>Add blog</li>
                                <li value={6} onClick={edminallpages}>Sign out</li>
                            </ul>
                        </div></SidebarContent>
                    <SidebarFooter>
                        <div className="d-flex justify-content-center align-content-center " style={{ fontSize: 10 }}> (C) 2021, K14 Developer</div>

                    </SidebarFooter>
                </ProSidebar>
                </div>
                {/* <div className="row m-3 d-flex justify-content-center align-items-center">
                        <img src={Website+ UserData[0].img} className="userphoto m-0 p-0" />
                        <div className="col">
                            <p className="useridname  mb-0 "> { UserData[0].fname }</p>
                            <p className="useridprofe  mb-0 "> {UserData[0].prof}</p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <ul className="menubarlist p-0 text-light pl-4 ">
                            <li value={1} onClick={edminallpages}>User Info</li>
                            <li value={2} onClick={edminallpages}>Timer</li>
                            <li value={3} onClick={edminallpages}>Work</li>
                            <li value={4} onClick={edminallpages}>Client Messages</li>
                            <li value={5} onClick={edminallpages}>Add blog</li>
                            <li value={6} onClick={edminallpages}>Sign out</li>
                        </ul>
                    </div>
                    <div className="d-flex justify-content-center align-content-center " style={{ fontSize: 10 }}> (C) 2021, K14 Developer</div> */}
                <div className="col-10 p-5">
                    <div className="d-flex flex-column ">
                        {page}
                    </div>
                </div>
            </div>
        </div>


    </>)
}

export default Adminpanel


















