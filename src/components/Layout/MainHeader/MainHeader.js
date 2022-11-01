import { useCallback, useEffect, useReducer, useState } from "react";
import "./MainHeader.css";
import profileImg from "../../../assets/profile__img.jpeg";
import ProfileImgOverlay from "./ProfileImgOverlay";
import MoreIcon from "../../Icons/MoreIcon";
import ShareIcon from "../../Icons/ShareIcon";

const linkCopiedReducer = (state, action) => {
  if (action.type === "btn__share clicked") {
    return {
      linkCopied: true,
      shareBtnClicks: state.shareBtnClicks + 1,
    };
  }

  if (action.type === "reset tooltip") {
    return {
      linkCopied: false,
      shareBtnClicks: state.shareBtnClicks,
    };
  }
};

const MainHeader = () => {
  const [imgOverlay, setImgOverlay] = useState(false);
  const [displayShareBtn, setdisplayShareBtn] = useState(false);

  // This usereducer and other related functions adds a copy-to-clipboard functionality to the btn__share buttton
  const [linkCopiedState, dispatchAction] = useReducer(linkCopiedReducer, {
    linkCopied: false,
    shareBtnClicks: 0,
  });

  useEffect(() => {
    if (linkCopiedState.shareBtnClicks > 0) {
      setTimeout(() => {
        dispatchAction({ type: "reset tooltip" });
      }, 500);
    }
  }, [linkCopiedState.shareBtnClicks]);

  const mouseEnterHandler = () => {
    setImgOverlay(true);
  };

  const mouseLeaveHandler = () => {
    setImgOverlay(false);
  };

  const displayShareBtnHandler = () => {
    setdisplayShareBtn(true);
  };

  const shareBtnOnClickHandler = () => {
    navigator.clipboard.writeText(window.location.href);
    dispatchAction({ type: "btn__share clicked" });
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
      <button
        className={`btn btn__share ${displayShareBtn ? "reposition" : ""}`}
        onClick={shareBtnOnClickHandler}
      >
        <ShareIcon className={"share-icon"} />
        <span className="share-icon__tooltip">
          {linkCopiedState.linkCopied ? "Link copied!" : "Share Link"}
        </span>
      </button>
      <button
        className={`btn btn__more ${!displayShareBtn ? "" : "hidden"}`}
        onClick={displayShareBtnHandler}
      >
        <MoreIcon className={"more-icon"} />
      </button>
    </header>
  );
};

export default MainHeader;
