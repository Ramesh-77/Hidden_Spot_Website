import React, { useEffect } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { useDispatch, useSelector } from "react-redux";
import { getRegisteredUserData } from "../../../features/slices/GetRegisterUser/getRegisterUserSlice";
import axios from "axios";





const ViewRegisterUser = () => {

    const data = useSelector(state => {
        return state.registeredUsers?.registeredUser?.data
    })
    // console.log(data?.isVerified)
    let sn = 1;

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRegisteredUserData(data))
    }, [data])

    const handleClick = async (id) => {
        console.log("object")
        const response = await axios.post(`http://localhost:8000/api/v1/users/delete-registered-user/${id}`)
        if (response) {
            console.log("deleted user: ", id)
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
                            <AdminNavbar />
                            <div className="container">

                                <div className="row">

                                    <div className="col-md-12 pt-4">
                                        {data?.length > 0 ? (<>
                                            <div className="customer-heading">
                                                <h3 className="fw-bold">Registered Users</h3>
                                            </div>
                                            <table className="table table-responsive table-striped">
                                                <thead>
                                                    <tr>
                                                        <th >S.N.</th>
                                                        <th >Full Name</th>
                                                        <th >Email</th>
                                                        <th >Phone</th>
                                                        <th >Status</th>
                                                        <th >Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data && data?.map((ele) => (

                                                        <tr key={ele._id}>
                                                            <th >{sn++}</th>
                                                            <td>{ele?.fullName}</td>
                                                            <td>{ele?.email}</td>
                                                            <td>{ele?.phone}</td>
                                                            <td>{ele?.isVerified === true ? "true" : "false"}</td>
                                                            <td><span><i className="fa-solid fa-trash-can text-danger" style={{ cursor: "pointer" }} onClick={() => handleClick(ele._id)}></i></span></td>
                                                        </tr>

                                                    ))

                                                    }


                                                </tbody>
                                            </table>
                                        </>) : (<>
                                            <div className="customer-heading">
                                                <h3 className="fw-bold">There are no any registerd Users</h3>
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
export default ViewRegisterUser