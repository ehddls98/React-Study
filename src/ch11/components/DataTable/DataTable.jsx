import { useState } from "react";
import DataTableBody from "../DataTableBody/DataTableBody";
import DataTableHeader from "../DataTableHeader/DataTableHeader";
import "./style.css";
import { SAMPLE_PRODUCTS } from "../../constants/sampleProducts";

const newProduct = {
    id: 0,
    productName: "",
    size: "",
    color: "",
    price: ""
}

function DataTable() {
    const [ mode, setMode ] = useState(0); //0 = 조회, 1 = 추가, 2 = 수정, 3 = 삭제
    const [ products, setProducts ] = useState([]);
    const [inputData, setInputData] = useState({...newProduct});
    
    const addProducts = () => {
    const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
    const newProductWithId = { ...inputData, id: newId };
    setProducts([...products, newProductWithId]);
    setInputData({ ...newProduct, id: newId + 1 });
};
    
    return ( 
        <div className="table-main-container">
            <DataTableHeader mode={mode} setMode={setMode} 
            products={products} inputData={inputData} 
            setInputData={setInputData} addProducts={addProducts}/>
            <DataTableBody mode={mode} products={products} />
        </div>
     );
}

export default DataTable;