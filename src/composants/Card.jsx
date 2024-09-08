import { Link } from "react-router-dom";

const Card = ({ key, id, cover, title }) => {
  return (
    <div className="thumb" key={key}>
      <Link to={`/detail/${id}`}>
        <img src={cover} alt={title} />
        <h3>{title}</h3>
      </Link>
    </div>
  );
};

export default Card;