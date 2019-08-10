import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import CommentItem from '../../comment-item';
import CommentBox from '../../comment-box';

import {
  Title,
  ContainerBorder,
  TextSecondary,
  TextRegular,
  MainContainer,
} from '../../styled-components';

import './post-details.css';

import * as actions from '../../../redux/actions';

class PostDetails extends Component {
  componentDidMount() {
    const { postId } = this.props;

    const { selectPost, getPostDetails } = this.props;

    selectPost(postId);
    getPostDetails();
  }

  componentWillUnmount() {
    const { clearSelectedPost } = this.props;
    clearSelectedPost();
  }

  render() {
    const {
      postDetails: { title, creator, body, comments = [], date },
      isLoading,
    } = this.props;

    if (isLoading) {
      return <MainContainer>Loading...</MainContainer>;
    }

    const creatorHeading = creator ? (
      <TextRegular>{creator}</TextRegular>
    ) : null;

    const createdDate = date ? (
      <TextSecondary>Date: {date}</TextSecondary>
    ) : null;

    const commentBody = body ? <TextRegular>{body}</TextRegular> : null;

    const commentList =
      comments.length > 0 ? (
        comments
          .map(comment => <CommentItem key={comment.id} comment={comment} />)
          .reverse()
      ) : (
        <span>No comments for this post</span>
      );

    return (
      <MainContainer>
        <Link to="/" className="link-to-main">{`<=`}</Link>
        <Title>{title}</Title>
        {creatorHeading}
        {createdDate}
        {commentBody}
        <CommentBox />
        <ContainerBorder>{commentList}</ContainerBorder>
      </MainContainer>
    );
  }
}

const mapStateToProps = state => ({
  postDetails: state.postDetails,
  isLoading: state.isLoading,
});

export default connect(
  mapStateToProps,
  actions,
)(PostDetails);
