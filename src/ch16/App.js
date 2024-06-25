import { useState } from "react";
import "./App.css";
import Swal from "sweetalert2";

function App() {

    const emptyUser = {
        name: "",
        email: ""
    }

    const [ imgSrc, setImgSrc ] = useState("");
    const [ inputData, setInputData ] = useState({...emptyUser});

    const handleLoadImgClick = () => {
        Swal.fire({
            title: "프로필 이미지 변경",
            text: "프로필 이미지를 변경하시겠습니까?",
            showCancelButton: true,
            confirmButtonText: "예",
            cancelButtonText: "아니오"
        }).then(result => {
            if(result.isConfirmed) {
                const fileElement = document.createElement('input'); 
                fileElement.setAttribute("type", "file");
                fileElement.click();
                fileElement.onchange = (e) => {
                    const file = e.target.files[0];
                    const fileReader = new FileReader(); 
                    fileReader.onload = (e) => { 
                        setImgSrc(e.target.result); 
                    }
                    fileReader.readAsDataURL(file); 
                }
            }
        });
    }

    const handleInputChange = (e) => {
        setInputData(inputData => ({ 
                ...inputData,
                [e.target.name]: e.target.value
        }));
    }

    const handleSubmitClick = () => {
        // localStorage에서 "userList"를 가져오거나, 없으면 빈 배열을 사용
        const storedUserList = JSON.parse(localStorage.getItem("userList") || "[]");
         // 새 사용자 정보를 목록에 추가
        const newUser = { ...inputData, imgSrc: imgSrc };
        const newUserList = [...storedUserList, newUser];
        // 수정된 목록을 localStorage에 저장
        localStorage.setItem("userList", JSON.stringify(newUserList));
        setInputData({ ...emptyUser });
        setImgSrc("");
            Swal.fire({
                title: "사용자 정보 저장 완료",
                icon: "success",
                position: "center",
                showConfirmButton: false,
                timer: 1500
            });
    };

   
    return (
        <>
            <div className="profile-window">
                <h1 className="title">프로필</h1>
                    <div className="img-frame" onClick={handleLoadImgClick}>
                        <img src={imgSrc} alt="" className="img"/>
                    </div>
                        <input 
                            type="text"
                            name="name" 
                            className="input" 
                            placeholder="이름"
                            onChange={handleInputChange}
                            value={inputData.name}
                        />
                        <input 
                            type="text"
                            name="email" 
                            className="input" 
                            placeholder="이메일"
                            onChange={handleInputChange} 
                            value={inputData.email}
                        />
                        <button className="saveButton" onClick={handleSubmitClick}>저장</button>
            </div>
        </>
      );
}

export default App;