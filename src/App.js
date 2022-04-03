import { useState } from "react";
import Counter from "./container/Counter";
import Multiply from "./container/Multiply";
import Addition from "./container/Addition";
import Subtraction from "./container/Subtraction";
import Reset from "./container/Reset";
import Table from "./container/Table";

const App = () => {
    const [selected, setSelected] = useState("counter");
    const select = e => {
        setSelected(e.target.value);
    }
    return (
        <div className="main-wrapper">
            <div className="form-wrapper">
                <form>
                    <label htmlFor="functions">Choose a Function:</label>
                    <select name="functions" id="functions" onChange={select}>
                        <option value="counter">Counter</option>
                        <option value="addition">Addition</option>
                        <option value="subtraction">Subtraction</option>
                        <option value="multiplication">Multiplication</option>
                    </select>
                </form>
            </div>
            <div className="app-wrapper">
                {
                    selected === "counter"
                        ? <Counter />
                        : selected === "addition"
                            ? <Addition />
                            : selected === "subtraction"
                                ? <Subtraction />
                                : <Multiply />
                }
            </div>
            <div className="reset-wrapper">
                <Reset />
            </div>
            <div className="table-wrapper">
                <Table />
            </div>

        </div>
    )
};

export default App;
