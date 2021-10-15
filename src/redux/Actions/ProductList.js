import PostListConstants from "../Constants/PostListConstant";

const fetchPosts = () => {
  return {
    type: PostListConstants.POSTLIST_LOADING
  };
};

const fetchPostsSuccess = (posts) => {
  return {
    type: PostListConstants.POSTLIST_SUCCESS,
    payload: posts
  };
};
const fetchPostsFail = () => {
  return {
    type: PostListConstants.POSTLIST_FAIL
  };
};

const GetPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPosts);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      dispatch(fetchPostsSuccess(data));
    } catch (err) {
      dispatch(fetchPostsFail);
    }
  };
};

export default GetPosts;
