import styled from 'styled-components';

interface ISpecialRowStyled {
  selected: boolean;
}

const backdropColor = '#e2e8f0';

const Container = styled.section`
  width: 260px;
  border: 1px ${backdropColor} solid;
  color: black;
  max-height: 273px;
`;

const TableHead = styled.div`
  padding: 12px;
  text-align: center;
  border-bottom: 1px solid ${backdropColor};
  background-color: #f7f7f7;
  h4 {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

const SpecialRow = styled.div<ISpecialRowStyled>`
  padding: 8px;
  justify-content: left;
  pointer-events: ${({ selected }) => (selected ? 'none' : 'all')};
  display: flex;
  transition: ${({ theme }) => theme.transitionTime};
  background-color: ${({ theme, selected }) => (selected ? theme.colors.primary : null)};
  border-top: 1px solid ${backdropColor};
  &:hover {
    background-color: ${({ selected }) => (!selected ? '#f7f7f7' : null)};
    cursor: ${({ selected }) => (!selected ? 'pointer' : 'auto')};
  }
  &:first-child {
    border: none;
  }
`;

const NoResults = styled.div`
  padding: 8px;
  span {
    opacity: 0.6;
  }
`;

const SearchWrapper = styled.div`
  padding: 8px;
  border-bottom: 1px solid ${backdropColor};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 164px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const AutocompleteWrapper = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
  input {
    padding: 8px;
    width: 90%;
  }
`;

const Loading = styled.span`
  display: flex;
  border-top: 1px solid ${backdropColor};
  padding: 8px;
`;

export {
  Container,
  NoResults,
  SpecialRow,
  TableHead,
  SearchWrapper,
  ContentWrapper,
  AutocompleteWrapper,
  Loading,
};
