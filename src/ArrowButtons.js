import React from "react";

const  ArrowButtons = () =>{

    return(
        <div className="arrowsDiv">
            <button className="upBtn">&uArr;</button>
            <div className="leftAndRightDiv">
                <button className="leftBtn">&lArr;</button>
                <button className="rightBtn">&rArr;</button>
            </div>
            <button className="downBtn">&dArr;</button>
        </div>

    )
}

export {ArrowButtons}