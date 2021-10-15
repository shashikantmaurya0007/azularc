import "./PostCard.css";
import { Link } from "react-router-dom";

const PostCard = ({ id, title, body }) => {
  return (
    <article className="post-card">
      <h4>
        <span>Title :</span> {title}{" "}
      </h4>
      <p>
        <span>Desc :</span> {body.substr(0, 80)}..
        <Link to={`/post_details/${id}`}>Read More..</Link>
      </p>
    </article>
  );
};

export default PostCard;
