import { Global } from "@emotion/react";
import MainHeader from "./components/MainHeader/MainHeader";
import MainLayout from "./components/MainLayout/MainLayout";
import MainSidebar from "./components/MainSidebar/MainSidebar";
import { reset } from "./styles/global";
import { useState } from "react";
import MainBody from "./components/MainBody/MainBody";

function App(props) {
    const [ isMainSidebarShow, setMainSidebarShow ] = useState(false);

    return (
        <>
            <Global styles={reset}/>
            <MainLayout>
                <MainHeader setMainSidebarShow={setMainSidebarShow}/>
                <MainBody />
                <MainSidebar 
                    isMainSidebarShow={isMainSidebarShow}
                    setMainSidebarShow={setMainSidebarShow}
                />
            </MainLayout>
        </>
    );
}

export default App;