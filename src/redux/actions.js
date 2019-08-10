export const getAllPosts = () => (dispatch, getState, api) => {
  api
    .getAllPosts()
    .then(res => {
      dispatch({ type: 'SET_LOADING_FALSE' });
      dispatch({ type: 'PUSH_NEW_POSTS', payload: res });
    })
    .catch(e => {
      console.error(e);
    });
};

export const selectPost = postId => dispatch => {
  dispatch({ type: 'SET_SELECTED_POST', payload: postId });
};

export const getPostDetails = () => (dispatch, getState, api) => {
  dispatch({ type: 'SET_LOADING_TRUE' });

  const { selectedPost } = getState();

  api
    .getDetailsOfPost(selectedPost)
    .then(res => {
      dispatch({ type: 'SET_POST_DETAILS', payload: res });
      dispatch({ type: 'SET_LOADING_FALSE' });
    })
    .catch(e => {
      console.error(e);
    });
};

export const clearSelectedPost = () => dispatch => {
  dispatch({ type: 'SET_SELECTED_POST', payload: 0 });
  dispatch({ type: 'CLEAR_POST_DETAILS' });
};

export const postComment = () => (dispatch, getState, api) => {
  const { selectedPost, userCommentValue } = getState();

  if (userCommentValue.length === 0) {
    return;
  }

  api
    .postComment({
      postId: selectedPost,
      body: userCommentValue,
    })
    .then(res => {
      const {
        postDetails: { comments },
      } = getState();
      dispatch({ type: 'CLEAR_USER_COMMENT_VALUE' });
      dispatch({ type: 'ADD_NEW_COMMENT', payload: [...comments, res] });
    })
    .catch(e => {
      console.error(e);
    });
};

export const commentChange = inputValue => dispatch => {
  dispatch({ type: 'SET_USER_COMMENT_VALUE', payload: inputValue });
};
