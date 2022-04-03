import { useDispatch } from 'react-redux';
import ResetComponent from '../components/reset/Reset';
import { reset } from '../store/actions';
const Reset = () => {
    const dispatch = useDispatch()
    return (
        <ResetComponent reset={reset} dispatch={dispatch} />
    );
}
export default Reset;