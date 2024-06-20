function Button({ text, setNumber }) {

    const handleClick = () => {
        if(text === "증가") {
            setNumber(number => number + 1); 
            //setNumber 함수 자체가 자기 자신의 값을 받아서 처리하는 함수이기 때문에 
            //Button 컴포넌트에서 props로 number를 받아올 필요가 없다. 
            //이런 방식으로 값을 set 하는 것을 최적화라고 한다. 
        }
        if(text === "감소") {
            setNumber(number => number - 1);
        }
    }

    return <button onClick={ handleClick }>{ text }</button>
}

export default Button;