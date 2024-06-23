import "./style.css";

function DataTableBody({ mode, products }) {
    return (  
        <div className="table-body">
            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox" disabled={mode !== 3}/></th>
                        <th>상품코드</th>
                        <th>상품명</th>
                        <th>사이즈</th>
                        <th>색상</th>
                        <th>가격</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(({id, productName, size, color, price })  => (
                            <tr key={id}>
                                <th><input type="checkbox" disabled={mode === 0 || mode === 1} /></th>
                                <td>{id}</td>
                                <td>{productName}</td>
                                <td>{size}</td>
                                <td>{color}</td>
                                <td>{price}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default DataTableBody;