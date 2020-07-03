import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: "Nanum Gothic";
    font-style: normal;
    font-weight: normal;
    src: url("/fonts/NanumGothic-Regular.woff2") format("woff2"),
      url("/fonts/NanumGothic-Regular.woff") format("woff");
  }

  html, body, #__next, #__next > * {
    height: 100%;
  }

  body {
    font-family: "Nanum Gothic", sans-serif;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6, p, cite {
    color: white;
    font-weight: normal;
  }

  svg {
    fill: white;
  }
`;

const theme = {
};

const MyApp = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
