import React, { useEffect, useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import AdminHeader from "../AdminNavbar/AdminHeader";
import { useDispatch, useSelector } from "react-redux";
import { getRegisteredUserData } from "../../../features/slices/GetRegisterUser/getRegisterUserSlice";
import axios from "axios";





const ViewItem = () => {

    const [filterUserData, setFilterUserData] = useState('')

    const data = useSelector(state => {
        return state.registeredUsers?.registeredUser?.data
    })
    // console.log(data?.isVerified)
    let sn = 1;

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRegisteredUserData(data))
    }, [data])

    const handleFilter = (e) => {
        setFilterUserData(e.target.value)
    }
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
                            <AdminHeader />
                            <div className="container">

                                <div className="row">

                                    <div className="col-md-12 pt-4">
                                        {data?.length > 0 ? (<>
                                            <div className="customer-heading">
                                                <h3 className="fw-bold">View All Items</h3>
                                            </div>
                                            <div>
                                                <input type="text" className="ps-3 w-50 d-block ms-auto" placeholder="search users..."
                                                    value={filterUserData} onChange={handleFilter} />
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
                                                    {data && data?.filter(user => {
                                                        return filterUserData?.toLowerCase() === "" ? user : user?.fullName?.toLowerCase().includes(filterUserData)
                                                    })
                                                        .map((ele) => (

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
export default ViewItem