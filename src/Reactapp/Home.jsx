import React, { useEffect, useState } from "react";
import "./css/home.css";
import Devpro from "./Home_com/Devpro";
import Selectitm from "./Home_com/Selectitm";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import { Fade, Flip, Bounce, Zoom } from "react-reveal";
import { Website } from "./Constant/constant";
import Team from "./Aboutus/Team";
import Clint from "./Clint"
 import Loding from "./Loding"
const Home = () => {
  const [img, setimg] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Loding />
      <div className="container" style={{ paddingTop: "100px" }}>
        <div className="row h-100">
          <Fade left>
            <div className="col-lg-6 col-sm-12 d-flex justify-content-center overflow-hidden order-sm-1 order-xs-2">
              <div className="d-flex flex-column h-100 justify-content-center m-2 ">
                <p className="p1">Your Trusted Development Partner</p>
                <p className="p2">
                  <Zoom left cascade>
                    Your Imagination <br />
                    Becomes Reality
                  </Zoom>
                </p>
                <p className="p12">
                  We deliver web and mobile app , Game development services to
                  global businesses. Our User experience approach and project
                  execution processes help you to deliver the right solutions.
                </p>
                <NavLink exact to="/services">
                  <button className="Whatwedo">What we do</button>
                </NavLink>
              </div>
            </div>
          </Fade>
          <Flip right>
            <div className="col-lg-6 col-sm-12 d-flex justify-content-center overflow-hidden order-sm-2 order-xs-1">
              <img
                src={Website + "/Images/Homepage/kkk.gif"}
                alt="img"
                style={{ width: "110%", height: "110%" }}
              />
            </div>
          </Flip>
        </div>
      </div>
      {/* <Desvpro /> */}
      <Devpro></Devpro>

      <Selectitm />
      <div className="container-fluid posterimage">
        <img src="/Images/Homepage/k14.png" alt="k14" />
      </div>
      <div className="container-fluid">
        <Team />
      </div>

 <div className="container-fluid justify-content-center d-flex mt-5">
              <Clint />
      </div>

      <Footer />
    </>
  );
};

export default Home;
