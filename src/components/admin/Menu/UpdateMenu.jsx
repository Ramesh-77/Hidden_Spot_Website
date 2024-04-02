import React, { useEffect, useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import AdminHeader from "../AdminNavbar/AdminHeader";
import { useDispatch } from "react-redux";
import { updateMenu } from "../../../features/slices/Menu/menuSlice";
import axios from "axios";
import { useParams } from "react-router-dom";
const UpdateMenu = ({ userId }) => {
    const [menuName, setMenuName] = useState("")
    const [admin, setAdmin] = useState(userId)
    const param = useParams()
    const productId = param.id;
    const dispatch = useDispatch()

    // console.log(message)
    const handleChange = (e) => {
        setMenuName(e.target.value)
    }

    // useeffect to fetch 
    async function getSingleMenuDetails() {
        const response = await axios.get(`http://localhost:8000/api/v1/menu/single-menu/${productId}`)
        const result = await response?.data?.data;
        setMenuName(result?.menuName)
    }
    useEffect(() => {
        getSingleMenuDetails()

    }, [])
 
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateMenu( {admin, menuName, productId} ))
        setTimeout(() => {
            
            setMenuName("")
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
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 pt-4">
                                        <form  onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">Update Menu</label>
                                                <input type="text" className="form-control" id="menuName" name="menuName" value={menuName} onChange={handleChange} />
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
export default UpdateMenu