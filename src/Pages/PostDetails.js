import { useParams } from "react-router";
import { Link } from "react-router-dom";
import CommentCard from "../Components/CommentCard";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./PostDetails.css";

export default function ProductDetails() {
  const allPost = useSelector((state) => state.postsState.posts);

  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState([]);

  const selectedPost = allPost?.filter((post) => post.id == postId);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPostDetails(data);
      });
  }, [postId]);

  return (
    <section className="post_details">
      {selectedPost?.length > 0 ? (
        <article className="feed-details">
          <h3>Title : {selectedPost[0].title}</h3>
          <p> Desc : {selectedPost[0].body} </p>
        </article>
      ) : (
        <p>loading...</p>
      )}
      <div className="comment-section">
        {postDetails?.map((comment) => (
          <CommentCard key={comment.id} {...comment} />
        ))}
      </div>
      <Link to="/">Go Back</Link>
    </section>
  );
}
