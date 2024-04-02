import React, { useRef, useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import AdminHeader from "../AdminNavbar/AdminHeader";
import { useDispatch } from "react-redux";
import { addMenu } from "../../../features/slices/Menu/menuSlice";
const AddMenu = ({ userId }) => {

    const [menu, setMenu] = useState({
        menuName: "",
        userId: userId
    })

    const dispatch = useDispatch()
    const formRef = useRef(null)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setMenu({ ...menu, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addMenu(menu))
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
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 pt-4">
                                        <form ref={formRef} onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">Enter Menu</label>
                                                <input type="text" className="form-control" id="menuName" name="menuName" onChange={handleChange} />
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
export default AddMenu