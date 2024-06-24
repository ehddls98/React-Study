import { useEffect, useState } from "react";
import "./style.css";

function DataTableBody({ mode, products }) {

    const [ viewProducts, setViewProducts ] = useState([]);
    
    const [ checkedAll, setCheckedAll ] = useState(false);

    useEffect(() => {
        resetViewProducts();
        setCheckedAll(false);
    }, [products, mode]) //products 배열이나 mode가 변경될 때마다 resetChecked 함수를 실행한다.

    useEffect(() => {
        const checkStates = viewProducts.map(product => product.isChecked);
        if(checkStates.includes(false)) {
            setCheckedAll(false); //하나라도 체크가 안된 체크박스가 있으면 checkedAll을 false로 변경한다.
        } else {
            setCheckedAll(true);
        }
    }, [viewProducts]);

    const resetViewProducts = () => {
        setViewProducts([ ...products.map(product => ({...product, isCkecked: false})) ]);  
    }

    const handleCheckedAllChange = (e) => {
        setCheckedAll(checked => {
            if(!checked) {
                setViewProducts([ ...products.map(product => ({...product, isCkecked: true})) ]); 
                //checked가 false일 때 모든 체크박스를 체크 상태로 변경한다.
            } else {
                resetViewProducts();
            }
            return !checked; //체크박스의 체크 상태를 반전시킨다.
        });
    }
    
    useEffect(() => {
        if(checkedAll) {
            setViewProducts([ ...products.map(product => ({...product, isCkecked: true})) ]); 
            //checkedALl이 true일 때 모든 체크박스를 체크 상태로 변경한다.
        } else {
            resetViewProducts();
        }
    }, [checkedAll]) //checkedAll 상태가 변경될 때마다 useEffect 함수를 실행한다.

    const handleCheckedChange = (e) => {
        if(mode === 2) {
                setViewProducts(viewProducts => {
                    return [ ...viewProducts.map(product => {
                        if(product.id === parseInt(e.target.value)){
                            return {
                                ...product, 
                                isChecked: !product.isChecked //체크박스의 체크 상태를 반전시킨다.
                            }
                        }
                        return {
                            ...product,
                            isChecked: false
                        }
                    }) ]
                });
            }
        }
        if(mode === 3) {
            setViewProducts(viewProducts => {
                return [ ...viewProducts.map(product => {
                    if(product.id === parseInt(e.target.value)){
                        return {
                            ...product, 
                            isChecked: !product.isChecked //체크박스의 체크 상태를 반전시킨다.
                        }
                    }
                    return product;

        }
            }) ]
        });
    }


    return (  
        <div className="table-body">
            <table>
                <thead>
                    <tr>
                        <th>
                            <input 
                                type="checkbox" 
                                disabled={mode !== 3} 
                                onChange={handleCheckedAllChange}
                                checked={checkedAll}
                            />
                        </th>
                        <th>상품코드</th>
                        <th>상품명</th>
                        <th>사이즈</th>
                        <th>색상</th>
                        <th>가격</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        viewProducts.map(product  => (
                            <tr key={product.id}>
                                <th>
                                    <input 
                                        type="checkbox" 
                                        disabled={mode === 0 || mode === 1} 
                                        checked={product.isChecked} //true/false
                                        onChange={handleCheckedChange}
                                        value={product.id}
                                    />
                                </th>
                                <td>{product.id}</td>
                                <td>{product.productName}</td>
                                <td>{product.size}</td>
                                <td>{product.color}</td>
                                <td>{product.price}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default DataTableBody;