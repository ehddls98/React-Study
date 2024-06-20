import { useState } from "react";

function App() {
    const [ num, setNum ] = useState(0); //setNum 함수는 num의 값을 비동기 처리 방식으로 변경하여 재렌더링을 일으킴 
    let num2 = 0; //num의 상태변화로 인해 계속 0으로 초기화 됨
    
    const [ a, b ] = [ 10, 20 ]; //useState(0) <=> a = 10 같은 의미이다. 밑에서 a++를 해도 a의 값은 변하지 않는다. 
                                    // setNum 함수를 사용하여 값을 변경해야만 재렌더링이 일어남.
    const [ c, d ] = [ 10, 20 ];

    a++;

    const handleClick = (e) => {
        const value = parseInt(e.target.value);
        setNum(num + value);
        //setNum(n => n + value); //함수가 매개변수로 전달되면 기존의 값과 새로운 값을 매개변수로 받아서 값을 변경하고 상태를 변경하게됨
        num2 += value; //setNum 함수를 사용하지 않으면 handleClick 함수 내에서만 값이 변화하여 재렌더링이 일어나지 않음
        console.log(num2);
    }

    console.log(num);
    console.log(num2);

    return <>
        <h1>번호: {num}</h1>
        <h1>번호2: {num2}</h1>
        <button onClick={handleClick} value={-10}>-10</button>
        <button onClick={handleClick} value={+10}>+10</button>
        <button onClick={handleClick} value={-100}>-100</button>
        <button onClick={handleClick} value={+100}>+100</button>
    </>
}

export default App;