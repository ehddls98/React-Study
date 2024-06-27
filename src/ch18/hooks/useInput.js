import { useState } from "react";

export function useInput(defaultValue, length) { //Hook 함수: 함수명 앞에 use를 붙여줌, 함수 안에 hook을 사용하면 hook 함수라고 부름
const [ value, setValue ] = useState(defaultValue);

    const onChange = (e) => {
        if(e.target.value.length < length + 1) {
            setValue(e.target.value);
        }
    }

    return {
        value, //= "value" : value 
        setValue, //= "setValue" : setValue
        onChange
    }
}