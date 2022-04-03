import React, { useState } from "react";
import "./style.css";

const Subtraction = ({ subtract, minus, dispatch }) => {
    const [firstNo, setFirstNo] = useState(0);
    const [secondNo, setSecondNo] = useState(0);
    const subtractValue = () => {
        const parseFirstNo = parseInt(firstNo);
        const parseSecondNo = parseInt(secondNo);
        if(isNaN(parseFirstNo) || isNaN(parseSecondNo)){
            alert("No shuld be Integer");
            setFirstNo(0);
            setSecondNo(0);
            return;
        }
        dispatch(
            subtract(
                { 
                    firstNo: parseInt(firstNo), 
                    secondNo: parseInt(secondNo) 
                }
            )
        )

    }
    return (
        <div className="multiply-wrapper">
            <input type="text" placeholder="Enter First no" onChange={(e) => setFirstNo(e.target.value)}  value={firstNo}/>
            <span>-</span>
            <input type="text" placeholder="Enter Second no" onChange={(e) => setSecondNo(e.target.value)} value={secondNo}/>
            <button className="equalto" onClick={subtractValue}>=</button>
            <span>{minus}</span>
        </div>
    )
}

export default Subtraction;