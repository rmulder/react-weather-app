import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Landing from './pages/Landing';
import GlobalStyle from './theme/globalStyles';
import DefaultStyle from './theme/defaultStyles';

render(
  <ThemeProvider theme={DefaultStyle}>
    <GlobalStyle />
    <Landing />
  </ThemeProvider>,
  document.getElementById('root')
);
