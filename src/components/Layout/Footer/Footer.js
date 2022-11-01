import "./Footer.css";
import IngressiveLogo from "../../../assets/ingressive-logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="first-column">
        Zuri<span className="dot">.</span>Internship
      </div>
      <div className="middle-column">
        <small>HNG Internship 9 Frontend Task</small>
      </div>
      <div className="ingressive__logo--div">
        <img
          className="ingressive__logo"
          alt="ingressive__logo"
          src={IngressiveLogo}
        />
      </div>
    </div>
  );
};

export default Footer;
