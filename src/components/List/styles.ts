import styled from 'styled-components';

const Container = styled.div`
  color: black;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  border: 1px solid #e2e8f0;
  div {
    padding: 8px 16px;
    margin: 5px;
    border-radius: 26px;
    background-color: #f7f7f7;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      cursor: pointer;
    }
    span {
      font-size: 14px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
`;

export { Container };
