/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Route, Routes } from "react-router-dom";
import RouteStudyPage from "../../pages/RouteStudyPage/RouteStudyPage";
import HomePage from "../../pages/HomePage/HomePage";
import ParamsStudyPage from "../../pages/ParamsStudyPage/ParamsStudyPage";
import SearchParamsStudy from "../../pages/SearchParamsStudy/SearchParamsStudy";
import CustomHookPage from "../../pages/CustomHookPage/CustomHookPage";
import MemoizationPage from "../../pages/MemoizationPage/MemoizationPage";



function MainBody(props) {
    return (
        <div css={s.layout}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/routestudy/*" element={<RouteStudyPage />} />
                <Route path="/params/:name/*" element={<ParamsStudyPage />} />
                {/* URL 파라미터는 경로에 : 을 사용하여 설정한다. 만약 파라미터가 여러개라면
                /:name/:age 와 같은 형태로 설정할 수 있다.  */}
                <Route path="/searchparams" element={<SearchParamsStudy />} />
                <Route path="/customhook/:id" element={<CustomHookPage />} />
                <Route path="/memoization" element={<MemoizationPage />} />
            </Routes>
        </div>
    );
}

export default MainBody;