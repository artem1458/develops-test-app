const initialState = {
  postsList: [],
  selectedPost: 0,
  postDetails: {},
  userCommentValue: '',
  isLoading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING_TRUE':
      return { ...state, isLoading: true };

    case 'SET_LOADING_FALSE':
      return { ...state, isLoading: false };

    case 'PUSH_NEW_POSTS':
      return { ...state, postsList: [...state.postsList, ...action.payload] };

    case 'SET_SELECTED_POST':
      return { ...state, selectedPost: action.payload };

    case 'SET_POST_DETAILS':
      return { ...state, postDetails: action.payload };

    case 'CLEAR_POST_DETAILS':
      return { ...state, postDetails: {} };

    case 'SET_USER_COMMENT_VALUE':
      return { ...state, userCommentValue: action.payload };

    case 'CLEAR_USER_COMMENT_VALUE':
      return { ...state, userCommentValue: '' };

    case 'ADD_NEW_COMMENT':
      return {
        ...state,
        postDetails: { ...state.postDetails, comments: action.payload },
      };

    default:
      return state;
  }
};

export default reducer;
