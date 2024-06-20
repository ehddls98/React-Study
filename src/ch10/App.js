import { useRef, useState } from "react";

function App() {

    const table = {
        border: "1px solid #dbdbdb"
    }

    {/*
    1. 입력후에 엔터를 입력하면 다음 input 으로 포커스 이동
    2. name 필드에서 엔터를 입력하면 배열에 user 객체 추가 그리고 input value들 초기화
    3. tbody -> tr 묶음을 userList에서 map 함수를 사용하여 렌더링
    4. table 디자인 -> border: 1px solid #dbdbdb;
    */}

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
    
    const [user, setUser] = useState({...emptyUser});
    const [userList, setUserList] = useState([]);

    const handleInputChange = (e) => {
        setUser(user => {
            return {
                ...emptyUser,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleKeyDown = (e) => {
        if(e.keyCode === 13) {
            if(e.target.name === "username") {
                inputRef.password.current.focus();
            } 
            if (e.target.name === "password") {
                inputRef.name.current.focus();
            } 
            if (e.target.name === "name") {
                setUserList(user => [...userList, user ]);
                setInputData({});
            }

        }
    }
            
    
   return <>
        <input name="username" placeholder="사용자명" onChange={handleInputChange} onKeyDown={handleKeyDown} ref={inputRef.username} value={inputData.username}/>
        <input name="password" placeholder="비밀번호" onChange={handleInputChange} onKeyDown={handleKeyDown} ref={inputRef.password} value={inputData.password}/>
        <input name="name" placeholder="이름" onChange={handleInputChange} onKeyDown={handleKeyDown} ref={inputRef.name} value={inputData.name}/>
        <table style={table}>
            <thead style={table}>
                <tr style={table}>
                    <th>index</th>
                    <th>username</th>
                    <th>password</th>
                    <th>name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>

                </tr>
            </tbody>
        </table>
    </>
}

export default App;