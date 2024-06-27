import React, { useCallback, useEffect, useMemo, useState } from 'react';

function MemoizationPage(props) {
    const [ value, setValue ] = useState(0);
    const [ value2, setValue2 ] = useState(0);
    const [ num, setNum ] = useState(0);

    // const a = num + 10; -> value가 바뀔 때마다 불필요하게 계속 실행된다. useMemo를 사용하여 이를 방지하였다.
    const a = useMemo(() => {
        console.log(num);
        return num + 10;
    }, [num]); // [num]이 바뀔 때만 실행, []이면 한번만 실행, [] 자체가 없으면 계속 실행

    const b = num + 20;

    // let c = null;        -> useEffect를 사용하면 c의 값이 계속 초기화된다. 
    // useEffect(() => {
    //     c = num + 30;
    // }, [num]); -> 마운트 시점에 값을 재정의한다.(return이 일어난 뒤에)

    const handleChange = useCallback((e) => { //useCallback을 사용하면 함수가 계속 재정의되는 것을 방지할 수 있다.
        setValue(e.target.value);   //보통 useCallback 함수는 짧은 코드보다 길이가 긴 코드에 사용하여 메모리 성능을 향상시킨다.
    }, []);

    const handleChange2 = (e) => {
        setValue2(e.target.value);
    }

    const handleClick = useCallback(() => {
        setNum(parseInt(value));
    }, [value]);

    return (
        <div>
            <h1>{a}</h1>
            <input type="text" onChange={handleChange} />
            <input type="text" onChange={handleChange2} />
            <button onClick={handleClick}>확인</button>
        </div>
    );
}

export default MemoizationPage;