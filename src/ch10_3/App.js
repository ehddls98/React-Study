import { useRef, useState } from "react";
import "./App.css";
import Swal from "sweetalert2";

{/*
    1. 입력후에 엔터를 입력하면 다음 input 으로 포커스 이동
    2. name 필드에서 엔터를 입력하면 배열에 user 객체 추가 그리고 input value들 초기화
    3. tbody -> tr 묶음을 userList에서 map 함수를 사용하여 렌더링
    4. table 디자인 -> border: 1px solid #dbdbdb;
    5. 삭제 버튼 추가
*/}

function App() {
    const test = {
        a: "aaa",
        b: "bbb"
    }
    console.log(test.a);
    console.log(test["a"]); //객체의 키값을 변수로 사용하고 싶을 때는 대괄호를 사용하고 ""로 감싸줘야 한다.

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

    const [ userList, setUserList ] = useState([]);
    const [ inputData, setInputData ] = useState({...emptyUser});

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
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
                    setUserList(userList => [ ...userList, inputData ]);
                    setInputData({...emptyUser});
                    break;
                default: 
            }
        }
    }

    const handleInputChange = (e) => {
        setInputData(inputData => {
            return {
                ...inputData,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleEditClick = (key, index) => {
        Swal.fire({
            title: `${key} edit`,
            input: "text",
            inputValue: userList[index][key], //객체의 키값을 변수로 사용하고 싶을 때는 대괄호를 사용하고 ""로 감싸줘야 한다.
            showCancelButton: true,
            cancelButtonText: "취소",
            confirmButtonText: "확인"
        }).then(result => {
            if(result.isConfirmed) {
                //확인 버튼을 눌렀을 때
                setUserList(userList => [ ...userList.map((user, i) => { 
                    //기존 userList를 스프레드로 복사해오고 map 함수를 사용
                    if(i === index) {
                        //userList의 객체 중 현재 수정하려는 객체와 index가 같다면
                        return {
                            ...user,
                            //index가 같은 객체를 스프레드로 복사해오고
                            [key]: result.value
                            //<td>의 key에 해당하는 값을 새로 입력한 내용으로 수정
                        }
                    }
                    return user;
                }) ]);
            }
        });
    }

    const handleDeleteClick = (e) => {
        //sweet alert2
        Swal.fire({
            title: "사용자 삭제",
            text: "해당 사용자를 삭제하시겠습니까?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "삭제",
            confirmButtonColor: "red",
            cancelButtonText: "취소",
        }).then(result =>{
            if(result.isConfirmed) {
                setUserList(userList => [ ...userList.filter((user, index) => index !== parseInt(e.target.value)) ])
            }
        });
        // if(window.confirm("해당 사용자를 삭제하시겠습니다?")) { //window. 은 자바스크립트에선 생략 가능하나 JSX에서는 생략 불가능
        //     setUserList(userList => [ ...userList.filter((user, index) => index !== parseInt(e.target.value)) ])
        // }
    }

    return <>
    <input name="username" placeholder="사용자명" 
    onKeyDown={handleInputKeyDown} 
    onChange={handleInputChange} 
    value={inputData.username}
    ref={inputRef.username} />
    <input name="password" placeholder="비밀번호" 
    onKeyDown={handleInputKeyDown} 
    onChange={handleInputChange} 
    value={inputData.password}
    ref={inputRef.password} />
    <input name="name" placeholder="이름" 
    onKeyDown={handleInputKeyDown} 
    onChange={handleInputChange} 
    value={inputData.name}
    ref={inputRef.name} />

    <table>
        <thead>
            <tr>
                <th>index</th>
                <th>username</th>
                <th>password</th>
                <th>name</th>
                <th>edit</th>
                <th>delete</th>
            </tr>
        </thead>
        <tbody>
            {
                userList.map(({ username, password, name }, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td onClick={() => handleEditClick("username", index)}>{username}</td>
                            <td onClick={() => handleEditClick("password", index)}>{password}</td>
                            <td onClick={() => handleEditClick("name", index)}>{name}</td>
                            <td>
                                <button value={index}>edit</button>
                            </td>
                            <td>
                                <button onClick={handleDeleteClick} value={index}>delete</button>
                            </td>
                        </tr>
                    );
                })
            }
        </tbody>
    </table>
</>
}

export default App;