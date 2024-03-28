import React from "react";
import "./Item.css"
const Item = () => {

    return (

        <>
            <div className="card item-list py-2">
                <div className="icon-items">

                    <div className="icon-box">

                        <i className="fa-solid fa-bowl-food item-icon fs-3"></i>


                    </div>

                    <div className="registered-user-number ms-5 text-end">
                        <span>Total Items</span> <br />
                        <span className="fw-bold fs-3">12</span>
                    </div>

                </div>
                <hr />
            </div>
        </>
    )
}

export default Item