import React, { useEffect, useRef, useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import AdminHeader from "../AdminNavbar/AdminHeader";
import "./Item.css"
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../../../features/slices/Menu/menuSlice";
import { addItem } from "../../../features/slices/Item/itemSlice";
import { successToast } from "../../../utils/Toast/successToast";



const AddItem = ({ userId }) => {

    const [item, setItem] = useState({
        itemName: "",
        itemPrice: "",
        itemDesc: "",
        // menu comes from menu model
        menu: "",
        itemQuantity: "",


        admin: userId
    })

    const [avatar, setAvatar] = useState([])
    // getting menu data using redux toolkit with useSelector hook
    const menu = useSelector((state) => {
        return state.menu?.menu?.data
    })
    const formRef = useRef(null)
    const dispatch = useDispatch()

    // getting menu data
    useEffect(() => {
        dispatch(getMenu())
    }, [dispatch])

    const handleChange = (e) => {
        const {name, value}  = e.target;
        setItem({ ...item, [name]: value })
        console.log(item)
    }
    const handleImageChange = (e) => {
        const file = e.target.files
        setAvatar(file)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        const formdata = new FormData()
        formdata.append("itemName", item.itemName)
        formdata.append("itemPrice", item.itemPrice)
        formdata.append("itemDesc", item.itemDesc)
        formdata.append("itemQuantity", item.itemQuantity)
        formdata.append("menu", item.menu)
        formdata.append("admin", item.admin)
        for (let i = 0; i < avatar.length; i++) {
            formdata.append("avatar", avatar[i])
        }


        dispatch(addItem(formdata))
        setTimeout(() => {
            formRef.current.reset()
        }, 3000);
        successToast("Item has been added successfully")


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
                            <div className="add-item container">
                                <div className="row">
                                    <div className="col-md-12 pt-4">
                                        <form ref={formRef} onSubmit={handleSubmit} encType="multipart/form-data">
                                            
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">Item Name</label>
                                                <input type="text" className="form-control p-2" id="itemName" name="itemName" placeholder="Enter item name" onChange={handleChange} />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">Item Price</label>
                                                <input type="text" className="form-control p-2" id="itemPrice" name="itemPrice" placeholder="Enter item price" onChange={handleChange} />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">Quantity</label>
                                                <input type="number" className="form-control p-2" id="itemQuantity" placeholder="Enter item Qty" min={1} name="itemQuantity" onChange={handleChange} />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">Description</label>
                                                <textarea className="form-control itemDesc p-2" name="itemDesc" id="itemDesc" cols="30" rows="10" placeholder="write something about item information..." onChange={handleChange}></textarea>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label fw-bold me-3">Menu</label>
                                                <select className="menu" name="menu" id="menu" onChange={handleChange}>
                                                    <option value="--select--">Please select one</option>
                                                    {menu ? menu.map((m) => (
                                                        <>
                                                            <option key={m?._id}  name={m?.menuName} value={m?.menuName}>
                                                                {m?.menuName}
                                                            </option>
                                                        </>
                                                    )) : <>
                                                        <h1>Add menu to see menu list</h1>
                                                    </>}

                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <div className="form-label fw-bold">
                                                    <label className="form-label fw-bold me-3">Choose File</label>
                                                    <input type="file" name="avatar" id="avatar" multiple onChange={handleImageChange} />
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
export default AddItem