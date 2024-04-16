import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import AdminHeader from "../AdminNavbar/AdminHeader";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { successToast } from "../../../utils/Toast/successToast";
import { getService } from "../../../features/slices/Service/serviceSlice";


const ViewService = () => {

    const [filterData, setFilterData] = useState('')
    const data = useSelector(state => {
        console.log(state)
        return state.service?.service?.data
    })
    // console.log(data?.isVerified)
    let sn = 1;

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getService(data))
    }, [data])

    const handleClick = async (id) => {
        const response = await axios.post(`http://localhost:8000/api/v1/menu/delete-service/${id}`)
        if (response) {
            console.log("deleted service: ", id)
        }
        successToast("Service deleted successfully")

    }
    const handleFilterData = (e) => {
        setFilterData(e.target.value)
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
                            <div className="container" style={{marginBottom: "10rem"}}>

                                <div className="row">

                                    <div className="col-md-10 pt-4">
                                        {data?.length > 0 ? (<>
                                            <div className="customer-heading">
                                                <h3 className="fw-bold">View Menu</h3>
                                            </div>
                                            <div className="d-flex justify-content-end gap-4">
                                                <input type="text" className="ps-2 w-50" placeholder="search menu...."
                                                    value={filterData} onChange={handleFilterData} />

                                                <Link to={`/admin/add-service`} className="btn btn-primary">Add New</Link>
                                            </div>
                                            <table className="table table-responsive table-striped">
                                                <thead>
                                                    <tr>
                                                        <th >S.N.</th>
                                                        <th>Image</th>
                                                        <th >Service Name</th>
                                                        <th>Service Description</th>
                                                        <th >Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data && data?.filter(service => {
                                                        return filterData.toLowerCase() === '' ? service : service?.serviceName.toLowerCase().includes(filterData)
                                                    }).map((ele) => (

                                                        <tr key={ele._id}>
                                                            <th >{sn++}</th>
                                                            <th><img src={"http://localhost:8000/"+ele?.avatar} alt="" className="img-fluid" style={{height: "100px", width: "100px", objectFit: "contain"}}/></th>
                                                            <td>{ele?.serviceName}</td>
                                                            <td>{ele?.serviceDesc}</td>
                                                            <td>
                                                                <Link to={`/admin/update-service/${ele._id}`}><i className="fa-solid fa-pen-to-square text-info" style={{ cursor: "pointer" }}  ></i></Link>
                                                                <span><i className="fa-solid fa-trash-can text-danger ms-4" style={{ cursor: "pointer" }} onClick={() => handleClick(ele._id)} ></i></span>
                                                            </td>
                                                        </tr>

                                                    ))

                                                    }


                                                </tbody>
                                            </table>
                                        </>) : (<>
                                            <div className="customer-heading">
                                                <h3 className="fw-bold">There are no any service</h3>
                                            </div>
                                            <div >
                                                <Link to={`/admin/add-service`} className="btn btn-primary">Add New Service</Link>
                                            </div>
                                        </>)}

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
export default ViewService