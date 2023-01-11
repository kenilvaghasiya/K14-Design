import React, { useState, useEffect } from "react";
import { Modal } from 'react-bootstrap';
import axios from 'axios'
import("../../admin-css/admin.css");

const AddWorkmodel = (props) => {

    const [formdata, setformdata] = useState({
        name: '',
        price: '',
        technology: '',
        teamLeader: '',
        date: '',
        complete: false,
        done:false
    })

    const getDate = (e) => {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }


    const submitData = async (e) => {
        e.preventDefault()
        try {
          await  axios.post("/projectwork", formdata)
                .then(() => {
                    props.onHide();
                })
                .catch(() => { alert("Error Try again") })
            setformdata({
                name: '',
                price: '',
                technology: '',
                teamLeader: '',
                date: '',
                complete: false,
                done:false
            })
        }
        catch (e) {
            return alert("ERROR")
        }
    }


    return (<>
        <Modal
            size="md"
            show={props.showModale}
            onHide={() => {
                props.onHide();
                setformdata({
                    name: '',
                    price: '',
                    technology: '',
                    teamLeader: '',
                    date: '',
                    complete: false,
                    done:false

                })
            }}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Add Project
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={submitData}>
                    <div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" name='name' value={formdata.name} onChange={getDate} required />
                        </div>
                        <div className="form-group">
                            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Price" name='price' value={formdata.price} onChange={getDate} required />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Technology" name='technology' value={formdata.technology} onChange={getDate} required />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Team leader" name='teamLeader' value={formdata.teamLeader} onChange={getDate} required />
                        </div>
                        <div className="form-group">
                            <input type="date" className="form-control" id="exampleInputPassword1" name='date' value={formdata.date} onChange={getDate} required />
                        </div>
                        <button type="submit" className="btn btn-primary">Create Project</button>
                    </div>

                </form>
            </Modal.Body>
        </Modal>
    </>)
}

export default AddWorkmodel;

