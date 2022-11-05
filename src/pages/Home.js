import { Fragment } from "react";
import MainHeader from "../components/Layout/MainHeader/MainHeader";
import SocialIcons from "../components/Icons/SocialIcons";
import LinkList from "../components/Links/LinkList";

const Home = (props) => {
  return (
    <Fragment>
      <MainHeader displayMessage={props.triggerDisplay} />
      <LinkList />
      <SocialIcons />
    </Fragment>
  );
};

export default Home;
