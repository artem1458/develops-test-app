import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions';

import { Button, Textarea, ContainerFlexCol } from '../styled-components';

const onSubmit = (e, postComment) => {
  e.preventDefault();
  postComment();
};

const CommentBox = ({ userCommentValue, commentChange, postComment }) => {
  return (
    <ContainerFlexCol>
      <Textarea
        placeholder="Add your comment"
        type="text"
        value={userCommentValue}
        onChange={({ target }) => commentChange(target.value)}
      />
      <Button
        type="submit"
        onClick={e => onSubmit(e, postComment)}
        value="Add comment"
      >
        Add a comment
      </Button>
    </ContainerFlexCol>
  );
};

const mapStateToProps = state => ({
  userCommentValue: state.userCommentValue,
});

export default connect(
  mapStateToProps,
  actions,
)(CommentBox);
