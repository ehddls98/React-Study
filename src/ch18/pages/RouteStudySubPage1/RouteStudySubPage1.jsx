import React from 'react';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import MainContainer from '../../components/MainContainer/MainContainer';


function RouteStudySubPage1(props) {
    const navigate = useNavigate(); //Link 컴포넌트를 사용하지 않고 다른 페이지로 이동을 해야 하는 상황에 사용하는 Hook 입니다.
    const location = useLocation();

    console.log(location.pathname);
    console.log(location.pathname.lastIndexOf("/"));
    const index = location.pathname.lastIndexOf("/");
    console.log(location.pathname.substring(index + 1));

    const handleAgeClick = () => {
        navigate("/routestudy/page1/age", {replace: true});
        //winddow.location.href = "https://naver.com" => replace: false 뒤로가기 히스토리를 남긴다
        //winddow.location.replace("https://naver.com") => replace: true 뒤로가기 히스토리를 남기지 않음, 뒤로가기 시 최초로 replace를 사용한 페이지로 이동
    }
    return (
        <MainContainer>
            <div>
                <ul>
                    <Link to={"/routestudy/page1/name"}><li>이름</li></Link>
                    <Link to={"/routestudy/page1/age"}><li>나이</li></Link>
                    <Link to={"/routestudy/page1/address"}><li>주소</li></Link>
                </ul>
                <button onClick={handleAgeClick}>나이</button>
                <div>
                    <Routes>
                        <Route path="name" element={<h1>김동인</h1>}/>
                        <Route path="age" element={<h1>27</h1>}/>
                        <Route path="address" element={<h1>부산 진구</h1>}/>
                    </Routes>
                </div>
            </div>
        </MainContainer>
    );
}

export default RouteStudySubPage1;