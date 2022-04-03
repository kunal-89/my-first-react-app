const Reset = ({reset,dispatch}) => {
    return (
        <button onClick={()=>dispatch(reset())}>Reset</button>
    )
}

export default Reset;
