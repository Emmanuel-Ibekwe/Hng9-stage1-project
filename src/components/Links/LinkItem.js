import "./LinkItem.css";

const LinkItem = (props) => {
  return (
    <li>
      <a href={props.url} id={props.id} target="__blank">
        {props.title}
      </a>
    </li>
  );
};

export default LinkItem;
