import { useState } from "react";

function App() {
    const [ inputValue, setInputValue ] = useState("");
    const [ names, setNames ] = useState([]);
    
    //map 함수를 사용하여 아래와 같이 배열을 렌더링할 수 있습니다.
    const liList = [
        <li>{"test1"}</li>,
        <li>{"test2"}</li>,
        <li>{"test3"}</li>,
        <li>{"test4"}</li>
    ];

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            setNames(names => [...names, inputValue]);
            setInputValue("");
        }
    }

    return <>
    <input 
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        value={inputValue} />
    <ul>
        {/* { liList } */}
        {/*map 함수를 사용할 때는 key 값을 반드시 지정해야 합니다.*/}
        { names.map((name, index) => <li key={index}>{name}</li>) }

        <li></li>
    </ul>
    </>
}

export default App;