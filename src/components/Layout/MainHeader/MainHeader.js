import "./MainHeader.css";
import profileImg from "../../../assets/profile__img.jpeg";
import ProfileImgOverlay from "./ProfileImgOverlay";

const MainHeader = () => {
  return (
    <header>
      <div className="profile__img--div">
        <img id="profile__img" src={profileImg} />
      </div>
      <div className="profile__details">
        <p id="twitter">Emmanuel</p>
        <p id="slack">Immanuel1️⃣</p>
      </div>
    </header>
  );
};

export default MainHeader;
