import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../redux/actions';

import PostItem from '../../post-item';

import { MainContainer } from '../../styled-components';

class PostsList extends Component {
  componentDidMount() {
    const { postsList } = this.props;
    const { getAllPosts } = this.props;

    if (postsList.length === 0) {
      getAllPosts();
    }
  }

  render() {
    const { postsList, isLoading } = this.props;
    const { onPostSelected } = this.props;

    if (isLoading) {
      return <MainContainer>Loading...</MainContainer>;
    }

    const items = postsList.map(({ id, title, body = '', date = 0 }) => {
      const itemBody = body.length > 40 ? `${body.slice(0, 40)}...` : body;

      return (
        <PostItem
          key={id}
          id={id}
          title={title}
          body={itemBody}
          date={date}
          onPostSelected={onPostSelected}
        />
      );
    });

    return <MainContainer>{items}</MainContainer>;
  }
}

const mapStateToProps = state => ({
  postsList: state.postsList,
  isLoading: state.isLoading,
});

export default connect(
  mapStateToProps,
  actions,
)(PostsList);
