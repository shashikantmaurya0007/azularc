import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GetPosts from "../redux/Actions/ProductList";
import PostCard from "../Components/PostCard";
import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.postsState.loading);
  const posts = useSelector((state) => state.postsState.posts);
  const error = useSelector((state) => state.postsState.error);

  useEffect(() => {
    dispatch(GetPosts());
  }, [dispatch]);

  // console.log(posts);

  if (error) {
    return (
      <div>
        <p> Error :( </p>
      </div>
    );
  } else {
    return (
      <section className="">
        <h1> Posts </h1>
        {loading === true ? (
          <h1>Loading...</h1>
        ) : (
          <div className="posts_section">
            {posts?.map((item) => (
              <PostCard key={item.id} {...item} />
            ))}
          </div>
        )}
      </section>
    );
  }
}
