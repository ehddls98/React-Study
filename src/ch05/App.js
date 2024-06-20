import { useState } from "react";

function App() {
    // inputValue
    const [ inputValue, setInputValue ] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleResetClick = () => {
        setInputValue("");
    }

    return <>
        <h3>값: {inputValue}</h3>
        <button onClick={handleResetClick}>초기화</button>
        <input type="text" onChange={handleInputChange} value={inputValue}/>
        {/*value는 입력이 일어나고 재렌더링이 일어나서 화면(입력란)에 나타나게 되는것이다.*/} 
    </>
}

export default App;