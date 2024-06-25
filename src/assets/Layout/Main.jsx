import { Outlet } from "react-router-dom";
import SideBare from "../Shared/SideBare";
import TopBar from "../Shared/TopBar";

const Main = () => {
    return (
        <div>
            <TopBar></TopBar>
            <SideBare></SideBare>
            
        </div>
    );
};

export default Main;