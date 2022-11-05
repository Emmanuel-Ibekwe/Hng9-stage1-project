import "./Layout.css";
import Footer from "./Footer/Footer";

const Layout = (props) => {
  return (
    <div className="layout">
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
