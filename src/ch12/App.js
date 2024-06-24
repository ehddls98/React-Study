import { useEffect, useState } from "react";

function App() {
    const [ number, setNumber ] = useState(0);
    const [ number2, setNumber2 ] = useState(0);
    const [ number3, setNumber3 ] = useState(0);

    //useEffect(함수, [디펜던시]), number가 변경될 때만 useEffect가 실행된다, 첫번째 렌더링에서는 무조건 실행
    useEffect(() => {
        //마운트 지점
        console.log(number2);
        setNumber3(number * 10);
        return () => {
            //언마운트 지점
        }
    }, [number, number2]); //디펜던시가 비어있으면 컴포넌트가 처음 렌더링될 때만 실행된다.

    const handleButtonClick = (e) => {
        setNumber(a => a + 1);
    }

    const handleButtonClick2 = (e) => {
        setNumber2(b => b + 10);
    }

    return (
        <>
            <h1>{number}</h1>
            <h1>{number2}</h1>
            <h1>{number3}</h1>
            <button onClick={handleButtonClick}>num1 증가</button>
            <button onClick={handleButtonClick2}>num2 증가</button>
        </>
    );
}

export default App;