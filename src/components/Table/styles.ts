import styled from 'styled-components';

interface ISpecialRowStyled {
  selected: boolean;
}

const Container = styled.div`
  width: 260px;
  border: 1px #e2e8f0 solid;
  color: black;
`;

const TableHead = styled.div`
  padding: 12px;
  text-align: center;
  border-bottom: 1px solid #e2e8f0;
`;

const SpecialRow = styled.div<ISpecialRowStyled>`
  padding: 8px;
  justify-content: left;
  pointer-events: ${({ selected }) => (selected ? 'none' : 'all')};
  display: flex;
  transition: ${({ theme }) => theme.transitionTime};
  background-color: ${({ theme, selected }) => (selected ? theme.colors.primary : null)};

  border-top: 1px solid #e2e8f0;
  &:hover {
    background-color: ${({ selected }) => (!selected ? '#f7f7f7' : null)};
    cursor: ${({ selected }) => (!selected ? 'pointer' : 'auto')};
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
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 205px;
  overflow-y: auto;
`;

const AutocompleteWrapper = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
  input {
    padding: 8px;
    font-family: 'Poppins', sans-serif;
    width: 90%;
  }
`;

const Loading = styled.span`
  display: flex;
  border-top: 1px solid #e2e8f0;
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
