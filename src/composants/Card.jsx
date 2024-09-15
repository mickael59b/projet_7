import { Link } from "react-router-dom";

const Card = ({ id, cover, title }) => {
  return (
    <div className="thumb">
      <Link to={`/detail/${id}`}>
        <img src={cover} alt={title} />
        <h3>{title}</h3>
      </Link>
    </div>
  );
};

export default Card;