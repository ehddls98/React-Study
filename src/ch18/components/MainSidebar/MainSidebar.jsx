/** @jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import MainSideBarHeader from "./MainSideBarHeader/MainSideBarHeader";
import MainSidebarBody from "./MainSidebarBody/MainSidebarBody";
import * as s from "./style";
import { mainSideBarShowAtom } from "../../atoms/mainSidebarShowAtom";

function MainSidebar() {
  const [mainSidebarShow] = useRecoilState(mainSideBarShowAtom);
  return (
      <div css={s.layout(mainSidebarShow)}>
          <MainSideBarHeader />
          <MainSidebarBody />
      </div>
  );
}

export default MainSidebar;