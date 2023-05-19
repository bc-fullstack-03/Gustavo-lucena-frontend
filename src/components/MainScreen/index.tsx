import { ReactNode } from "react";
import Menu from "../Menu";

interface MainScreenProps {
    children: ReactNode;
}

function MainScreen(props: MainScreenProps){

    return(
        <div className="w-screen h-screen flex">
            <Menu />
            {props.children}
        </div>
    );
}

export default MainScreen;