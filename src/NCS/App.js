import "./App.css";

function App(props) {
    return (
        <div className="container">
                <h1>회원정보 수정</h1>
                <div className="input-container">
                    <p className="input-tag">이름:</p>
                    <input type="text" className="input"/>
                </div>
                <div className="input-container">
                    <p className="input-tag">이메일:</p>
                    <input type="text" className="input"/>
                </div>
                <div className="input-container">
                    <p className="input-tag">비밀번호:</p>
                    <input type="text" className="input"/>
                </div>
                    <button>저장</button>
        </div>
    );
}

export default App;