import { useState } from "react";

function App() {
    
    const emptyUser = {
        username: "",
        password: "",
        email: ""
    }

    const [ user, setUser ] = useState({...emptyUser});
    const [ inputData, setInputData ] = useState({...emptyUser});
    
    const handleInputChange = (e) => {
        setInputData(inputData => {
            return {
                ...inputData,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleOkClick = (e) => {
        setUser(inputData);
    }

    return <>
    {/*리액트에서 input의 value는 무조건 써야한다. 버추얼돔과 리얼돔의 동기화가 이뤄지기 위해서 value는 상태로 작성하여 계속 업데이트가 되도록 해야 한다*/}  
        <input name="username" placeholder="사용자 이름" onChange={handleInputChange} value={inputData.username}/> 
        <input name="password" placeholder="비밀번호" onChange={handleInputChange} value={inputData.password}/>
        <input name="email" placeholder="이메일" onChange={handleInputChange} value={inputData.email}/>
        <button onClick={handleOkClick}>확인</button>
        <ul>
            <li>사용자이름: {user.username}</li>
            <li>비밀번호: {user.password}</li>
            <li>이메일: {user.email}</li>
        </ul>
    </>
}

export default App;