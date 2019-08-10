import React from 'react';

import {
  Title,
  ContainerBorder,
  TextSecondary,
  TextRegular,
} from '../styled-components';

const PostItem = ({ id, title, body, date, onPostSelected }) => {
  return (
    <ContainerBorder onClick={() => onPostSelected(id)} interactive>
      {date ? <TextSecondary>Date: {date}</TextSecondary> : null}
      <Title>{title}</Title>
      <TextRegular>{body}</TextRegular>
    </ContainerBorder>
  );
};

export default PostItem;
