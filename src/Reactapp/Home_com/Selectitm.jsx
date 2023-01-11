import react, { useState, useEffect } from 'react'
import { Website } from '../Constant/constant'
import "./selectitm.css"



const imgall =
{
    mobile: [ "/Images/Homepage/1.png","/Images/Homepage/2.png","/Images/Homepage/3.png","/Images/Homepage/7.png"],
    game: ["/Images/Homepage/4.png","/Images/Homepage/10.png"],
    frontend: ["/Images/Homepage/3.png","/Images/Homepage/5.png","/Images/Homepage/6.png","/Images/Homepage/9.png"],
    database: ["/Images/Homepage/16.png","/Images/Homepage/18.png","/Images/Homepage/17.png"],
    backend: ["/Images/Homepage/13.png","/Images/Homepage/11.png","/Images/Homepage/12.png","/Images/Homepage/14.png"]

}


const Selectitm = () => {
    const[dataarr,set2]=useState([])
    const [name, set] = useState('mobile')

    useEffect(() => {
            set2(()=>{
                return(imgall[name])
            })
    });

    const change = (e) => {
        set(e)
    }




    return (<>


        <div className="container mt-5 mb-5">
            <div className="col">
                <div className="row d-flex justify-content-center maintec">Technology</div>
                <div className="row d-flex justify-content-center m-0 listbox">
                    <ul className="d-flex flex-lg-row m-0 flex-wrap justify-content-center" >
                        <li className=" mb-0 hili" onMouseEnter={() => { change('mobile') }}  >Mobile</li>
                        <li className=" mb-0 hili" onMouseEnter={() => { change('game') }}>Game</li>
                        <li className=" mb-0 hili" onMouseEnter={() => { change('frontend') }}>Front End</li>
                        <li className=" mb-0 hili" onMouseEnter={() => { change('backend') }}>Backend</li>
                        <li className=" mb-0 hili" onMouseEnter={() => { change('database') }}>Database</li>
                    </ul>
                </div>
                <div className="row d-flex justify-content-center mt-4 flex-wrap">


                    { dataarr.map((val, index) => {
                        return (
                            <img src={Website+val} className="imgicon p-0" alt="img" key={index} />
                        )
                    })}



                </div>
            </div>
        </div>





    </>)


}

export default Selectitm