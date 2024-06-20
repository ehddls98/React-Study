import { useRef, useState } from "react";
import "./App.css";

{/*
    1. 입력후에 엔터를 입력하면 다음 input 으로 포커스 이동
    2. name 필드에서 엔터를 입력하면 배열에 user 객체 추가 그리고 input value들 초기화
    3. tbody -> tr 묶음을 userList에서 map 함수를 사용하여 렌더링
    4. table 디자인 -> border: 1px solid #dbdbdb;
    5. 삭제 버튼 추가
    */}

function App() {

    const emptyUser = {
        username: "",
        password: "",
        name: ""
    }

    const inputRef = {
        username: useRef(),
        password: useRef(),
        name: useRef()
    }

    const [inputData, setInputData] = useState({...emptyUser});

    const handleInputChange = (e) => {
        setInputData(inputData => {
            return {
                ...inputData,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleInputKeyDown = (e) => {
    if(e.keyCode === "Enter") { 
        const {username, password, name} = inputRef;
        switch(e.target.name) {
            case "username":
                password.current.focus();
                break;
            case "password":
                name.current.focus();
                break;
            case "name":
                username.current.focus();
                break;
            default:
                break;
        }
    }
}
    
    
    

    return <>
    <input name="username" placeholder="username"
    onChange={handleInputChange}
    onKeyDown={handleInputKeyDown}
    value={inputData.username}
    ref={inputRef.username}/>
    <input name="password"placeholder="password" 
    onChange={handleInputChange}
    onKeyDown={handleInputKeyDown}
    value={inputData.password}
    ref={inputRef.password}/>
    <input name="name"placeholder="name" 
    onChange={handleInputChange}
    onKeyDown={handleInputKeyDown}
    value={inputData.name}
    ref={inputRef.name}/>

    <table>
        <thead>
            <tr>
                <th>index</th>
                <th>username</th>
                <th>password</th>
                <th>name</th>
            </tr>
        </thead>
        <tbody>
            
        </tbody>
    </table>
</>
}

export default App;