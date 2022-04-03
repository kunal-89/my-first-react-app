import { useSelector,useDispatch } from 'react-redux';
import AdditionComponent from '../components/addition/Addition';
import { addition } from '../store/actions';
const Addition = () => {
    const sum = useSelector((state) => state.sum);
    const dispatch = useDispatch()
    return (
        <AdditionComponent addition={addition} sum={sum} dispatch={dispatch}/>
    );
}
export default Addition;