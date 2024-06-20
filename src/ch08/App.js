import { useRef } from "react";

function App() {
    const inputRef = {
        a: useRef(),
        b: useRef(),
        c: useRef()
    }
    // const aRef = useRef(); //use로 시작하는 함수(hook 함수)는 다른 함수안에 들어갈 수 없다. 
    // const bRef = useRef();
    // const cRef = useRef();

    // console.log(aRef);
    // console.log(bRef);
    // console.log(cRef);
    
    const handleKeyDown = (e) => {

        if(e.keycode === 13) {
            switch(e.target.name) {
                case "a":
                    inputRef.b.current.focus();
                    break;
                case "b":
                    inputRef.c.current.focus();
                    break;
                case "c":
                    inputRef.a.current.focus();
                    break;
                default:
            }
        }
    }

    return <>
        <input name="a" onKeyDown={handleKeyDown} ref={inputRef.a}/>
        <input name="b" onKeyDown={handleKeyDown} ref={inputRef.b}/>
        <input name="c" onKeyDown={handleKeyDown} ref={inputRef.c}/>
    </>
}

export default App;