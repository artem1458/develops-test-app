import React from 'react';

import {
  ContainerBorder,
  TextSecondary,
  TextRegular,
} from '../styled-components';

const CommentItem = props => {
  const {
    comment: { body, id },
  } = props;
  return (
    <ContainerBorder>
      <TextSecondary>Comment ID: {id}</TextSecondary>
      <TextRegular>{body}</TextRegular>
    </ContainerBorder>
  );
};

export default CommentItem;
