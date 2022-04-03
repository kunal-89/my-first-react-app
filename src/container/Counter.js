import { useSelector,useDispatch } from 'react-redux';
import CounterComponent from '../components/counter/Counter';
import { increment, decrement } from '../store/actions';
const Counter = () => {
    const counter = useSelector((state) => state.count.count);
    const dispatch = useDispatch()
    return (
        <CounterComponent actions={{ increment, decrement }} counter={counter} dispatch={dispatch}/>
    );
}
export default Counter;
