import { useEffect, useRef, useState } from "react";
import "./style.css";

function DataTableBody({ mode, setMode, products, setProducts, isDeleting, setDeleting, setEditProductId}) {
    const [ viewProducts, setViewProducts ] = useState([]);
    const [ checkedAll, setCheckedAll ] = useState(false);

    useEffect(() => {
        if(mode === 0) { //조회 모드일때
            resetViewProducts(); //isChecked 체크를 모두 해체한다. 
            setCheckedAll(false); //checkedAll을 false로 상태변경.
        } 
    }, [products, mode]); //products와 mode가 변경될때마다 실행된다.

    useEffect(() => {
        const checkStates = viewProducts.map(product => product.isChecked); 
        //viewProducts 배열의 isChecked를 추출하여 ischecked만 있는 checkStates 배열에 저장
        if(checkStates.includes(false)) { //하나라도 체크가 안되어있으면 전체 체크박스도 해제
            setCheckedAll(false);
        }else {
            setCheckedAll(true); //모두 체크되어있으면 전체 체크박스도 체크
        }
    }, [viewProducts]); //상품이 추가될때 마다 실행

    useEffect(() => {
        if(isDeleting) { //isDeleting이 true일때
            setProducts([ ...viewProducts //viewProducts를 스프레드로 복사해와서
                .filter(viewProduct => viewProduct.isChecked === false) //체크가 안된 상품을 빼고 새로운 배열을 만든다. 
                .map(viewProduct => {
                    const { isChecked, ...product} = viewProduct; //isChecked를 제외한 나머지 제품들을 viewProduct로 저장
                    return product;
                }) //-> 새로 만들어진 배열을 setProducts로 넘겨준다.
            ]);
            setMode(0); //삭제가 완료되면 조회 모드로 변경한다.
            setDeleting(false); //삭제가 완료되면 삭제 상태를 false로 변경한다.
        }
    }, [isDeleting]); //isDeleting이 변경될때마다 실행

    useEffect(() => {
        if(mode === 2) { //조회 모드일때
        const [ selectedProduct ] = viewProducts.filter(product => product.isChecked); //isChecked가 true인 상품 하나를 찾아서 selectedProduct에 저장
        setEditProductId(!selectedProduct ? 0 : selectedProduct.id); //selectedId가 없으면 0, 있으면 selectedId의 id를 setEditProductId로 넘겨준다.
        }

    }, [viewProducts]); //체크 박스를 선택하거나 해제 할 때 마다 현재 수정 모드인지 확인한다.

    const resetViewProducts = () => {
        setViewProducts([ ...products.map(product => ({...product, isChecked: false})) ]); 
        //props로 받은 products로 새로운 배열을 만들고 그 안의 isChecked를 false로 초기화한다.
    }

    const handleCheckedAllChange = (e) => {
        setCheckedAll(checked => { //전체 체크박스의 상태 확인
            if(!checked) { //true 일때 
                setViewProducts([ ...products.map(product => ({...product, isChecked: true})) ]); //모두 체크 상태로 바꾼다
            } else {
                resetViewProducts(); //모든 체크박스 체크해제
            }
            return !checked; //checked 상태를 반전시킨다. 
        });
    }

    const handleCheckedChange = (e) => {
        if(mode === 2) {    //수정 모드일때 
            setViewProducts(viewProducts => {
                    return [...viewProducts.map(product => { //반복문을 돌면서 체크박스 상태를 확인한다.
                    if(product.id === parseInt(e.target.value)) { //선택한 상품의 id와 같은 상품을 viewProducts에서 찾는다.
                        return {
                            ...product,                         //products를 복사하여
                            isChecked: !product.isChecked        //isChecked를 반전시킨다. 
                        }
                    }
                    return {
                        ...product,     
                        isChecked: false //기존에 체크되어있던 체크박스를 해제한다.
                    }
                }) ]
            });
        }
    

        if(mode === 3) { //삭제 모드일때
            setViewProducts(viewProducts => {
                return [ ...viewProducts.map(product => { //반복문을 돌면서 체크박스 상태를 확인한다
                    if(product.id === parseInt(e.target.value)) {
                        return {
                            ...product,
                            isChecked: !product.isChecked //동일한 체크박스를 체크하면 그 체크박스의 상태를 반전시킨다.
                        }
                    }
                    return product; //체크되어 있으면 그대로 둔다
                }) ]
            });
        }

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
                        viewProducts.map(product => (
                            <tr key={product.id}>
                                <th>
                                    <input 
                                        type="checkbox" 
                                        disabled={mode === 0 || mode === 1} 
                                        checked={product.isChecked} 
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