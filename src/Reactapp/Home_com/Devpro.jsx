import react from 'react'
import "./devpro.css"
import { Fade, Flip,Bounce,Zoom } from 'react-reveal';
import Jello from 'react-reveal/Jello';
import { Website } from '../Constant/constant';

const data = [
    {
        name: "Discover",
        value: "We collect the ideas through exploration and analysis of each and every assumptions by understanding the early possible risks."
    },
    {
        name: "Design",
        value: " According to the product concept, we ensure that the team really understands the customer requirements and apply the same to create something unique that is user-friendly."
    },
    {
        name: "Build",
        value: " The main focus is to build the product with efficiency and skill using various modern technologies to reach the solution that are flexible and scalable."
    },
    {
        name: "Deliver",
        value: " We carry out product through iterative approach of both our work and practice and are always eager to know about the response of the clients."
    }
]





const Devpro = () => {


    return (
        <>
            <div className="container mt-5">
                <div className="col">
                    <div className="col devpro pl-0"> Development Process  </div>
                    <Jello>   <div className="col-12 d-flex justify-content-center">
                        <img src={Website+"/Images/Homepage/barreirofreddy_tv_machine.jpg"} style={{ width: '80%', height: '80%',zIndex:"-1"}} alt />
                    </div></Jello>


                    <div className="row">
                        {data.map((val,index) => {
                            return (<>
                            <Fade top>
                                <div className="col-lg-3 col-sm-12" key={index}>
                                    <div className="col">
                                        <p className="proname">{val.name}</p>
                                        <p className="textFormate">{val.value}</p>
                                    </div>
                                </div>
                                </Fade>
                            </>)
                        })}
                    </div>
                    {/* </Fade> */}

                </div>
            </div>






        </>
    )

}


export default Devpro