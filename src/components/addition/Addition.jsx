import React, { useState } from "react";
import "./style.css";

const Addition = ({ addition, sum, dispatch }) => {
    const [firstNo, setFirstNo] = useState(0);
    const [secondNo, setSecondNo] = useState(0);
    const add = () => {
        const parseFirstNo = parseInt(firstNo);
        const parseSecondNo = parseInt(secondNo);
        if(isNaN(parseFirstNo) || isNaN(parseSecondNo)){
            alert("No shuld be Integer");
            setFirstNo(0);
            setSecondNo(0);
            return;
        }
        dispatch(
            addition(
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
            <span>+</span>
            <input type="text" placeholder="Enter Second no" onChange={(e) => setSecondNo(e.target.value)} value={secondNo}/>
            <button className="equalto" onClick={add}>=</button>
            <span>{sum}</span>
        </div>
    )
}

export default Addition;