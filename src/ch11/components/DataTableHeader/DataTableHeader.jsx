import { useEffect, useRef, useState } from "react";
import "./style.css";
import Swal from "sweetalert2";

function DataTableHeader({ mode, setMode, products, setProducts, setDeleting, editProductId }) {

    const emptyProduct = {
        id: "",
        productName: "",
        size: "",
        color: "",
        price: ""
    };

    const inputRef = {
        productName: useRef(),
        size: useRef(),
        color: useRef(),
        price: useRef()
    };

    const [inputData, setInputData] = useState({...emptyProduct});

    useEffect(() => {
        const [ product ] = products.filter(product => product.id === editProductId); //id가 같은 상품 하나를 찾아서 product에 저장
        setInputData(!product ? { ...emptyProduct } : { ...product }); //product가 없으면 setInputData에 emptyProduct를 넣고 있으면 product를 넣는다.
    }, [editProductId]);

    const handleInputChange = (e) => {
        setInputData(inputData => ({ //화살표 뒤에 중괄호를 소괄호로 감싸면 객체를 반환한다는 의미다.
                ...inputData,
                [e.target.name]: e.target.value
        }));
    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13){
            if(e.target.name === "productName") {
                inputRef.size.current.focus();
            }
            if(e.target.name === "size") {
                inputRef.color.current.focus();
            }
            if(e.target.name === "color") {
                inputRef.price.current.focus();
            }
            if(e.target.name === "price") {
                handleSubmitClick();
                inputRef.productName.current.focus();
            }
        }
    }

    const handleChangeModeClick = (e) => {
        setMode(parseInt(e.target.value));
    }

    const handleSubmitClick = () => {
        if(mode === 1) {
            setProducts(products => {
                const productIds = products.map(product => product.id);
                const maxId = 
                    products.length === 0 
                    ? 0 
                    : Math.max.apply(null, productIds);
                return [ ...products, {...inputData, id: maxId + 1} ];
            });
            Swal.fire({
                title: "상품 정보 추가 완료",
                icon: "success",
                position: "top-center",
                showConfirmButton: false,
                timer: 5000
            });
            resetMode();
        }
        if(mode === 2) {
            Swal.fire({
                title: "상품 정보 수정",
                showCancelButton: true,
                confirmButtonText: "확인",
                cancelButtonText: "취소"
            }).then(() => {
                if(result.isConfirmed){
                    setProducts(products => [
                        ...products.map(product => { //수정하고자 하는 상품과 id가 같은 상품을 products에서 찾는다.
                            if(product.id === editProductId) { //수정하고자 하는 상품과 id가 같은 상품이면
                                const { id, ...rest } = inputData; //id를 제외한 나머지 데이터를 rest에 저장
                                return { 
                                    ...product,
                                    ...rest //id를 제외한 나머지 데이터를 덮어쓰기 한다.
                                }
                            }
                            return product;
                        })         
                    ]);
                    resetMode();
                }
            });
        }
                 
        if(mode === 3) {
            Swal.fire({
                title: "상품 정보 삭제",
                text: "정말로 삭제 하시겠습니까?",
                showCancelButton: true,
                confirmButtonText: "삭제",
                confirmButtonColor: "red",
                cancelButtonText: "취소"
            }).then(result => {
                if(result.isConfirmed) {
                    setDeleting(true); //삭제 버튼을 누르면 isDeleting 상태를 true로 변경한다.
                }
            });

        }
    }

    const handleCancelClick = () => {
        resetMode();
    }

    const resetMode = () => {
        setMode(0);
        setInputData({ ...emptyProduct });
    }

    return (  
        <header className="table-header">
            <div className="input-group">
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    name="productName" 
                    value={inputData.productName}
                    placeholder="상품명" 
                    onChange={handleInputChange} 
                    onKeyDown={handleInputKeyDown}
                    ref = {inputRef.productName}
                    autoFocus 
                />
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    name="size" 
                    value={inputData.size} 
                    placeholder="사이즈" 
                    onChange={handleInputChange} 
                    onKeyDown={handleInputKeyDown}
                    ref={inputRef.size}
                />
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    name="color" 
                    value={inputData.color} 
                    placeholder="색상" 
                    onChange={handleInputChange} 
                    onKeyDown={handleInputKeyDown}
                    ref={inputRef.color}
                />
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    name="price" 
                    value={inputData.price} 
                    placeholder="가격" 
                    onChange={handleInputChange} 
                    onKeyDown={handleInputKeyDown}
                    ref={inputRef.price}
                />
            </div>
            <div>
                {
                    !mode && (
                <div className="button-group">
                    <button onClick={handleChangeModeClick} value={1}>추가</button>
                    <button onClick={handleChangeModeClick} value={2}>수정</button>
                    <button onClick={handleChangeModeClick} value={3}>삭제</button>
                </div>
                    )
                }
                {
                    !!mode && ( //0이 아니면 true
                <div className="button-group">
                    <button onClick={handleSubmitClick}>확인</button>
                    <button onClick={handleCancelClick}>취소</button>
                </div>
                    )
                }
            </div>
        </header>
    );
}

export default DataTableHeader;