import { Fragment, useEffect } from "react";
import MainHeader from "../components/Layout/MainHeader/MainHeader";
import SocialIcons from "../components/Icons/SocialIcons";
import LinkList from "../components/Links/LinkList";

const Home = () => {
  useEffect(() => {
    // scrolls to top once page loads
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Fragment>
      <MainHeader />
      <LinkList />
      <SocialIcons />
    </Fragment>
  );
};

export default Home;
