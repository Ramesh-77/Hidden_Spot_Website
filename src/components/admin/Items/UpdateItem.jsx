import React, { useEffect, useRef, useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import AdminHeader from "../AdminNavbar/AdminHeader";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../../../features/slices/Menu/menuSlice";
import axios from "axios";
import { useParams } from "react-router-dom";
import './Item.css'
import { successToast } from "../../../utils/Toast/successToast";
const UpdateItem = ({ userId }) => {
    const [item, setItem] = useState({
        itemName: "",
        itemPrice: "",
        itemDesc: "",
        // menu comes from menu mode
        menu: "",
        itemQuantity: "",
        admin: userId
    })

    const [avatar, setAvatar] = useState(null)
    const param = useParams()
    const itemId = param.id;

    const dispatch = useDispatch()
    const formRef = useRef(null)


    const menu = useSelector(state => state.menu?.menu?.data)


    // console.log(message)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem({ ...item, [name]: value })
        console.log(item)
    }


    // useeffect to fetch 
    async function getSingleMenuDetails() {
        const response = await axios.get(`http://localhost:8000/api/v1/menu/single-item/${itemId}`)
        const result = await response?.data?.data;
        // console.log(result?.avatar[0])
        setItem(result)
        setAvatar(result?.avatar[0])
        console.log(avatar)



    }

    useEffect(() => {
        getSingleMenuDetails()
        dispatch(getMenu())
    }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const itemData = new FormData()
        itemData.append("itemName", item.itemName)
        itemData.append("itemPrice", item.itemPrice)
        itemData.append("itemQuantity", item.itemQuantity)
        itemData.append("menu", item.menu)
        itemData.append("itemDesc", item.itemDesc)
        itemData.append("admin", item.admin)
        itemData.append("avatar", avatar)
        try {
            await axios.put(`http://localhost:8000/api/v1/menu/update-item/${itemId}`, itemData).then(response => {
                const result = response?.data;
                if (result) {
                    setTimeout(() => {
                        formRef.current.reset()
                    }, 3000);
                     successToast(
                        'Item has been updated successfully'
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
                                                <label className="form-label fw-bold">Item Name</label>
                                                <input type="text" className="form-control p-2" id="itemName" name="itemName" placeholder="Enter item name" value={item.itemName} onChange={handleChange} />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">Item Price</label>
                                                <input type="text" className="form-control p-2" id="itemPrice" name="itemPrice" placeholder="Enter item price" value={item.itemPrice} onChange={handleChange} />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">Quantity</label>
                                                <input type="number" className="form-control p-2" id="itemQuantity" placeholder="Enter item Qty" min={1} name="itemQuantity" value={item.itemQuantity} onChange={handleChange} />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">Description</label>
                                                <textarea className="form-control itemDesc p-2" name="itemDesc" id="itemDesc" cols="30" rows="10" placeholder="write something about item information..." value={item.itemDesc} onChange={handleChange}></textarea>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label fw-bold me-3">Menu</label>
                                                <select className="menu" name="menu" id="menu" value={item.menu} onChange={handleChange}>
                                                    <option value="--select--">Please select one</option>
                                                    {menu && menu.map((m) => (

                                                        <option key={m?._id} name={m?.menuName} value={m?.menuName}>
                                                            {m?.menuName}
                                                        </option>

                                                    ))}

                                                </select>
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
export default UpdateItem