import { Link } from "react-router-dom";

const RelativeLinkItem = (props) => {
  return (
    <li>
      <Link className="link" to={props.url} id={props.id}>
        {props.title}
      </Link>
    </li>
  );
};

export default RelativeLinkItem;
