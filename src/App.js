import "./App.css";
import SocialIcons from "./components/Icons/SocialIcons";
import Layout from "./components/Layout/Layout";
import LinkList from "./components/Links/LinkList";

function App() {
  return (
    <Layout>
      <LinkList />
      <SocialIcons />
    </Layout>
  );
}

export default App;
