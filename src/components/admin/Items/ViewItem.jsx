import React, { useEffect, useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import AdminHeader from "../AdminNavbar/AdminHeader";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getItem } from "../../../features/slices/Item/itemSlice";
import axios from "axios";
import { successToast } from "../../../utils/Toast/successToast";


const ViewItem = () => {
    const [filterData, setFilterData] = useState('')
    const data = useSelector(state => {
        return state.item?.item?.data
    })

    // console.log(data?.isVerified)
    let sn = 1;

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getItem(data))
    }, [data])
    // console.log(data[0]?.avatar[0])

    const handleClick = async (id) => {
        const response = await axios.post(`http://localhost:8000/api/v1/menu/delete-item/${id}`)
        if (response) {

            successToast("Item deleted successfully")
        }
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
                            <div className="container" style={{ marginBottom: "5rem" }}>
                                <div className="row">
                                    <div className="col-md-10 pt-4">
                                        {data?.length > 0 ? (<>
                                            <div className="customer-heading">
                                                <h3 className="fw-bold">View Item</h3>
                                            </div>
                                            <div className="d-flex justify-content-end gap-4">
                                                <input type="text" className="ps-2 w-50" placeholder="search items...."
                                                    value={filterData} onChange={handleFilterData} />
                                                <Link to={`/admin/add-item`} className="btn btn-primary">Add New</Link>
                                            </div>
                                            <table className="table table-responsive table-striped">
                                                <thead>
                                                    <tr>
                                                        <th >S.N.</th>
                                                        <th >Image</th>
                                                        <th >Item Name</th>
                                                        <th >Item Price</th>
                                                        <th >Item Qty</th>
                                                        <th >Item desc</th>
                                                        <th >Menu</th>
                                                        <th >Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data && data?.filter(item => {
                                                        return filterData.toLowerCase() === '' ? item : item?.itemName.toLowerCase().includes(filterData)
                                                    }).map((ele) => (

                                                        <tr key={ele._id}>
                                                            <td >{sn++}</td>
                                                            <td><img src={`http://localhost:8000/${ele?.avatar[0]}`} alt='' className="img-fluid" style={{ height: "100px", width: "100px" }} /></td>

                                                            <td>{ele?.itemName}</td>
                                                            <td>{ele?.itemPrice}</td>
                                                            <td>{ele?.itemQuantity}</td>
                                                            <td>{ele?.itemDesc}</td>
                                                            <td>{ele?.menu}</td>
                                                            <td>
                                                                <Link to={`/admin/update-item/${ele._id}`}><i className="fa-solid fa-pen-to-square text-info" style={{ cursor: "pointer" }}  ></i></Link>
                                                                <span><i className="fa-solid fa-trash-can text-danger ms-4" style={{ cursor: "pointer" }} onClick={() => handleClick(ele._id)} ></i></span>
                                                            </td>
                                                        </tr>
                                                    ))
                                                    }
                                                </tbody>
                                            </table>
                                        </>) : (<>
                                            <div className="customer-heading">
                                                <h3 className="fw-bold">There are no any items</h3>
                                            </div>
                                            <div >
                                                <Link to={`/admin/add-item`} className="btn btn-primary">Add New Item</Link>
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