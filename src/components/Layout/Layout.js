import MainHeader from "./MainHeader/MainHeader";
import "./Layout.css";

const Layout = (props) => {
  return (
    <div className="layout">
      <MainHeader />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
