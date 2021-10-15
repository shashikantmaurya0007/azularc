import PostListConstants from "../Constants/PostListConstant";

const initialstate = {
  posts: [],
  loading: false,
  error: ""
};

const postsReducer = (state = initialstate, action) => {
  switch (action.type) {
    case PostListConstants.POSTLIST_LOADING: {
      return {
        ...state,
        loading: true,
        error: ""
      };
    }
    case PostListConstants.POSTLIST_SUCCESS: {
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    }
    case PostListConstants.POSTLIST_FAIL: {
      return {
        ...state,
        error: "error in laoding ...."
      };
    }
    default: {
      return {
        state
      };
    }
  }
};

export default postsReducer;
