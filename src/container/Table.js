import { useSelector } from 'react-redux';
import TableComponent from '../components/table/Table';

const Table = () => {
    const count = useSelector((state) => state.count);
    const minus = useSelector((state) => state.minus);
    const sum = useSelector((state) => state.sum);
    const multiple = useSelector((state) => state.multiple);

    return (
        <TableComponent count={count} minus={minus} sum={sum}  multiple={multiple} />
    );
}
export default Table;