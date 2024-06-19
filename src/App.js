  // 컴포넌트 -> 함수 -> HTML 태그를 리턴하는 함수 
  // 컴포넌트 파일은 대문자로 시작해야 함.
  // 컴포넌트 함수에서 export를 해줘야 다른 곳에서 호출가능
  // 컴포넌트 함수를 사용하기 위해서는 import를 해줘야 함

  // JSX
  //   1. 태그를 열었으면 닫아야한다. <a></a>, <a />
  //   2. 여러 태그를 리턴해야하는 경우에는 하나로 묶어야 한다.
  //   3. JSX 안에 값 또는 변수를 사용하려면 {}표현식을 사용해야 한다. 
  //   4. JSX 내부의 주석은 {/* 이런 형태로*/} 작성한다.


import { Children } from "react";
import "./App.css"
import Box from "./components/Box";
import CustomInput from "./components/CustomInput";
import Hello from "./components/Hello";


function App() {
  const name = "김동인";
  const fontColorRed = {
    color: "red"
  }

  const age = <h2>{31}</h2>

  return <>
          <div>
            <Hello></Hello>
          </div>
          <div>
            <Hello></Hello>
          </div>
          <h1 style={fontColorRed} className={"fs-20 itelic"}>{name}</h1>
          <CustomInput ph={"이름"} disabled={true} value={"김동인"}/>
          <CustomInput ph={"나이"} disabled={false} />
          <CustomInput ph={"연락처"} disabled={true} />
          <Box name={"김동인"} isShow={true}>
           <h2>{31}</h2>
           <h2>{31}</h2>
           <h2>{31}</h2>
          </Box>
  </>    
}

CustomInput.defaultProps = {
  ph: "test",
  disabled: false,
  value: "빈값"
}
export default App;
