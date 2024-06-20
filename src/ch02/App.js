import { useState } from "react";

function App() {
    const [ number, setNumber ] = useState(100); 
    // useState(초기값) -> [초기값, function(){}]
    const [ name, setName ] = useState(null);

    const [ test, testPrint ] = 
     [ 100, function (){console.log("test함수 호출")} ];

    testPrint();

    console.log(number);

    if(number === 100) {
        setTimeout(() => setNumber(200), 2000); // 2초 후에 setNumber(200) 호출
        // 상태 변화 > 상태 변화 때 함수 재호출(재렌더링)
        //재렌더링 시점에는 상태 초기화는 일어나지 않는다.
    }

    if(number === 200) {
        setNumber(300); //useState의 setter는 비동기
        console.log(number); //200 출력
    }

    if(name === null) {
        setName("김동인"); //비동기 처리
    }
    console.log(name); //null 출력
    
    return <>
        <h1>number 상태 확인</h1> 
        <h2>{number}</h2>
    </>
}

export default App;