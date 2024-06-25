import { useState } from "react";

function App() {
    const [ imgSrc, setImgSrc ] = useState("");

    const handleLoadImgClick = () => { //<input type="file" multiple={true}/>
        const fileElement = document.createElement('input'); 
        fileElement.setAttribute("type", "file");
        fileElement.setAttribute("multiple", true); //여러 개의 파일을 선택할 수 있게 한다. multiple은 default로 false이다. 
        fileElement.click(); 
        
        fileElement.onchange = (e) => {
            const file = e.target.files[0];

            const fileReader = new FileReader(); //readAsDataURL을 사용하기 위해 FileReader 객체를 생성한다. file 객체만으로는 이미지 파일의 내용을 읽을 수 없다.

            fileReader.onload = (e) => { //onload 이벤트는 readAsDataURL 메서드가 성공적으로 실행되었을 때 발생한다.
                setImgSrc(e.target.result); // imgSrc에 이미지 파일의 정보를 저장한다. 
            }

            fileReader.readAsDataURL(file); //이미지 파일의 정보를 file 객체에서 읽어온다.
        }
    }

    return (
        <>
            <button onClick={handleLoadImgClick}>이미지 불러오기</button>
            {/* <input type="file" multiple={true} /> */}
            <div>
                <img src={imgSrc} alt="" />
            </div>
        </>
    );
}

export default App;