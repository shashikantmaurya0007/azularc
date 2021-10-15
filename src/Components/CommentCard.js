import "./CommentCard.css";

const CommentCard = ({ name, body }) => {
  return (
    <article className="comment-card">
      <p>Name : {name}</p>
      <p>Comment : {body}</p>
    </article>
  );
};

export default CommentCard;
