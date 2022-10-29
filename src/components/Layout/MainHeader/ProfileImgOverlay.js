import "./ProfileImgOverlay.css";

import CameraIcon from "../../Icons/CameraIcon";

const ProfileImgOverlay = () => {
  return (
    <div className="profile__img--overlay">
      <div className="overlay" />
      <CameraIcon className="camera-icon" />
    </div>
  );
};

export default ProfileImgOverlay;
