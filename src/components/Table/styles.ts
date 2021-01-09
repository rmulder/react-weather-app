import styled from 'styled-components';

interface ISpecialRowStyled {
  selected: boolean;
}

const Container = styled.table`
  margin-top: 0.75rem;
  width: 260px;
  border: 1px #e2e8f0 solid;
  color: black;
  border-collapse: collapse;
  thead {
    tr {
      th {
        border-bottom: 1px solid #e2e8f0;
        padding: 12px;
      }
      td {
        border-bottom: 1px solid #e2e8f0;
        padding: 12px;
      }
    }
  }
  tbody {
    display: flex;
    flex-direction: column;
    max-height: 123px;
    overflow-y: auto;
  }
`;

const SpecialRow = styled.tr<ISpecialRowStyled>`
  td {
    padding: 8px !important;
    justify-content: left !important;
    pointer-events: ${({ selected }) => (selected ? 'none' : 'all')};
    display: flex;
    transition: ${({ theme }) => theme.transitionTime};
    background-color: ${({ theme, selected }) => (selected ? theme.colors.primary : null)};
    &:hover {
      background-color: ${({ selected }) => (!selected ? '#f7f7f7' : null)};
      cursor: ${({ selected }) => (!selected ? 'pointer' : 'auto')};
    }
  }
  border-bottom: 1px solid #e2e8f0;
  &:last-child {
    border: none;
  }
`;

const NoResultsRow = styled.tr`
  td {
    opacity: 0.6;
  }
`;

export { Container, NoResultsRow, SpecialRow };
