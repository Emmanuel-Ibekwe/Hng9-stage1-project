import "./LinkList.css";
import LinkItem from "./LinkItem";

const linkData = [
  {
    id: "twitter",
    url: "https://twitter.com/Emmanue99070721?t=jnTQ3f2dQBw1YW-075e0wg&s=03s",
    title: "Twitter Link",
  },
  { id: "btn__zuri", url: "https://training.zuri.team/", title: "Zuri Team" },
  { id: "books", url: "http://books.zuri.team", title: "Zuri Books" },
  {
    id: "book__python",
    url: "https://books.zuri.team/",
    title: "Python Books",
  },
  {
    id: "pitch",
    url: "https://background.zuri.team",
    title: "Background Check for Coders",
  },
  {
    id: "book__design",
    url: "https://books.zuri.team/design-rules",
    title: "Design Books",
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
          />
        ))}
      </ul>
    </div>
  );
};

export default LinkList;
