import { Global } from "@emotion/react";
import MainHeader from "./components/MainHeader/MainHeader";
import MainLayout from "./components/MainLayout/MainLayout";
import MainSidebar from "./components/MainSidebar/MainSidebar";
import { reset } from "./styles/global";

function App(props) {
    return (
        <>
            <Global styles={reset}/>
            <MainSidebar>

            </MainSidebar>
            <MainLayout>
                <MainHeader />

            </MainLayout>
        </>
    );
}

export default App;