import React, { useEffect, useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import AdminHeader from "../AdminNavbar/AdminHeader";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../../../features/slices/Menu/menuSlice";
import { Link } from "react-router-dom";
import { successToast } from "../../../utils/Toast/successToast";
import axios from "axios";





const ViewMenu = () => {

    const [filterData, setFilterData] = useState('')
    const data = useSelector(state => {
        return state.menu?.menu?.data
    })
    // console.log(data?.isVerified)
    let sn = 1;

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMenu(data))
    }, [data])

    const handleClick = async (id) => {
        const response = await axios.post(`http://localhost:8000/api/v1/menu/delete-menu/${id}`)
        if (response) {
            console.log("deleted menu: ", id)
        }
        successToast("Menu deleted successfully")

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
                            <div className="container">

                                <div className="row">

                                    <div className="col-md-10 pt-4">
                                        {data?.length > 0 ? (<>
                                            <div className="customer-heading">
                                                <h3 className="fw-bold">View Menu</h3>
                                            </div>
                                            <div className="d-flex justify-content-end gap-4">
                                                <input type="text" className="ps-2 w-50" placeholder="search menu...."
                                                    value={filterData} onChange={handleFilterData} />

                                                <Link to={`/admin/add-menu`} className="btn btn-primary">Add New</Link>
                                            </div>
                                            <table className="table table-responsive table-striped">
                                                <thead>
                                                    <tr>
                                                        <th >S.N.</th>
                                                        <th >Menu Name</th>
                                                        <th >Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data && data?.filter(menu => {
                                                        return filterData.toLowerCase() === '' ? menu : menu?.menuName.toLowerCase().includes(filterData)
                                                    }).map((ele) => (

                                                        <tr key={ele._id}>
                                                            <th >{sn++}</th>
                                                            <td>{ele?.menuName}</td>
                                                            <td>
                                                                <Link to={`/admin/update-menu/${ele._id}`}><i className="fa-solid fa-pen-to-square text-info" style={{ cursor: "pointer" }}  ></i></Link>
                                                                <span><i className="fa-solid fa-trash-can text-danger ms-4" style={{ cursor: "pointer" }} onClick={() => handleClick(ele._id)} ></i></span>
                                                            </td>
                                                        </tr>

                                                    ))

                                                    }


                                                </tbody>
                                            </table>
                                        </>) : (<>
                                            <div className="customer-heading">
                                                <h3 className="fw-bold">There are no any menu</h3>
                                            </div>
                                            <div >
                                                <Link to={`/admin/add-menu`} className="btn btn-primary">Add New Menu</Link>
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
export default ViewMenu