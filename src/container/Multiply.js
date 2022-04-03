import { useSelector,useDispatch } from 'react-redux';
import MultiplyComponent from '../components/Multiply/Multiply';
import { multiply } from '../store/actions';
const Multiply = () => {
    const multiple = useSelector((state) => state.multiple);
    const dispatch = useDispatch();
    return (
        <MultiplyComponent multiply={multiply} multiple={multiple} dispatch={dispatch}/>
    );
}
export default Multiply;