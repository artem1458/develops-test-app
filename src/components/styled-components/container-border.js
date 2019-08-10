import styled from 'styled-components';

const ContainerBorder = styled.div`
  box-sizing: border-box;
  border: 2px solid #78c2ad;
  border-radius: 3px;
  margin-bottom: 10px;
  padding: 5px;
  min-height: 100px;
  transition-duration: 0.2s;
  ${props =>
    props.interactive
      ? '&:hover{ border: 6px solid #78c2ad; cursor: pointer }'
      : null};
`;

export default ContainerBorder;
