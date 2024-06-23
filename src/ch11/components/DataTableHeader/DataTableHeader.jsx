import "./style.css";

function DataTableHeader({ mode, setMode, products, addProducts, inputData, setInputData}) {

    const handleChangeModeClick = (e) => {
        setMode(parseInt(e.target.value));
    }

    const handleSubmitClick = () => {
        if(mode === 1) {
            alert("상품추가");
            addProducts(products);
        }
        if(mode === 2) {
            alert("상품수정");
        }
        if(mode === 3) {
            alert("상품삭제");
        }
        resetMode();
    }

    const handleCancelClick = () => {
        resetMode();
    }

    const resetMode = () => {
        setMode(0);
    }

    const handleInputChange = (e) => {
        setInputData(inputData => {
            return {
                ...inputData,
                [e.target.name]: e.target.value
            }
        })
    }

    return (  
        <header className="table-header">
            <div className="input-group">
                <input name="productName" type="text" 
                onChange={handleInputChange} 
                disabled={mode === 0 || mode === 3} 
                placeholder="상품명" value={inputData.productName}
                autoFocus />
                <input name="size" type="text" 
                onChange={handleInputChange} 
                disabled={mode === 0 || mode === 3} 
                value={inputData.size} placeholder="사이즈" />
                <input name="color" type="text" 
                onChange={handleInputChange} 
                disabled={mode === 0 || mode === 3} 
                value={inputData.color} placeholder="색상" />
                <input name="price" type="text" 
                onChange={handleInputChange} 
                disabled={mode === 0 || mode === 3} 
                value={inputData.price} placeholder="가격" />
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