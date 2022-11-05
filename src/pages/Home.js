import { Fragment } from "react";
import MainHeader from "../components/Layout/MainHeader/MainHeader";
import SocialIcons from "../components/Icons/SocialIcons";
import LinkList from "../components/Links/LinkList";

const Home = () => {
  return (
    <Fragment>
      <MainHeader />
      <LinkList />
      <SocialIcons />
    </Fragment>
  );
};

export default Home;
