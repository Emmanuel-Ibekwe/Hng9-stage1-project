import { useState } from "react";
import "./MainHeader.css";
import profileImg from "../../../assets/profile__img.jpeg";
import ProfileImgOverlay from "./ProfileImgOverlay";
import MoreIcon from "../../Icons/MoreIcon";
import ShareIcon from "../../Icons/ShareIcon";

const MainHeader = () => {
  const [imgOverlay, setImgOverlay] = useState(false);

  const mouseEnterHandler = () => {
    setImgOverlay(true);
  };

  const mouseLeaveHandler = () => {
    setImgOverlay(false);
  };

  return (
    <header>
      <div
        className="profile__img--div"
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <img id="profile__img" src={profileImg} />
        {imgOverlay && <ProfileImgOverlay />}
      </div>
      <div className="profile__details">
        <p id="twitter">Emmanuel</p>
        <p id="slack">Immanuel1️⃣</p>
      </div>
      <button className="share-icon__btn">
        <ShareIcon className={"share-icon"} />
        <span className="share-icon__tooltip">Share Link</span>
      </button>
      <button className="more-icon__btn">
        <MoreIcon className={"more-icon"} />
      </button>
    </header>
  );
};

export default MainHeader;
