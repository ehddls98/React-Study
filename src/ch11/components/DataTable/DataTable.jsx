import { useEffect, useState } from "react";
import DataTableBody from "../DataTableBody/DataTableBody";
import DataTableHeader from "../DataTableHeader/DataTableHeader";
import "./style.css";
import { SAMPLE_PRODUCTS } from "../../constants/sampleProducts";
import Swal from "sweetalert2";

function DataTable() {
    const [ isLoad, setLoad ] = useState(false);
    const [ mode, setMode ] = useState(0); //0 = 조회, 1 = 추가, 2 = 수정, 3 = 삭제
    const [ products, setProducts ] = useState([ ...SAMPLE_PRODUCTS ]);
    const [ isDeleting, setDeleting ] = useState(false);
    const [ editProductId, setEditProductId ] = useState(0);

    
    useEffect(() => {
        const lsProducts = localStorage.getItem("products");
        setProducts(!lsProducts ? [] : JSON.parse(lsProducts));
        setLoad(true);
    }, []); 
    //디펜던시가 비어있으므로 컴포넌트가 처음 렌더링될 때 한번만 실행된다.
    //페이지 최초 로드 시 localStorage에 저장된 products 배열을 가져와서 products 상태로 설정한다.
    
    useEffect(() => {
            localStorage.setItem("products", JSON.stringify(products));
        }, [products]); //products의 상태가 변할때 마다 products 배열을 localStorage에 저장하여 상태를 동기화시킨다.
    
    return ( 
        <div className="table-main-container">
            <DataTableHeader 
                mode={mode} 
                setMode={setMode} 
                products={products}
                setProducts={setProducts} 
                setDeleting={setDeleting} 
                editProductId={editProductId}
            />
            <DataTableBody 
                mode={mode} 
                setMode={setMode} 
                products={products} 
                setProducts={setProducts} 
                isDeleting={isDeleting} 
                setDeleting={setDeleting} 
                setEditProductId={setEditProductId}
            />
        </div>
     );
}

export default DataTable;