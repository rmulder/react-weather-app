import styled from 'styled-components';

interface IWrapperStyled {
  active?: boolean;
}

const Wrapper = styled.button<IWrapperStyled>`
  background-color: ${({ theme, active }) =>
    !active ? theme.colors.primary : theme.colors.primary};
  opacity: ${({ active }) => (active ? 1 : 0.6)};
  padding: 8px 16px;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  line-height: 1;
  color: white;
  border: none;
  outline: none;
  cursor: ${({ active }) => (!active ? 'pointer' : 'auto')};
  border-radius: 24px;
  &:hover {
    opacity: ${({ active }) => (!active ? '0.8' : null)};
  }
  transition: ${({ theme }) => theme.transitionTime};
  pointer-events: ${({ active }) => (active ? 'none' : 'all')};
`;

const IconWrapper = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 5px;
  font-size: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    opacity: 0.8;
    background: ${({ theme }) => theme.colors.primary};
  }
  transition: ${({ theme }) => theme.transitionTime};
`;

export { Wrapper, IconWrapper };
