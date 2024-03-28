import React from "react";
import "./Order.css"
const Order = () => {

    return (

        <>
            <div className="card order-list py-2">
                <div className="icon-items">

                    <div className="icon-box">

                <i className="fa-solid fa-arrow-down-up-across-line fs-3 item-icon"></i>



                    </div>

                    <div className="registered-user-number ms-5 text-end">
                        <span>Total Orders</span> <br />
                        <span className="fw-bold fs-3">7</span>
                    </div>

                </div>
                <hr />
            </div>
        </>
    )
}

export default Order