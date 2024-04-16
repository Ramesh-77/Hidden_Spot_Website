import React, { useEffect, useRef, useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import AdminHeader from "../AdminNavbar/AdminHeader";
import { useDispatch } from "react-redux";

import axios from "axios";
import { useParams } from "react-router-dom";
import './Service.css'
import { successToast } from "../../../utils/Toast/successToast";
const UpdateService = ({ userId }) => {
    const [service, setService] = useState({
        serviceName: "",
        serviceDesc: "",
        admin: userId
    })

    const [avatar, setAvatar] = useState(null)
    const param = useParams()
    const serviceId = param.id;

    const dispatch = useDispatch()
    const formRef = useRef(null)


  


    // console.log(message)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setService({ ...service, [name]: value })
    }


    // useeffect to fetch 
    async function getSingleServiceDetails() {
        const response = await axios.get(`http://localhost:8000/api/v1/menu/single-service/${serviceId}`)
        const result = await response?.data?.data;
        // console.log(result?.avatar[0])
        setService(result)
        setAvatar(result?.avatar[0])
    }

    useEffect(() => {
        getSingleServiceDetails()
        
    }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const serviceData = new FormData()
        serviceData.append("serviceName", service.serviceName)
        serviceData.append("serviceDesc", service.serviceDesc)
        serviceData.append("admin", service.admin)
        serviceData.append("avatar", avatar)
        try {
            await axios.put(`http://localhost:8000/api/v1/menu/update-service/${serviceId}`, serviceData).then(response => {
                const result = response?.data;
                if (result) {
                    setTimeout(() => {
                        formRef.current.reset()
                    }, 3000);
                    successToast(
                        'Service has been updated successfully'
                    )
                }
            }).catch(err => {
                console.log(err)
            })


        } catch (error) {
            console.log(error)
        }




    }


    return (
        <>
            <section id="admin-dashboard">
                <div className="container-fluid">
                    <div className="row">
                        {/* first part - sidebar */}
                        <div className="col-md-2">
                            <AdminSidebar />
                        </div>
                        {/* second part - navbar */}
                        <div className="col-md-10">
                            <AdminHeader />
                            <div className="update-item container">
                                <div className="row">
                                    <div className="col-md-12 pt-4">
                                        <form ref={formRef} onSubmit={handleSubmit} encType="multipart/form-data">

                                            <div className="mb-3">
                                                <label className="form-label fw-bold">Service Name</label>
                                                <input type="text" className="form-control p-2" id="serviceName" name="serviceName" placeholder="Enter service name" value={service.serviceName} onChange={handleChange} />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">Service Description</label>
                                                <textarea className="form-control serviceDesc p-2" name="serviceDesc" id="serviceDesc" cols="30" rows="10" placeholder="write something about service information..." value={service.serviceDesc} onChange={handleChange}></textarea>
                                            </div>
                                            <div className="mb-3">
                                                <div className="form-label fw-bold">
                                                    <label className="form-label fw-bold me-3">Choose File</label>
                                                    <input type="file" name="avatar" id="avatar" onChange={(e) => setAvatar(e.target.files[0])} />
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default UpdateService