import { ThemeProvider } from 'styled-components';

const theme = {
};

const MyApp = (props) => {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
