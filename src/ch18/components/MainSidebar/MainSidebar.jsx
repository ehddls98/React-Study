/** @jsxImportSource @emotion/react */
import MainSideBarHeader from "./MainSideBarHeader/MainSideBarHeader";
import MainSidebarBody from "./MainSidebarBody/MainSidebarBody";
import * as s from "./style";

function MainSidebar({ isMainSidebarShow, setMainSidebarShow }) {
  return (
      <div css={s.layout(isMainSidebarShow)}>
          <MainSideBarHeader setMainSidebarShow={setMainSidebarShow}/>
          <MainSidebarBody />
      </div>
  );
}

export default MainSidebar;