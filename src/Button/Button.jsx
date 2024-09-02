import React from "react";
import './Button.css';

const LastBtn = ({ onClick }) => {
    return (
        <>
            <button onClick={onClick} type="submit">CLAIM YOUR FREE TRIAL</button>
        </>
    )  
}

export default LastBtn;