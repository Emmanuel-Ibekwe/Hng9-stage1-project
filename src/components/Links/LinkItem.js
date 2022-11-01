import "./LinkItem.css";

const LinkItem = (props) => {
  return (
    <li>
      <a href={props.url} id={props.id} target="__blank" rel="noreferrer">
        {props.title}
        <p className="subtext">{props.subtext}</p>
      </a>
    </li>
  );
};

export default LinkItem;
