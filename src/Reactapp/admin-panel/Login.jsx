import React, { useState, useEffect } from "react"
import "./admin-css/admin.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import Loding from '../Loding'


const Login = () => {
  const history = useHistory()

  useEffect(() => {
    const locstg = localStorage.getItem('k14litem')
    if (locstg) {
      history.push('/admine')
    }
  })


  const [logindata, setval] = useState({
    username: "",
    password: ""
  })

  const datalogin = (e) => {

    const value = e.target.value;
    const name = e.target.name;

    setval((val) => {
      return { ...val, [name]: value }
    })
  }


  const subdata = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post("/login", logindata);
      if (res.status === 201) {
        const resdata = res.data[0]
        localStorage.setItem('k14litem', resdata._id)
        history.push("/admine")

      }

    }
    catch (e) {
      return alert("ERROR")
    }
  }
  return (<>
<Loding/>
    <div className="container d-flex justify-content-center align-items-center " style={{ height: '100vh', paddingTop: 100 }}>
      <div className="row    login-box">
        <div className="col-lg-6 col-sm-6  login-pageing"><img src="/Images/adminpanel/loginimg.jpg" alt="image" className="login-pageing" /></div>
        <div className="col-lg-6 col-sm-6 d-flex flex-column justify-content-center">
          <form onSubmit={subdata}>
            <input type="text" placeholder="User ID" className="form-control m-2 col-md-8 col-sm-12" value={logindata.username} name="username" onChange={datalogin} required />
            <input type="password" placeholder="Password" className="form-control m-2  col-md-8 col-sm-12" value={logindata.password} name="password" onChange={datalogin} required />
            <button className="btn rounded-pill m-2 login-btn" >Log in</button>
          </form>
        </div>
        <div className="col-12 d-flex justify-content-center align-content-center mt-5" style={{ fontSize: 12, color: 'gray' }}>
          (C) 2021, K14 Developer
        </div>
      </div>
    </div>

  </>)
}

export default Login