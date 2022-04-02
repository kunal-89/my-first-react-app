import "./style.css"

const Counter = ({actions,counter,dispatch}) => {
    const { increment, decrement } = actions;
    console.log("test",counter);
    return (
        <div className="counter-wrapper">
            <button onClick={() => dispatch(increment())}>+</button>
            <span>{counter}</span>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}

export default Counter;

