import "./LinkList.css";
import LinkItem from "./LinkItem";

const refId = "Immanuel";
const linkData = [
  {
    id: "twitter",
    url: "https://twitter.com/Emmanue99070721?t=jnTQ3f2dQBw1YW-075e0wg&s=03s",
    title: "Twitter Link",
  },
  { id: "btn__zuri", url: "https://training.zuri.team/", title: "Zuri Team" },
  {
    id: "books",
    url: "http://books.zuri.team",
    title: "Zuri Books",
    subtext:
      "From Zero to Hero books on coding and design. Get yourself one and turn yourself into a coding/design champion!!!",
  },
  {
    id: "book__python",
    url: `https://books.zuri.team/python-for-beginners?ref_id=${refId}`,
    title: "Python Books",
    subtext:
      "Click on the link and make your python coding skills as sleek and smooth as a python!!",
  },
  {
    id: "pitch",
    url: "https://background.zuri.team",
    title: "Background Check for Coders",
    subtext: "Hello world",
  },
  {
    id: "book__design",
    url: "https://books.zuri.team/design-rules",
    title: "Design Books",
    subtext:
      "Are you a frontend developer? A UI/UX designer? Or designer of any sort? Click on the link and get the STANDARD design rules and become a pro, bro.",
  },
];

const LinkList = () => {
  return (
    <div className="link-section">
      <ul className="link-list">
        {linkData.map((item) => (
          <LinkItem
            key={item.id}
            id={item.id}
            url={item.url}
            title={item.title}
            subtext={item.subtext ?? ""}
          />
        ))}
      </ul>
    </div>
  );
};

export default LinkList;
