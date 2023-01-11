import React, { useEffect, useState } from "react";
import "./css/home.css";

const Loding = () => {
 const [loading, setLoading] = useState(true);
  useEffect(() => {
      const loadData = async () => {
        await new Promise((r) => setTimeout(r, 2000));
        setLoading((loading2) => !loading2);}
        loadData()
  },[]);

  return (
    <>
{loading && (<div className="LodingDiv">
    <img src="/Images/Homepage/img2.png" alt="" />
    </div>)}
    
     
    </>
  );
};

export default Loding;
