import Document, { Html, Head, Main, NextScript } from 'next/document';
import { createGlobalStyle, ServerStyleSheet } from 'styled-components';

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

  h1, h2, h3, h4, h5, h6, p {
    color: white;
    font-weight: normal;
  }

  svg {
    fill: white;
  }
`;

export default class MyDocument extends Document {
  static getInitialProps = async (ctx) => {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => (
        originalRenderPage({
          enhanceApp: (App) => (props) => (
            sheet.collectStyles(
              <>
                <GlobalStyle />
                <App {...props} />
              </>
            )
          ),
        })
      );

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  };

  render = () => {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preload" href="/fonts/NanumGothic-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
          <link rel="preload" href="/fonts/NanumGothic-Regular.woff" as="font" type="font/woff" crossorigin="anonymous" />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`} />
          <script dangerouslySetInnerHTML={{
            __html:
              `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', '${process.env.GA_TRACKING_ID}');`
          }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  };
};
