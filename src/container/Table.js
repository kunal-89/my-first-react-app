import { useSelector } from 'react-redux';
import TableComponent from '../components/table/Table';

const Table = () => {
    const count = useSelector((state) => state.count.count);
    const minus = useSelector((state) => state.substraction.minus);
    const sum = useSelector((state) => state.addition.sum);
    const multiple = useSelector((state) => state.multiply.multiple);
    // const reset = useSelector((state) => state.reset);
    console.log(count,minus,sum,multiple);
    return (
        <TableComponent count={count} minus={minus} sum={sum}  multiple={multiple} />
    );
}
export default Table;
