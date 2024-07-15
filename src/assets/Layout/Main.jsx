import { useState } from "react";
import SideBare from "../Shared/SideBare";
import TopBar from "../Shared/TopBar";

const Main = () => {
    const [clickedLink, setClickedLink] = useState("");

  const handleLinkClick = (linkName) => {
    setClickedLink(linkName);
  };
    return (
        <div>
            <TopBar 
            handleLinkClick={handleLinkClick}
            clickedLink={clickedLink}
            ></TopBar>
            <SideBare
             handleLinkClick={handleLinkClick}
             clickedLink={clickedLink}
            ></SideBare>
            
        </div>
    );
};

export default Main;