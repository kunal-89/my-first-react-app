import React, { useState } from "react";
import "./style.css";

const Multiply = ({ multiply, multiple, dispatch }) => {
    const [firstNo, setFirstNo] = useState(0);
    const [secondNo, setSecondNo] = useState(0);
    const mul = () => {
        const parseFirstNo = parseInt(firstNo);
        const parseSecondNo = parseInt(secondNo);
        if(isNaN(parseFirstNo) || isNaN(parseSecondNo)){
            alert("No shuld be Integer");
            setFirstNo(0);
            setSecondNo(0);
            return;
        }
        dispatch(
            multiply(
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
            <span>X</span>
            <input type="text" placeholder="Enter Second no" onChange={(e) => setSecondNo(e.target.value)} value={secondNo}/>
            <button className="equalto" onClick={mul}>=</button>
            <span>{multiple}</span>
        </div>
    )
}

export default Multiply;

