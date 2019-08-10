import React from 'react';
import { withRouter } from 'react-router-dom';

import { PostsList } from '../sw-components';

const PostsPage = ({ history }) => {
  return (
    <PostsList onPostSelected={postId => history.push(`/posts/${postId}`)} />
  );
};

export default withRouter(PostsPage);
