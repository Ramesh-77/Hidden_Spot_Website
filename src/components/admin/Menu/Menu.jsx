import React from "react";
import "./Menu.css"
const Menu = () => {

    return (

        <>
            <div className="card menu-list py-2">
                <div className="icon-items">

                    <div className="icon-box">

                        <i className="fa-solid fa-bowl-food item-icon fs-3"></i>


                    </div>

                    <div className="registered-user-number ms-5 text-end">
                        <span>Total Menu</span> <br />
                        <span className="fw-bold fs-3">8</span>
                    </div>

                </div>
                <hr />
            </div>
        </>
    )
}

export default Menu