import { useSelector,useDispatch } from 'react-redux';
import SubtractionComponent from '../components/subtraction/Subtraction';
import { subtract } from '../store/actions';
const Subtraction = () => {
    const minus = useSelector((state) => state.substraction.minus);
    debugger;
    const dispatch = useDispatch()
    return (
        <SubtractionComponent subtract={subtract} minus={minus} dispatch={dispatch}/>
    );
}
export default Subtraction;