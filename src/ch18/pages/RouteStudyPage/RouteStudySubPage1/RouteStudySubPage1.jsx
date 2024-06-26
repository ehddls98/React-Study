import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import MainContainer from '../../../components/MainContainer/MainContainer';

function RouteStudySubPage1(props) {
    return (
        <MainContainer>
            <div>
                <ul>
                    <Link to={"/routestudy/page1/name"}><li>이름</li></Link>
                    <Link to={"/routestudy/page1/age"}><li>나이</li></Link>
                    <Link to={"/routestudy/page1/address"}><li>주소</li></Link>
                </ul>
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