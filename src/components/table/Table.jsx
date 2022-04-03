const Table = ({ count, minus, sum, multiple }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Counter</th>
                    <th>Addition</th>
                    <th>Subtraction</th>
                    <th>Multiplication</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{count}</td>
                    <td>{sum}</td>
                    <td>{minus}</td>
                    <td>{multiple}</td>
                </tr>
            </tbody>
        </table>

    )
}

export default Table;
