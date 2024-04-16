import React, { useRef, useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import AdminHeader from "../AdminNavbar/AdminHeader";
import { useDispatch } from "react-redux";
import "./Service.css"
import { addService } from "../../../features/slices/Service/serviceSlice";
const AddService = ({ userId }) => {

    const [service, setService] = useState({
        serviceName: "",
        serviceDesc: "",
        admin: userId
    })
    const [avatar, setAvatar] = useState("")

    const dispatch = useDispatch()
    const formRef = useRef(null)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setService({ ...service, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const serviceFormData = new FormData()
        serviceFormData.append("serviceName", service.serviceName)
        serviceFormData.append("serviceDesc", service.serviceDesc)
        serviceFormData.append("admin", service.admin)
        serviceFormData.append("avatar", avatar)
        dispatch(addService(serviceFormData))
        setTimeout(() => {
            formRef.current.reset()
        }, 3000);
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
                            <div className="container" >
                                <div className="row">
                                    <div className="col-md-12 pt-4">
                                        <form ref={formRef} onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">Service Name</label>
                                                <input type="text" className="form-control p-0" id="serviceName" name="serviceName" placeholder="Enter service name..." onChange={handleChange} />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">Service Description</label>
                                                <textarea className="form-control" name="serviceDesc" id="serviceDesc" cols="5" rows="5" placeholder="Write something about service..." onChange={handleChange}></textarea>
                                            </div>
                                            <div className="mb-3">
                                                <div className="form-label fw-bold">
                                                    <label className="form-label fw-bold me-3">Choose File</label>
                                                    <input type="file" name="avatar" id="avatar"  onChange={(e)=>setAvatar(e.target.files[0])} />
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
export default AddService