import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps = async (ctx) => {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => (
        originalRenderPage({
          enhanceApp: (App) => (props) => (
            sheet.collectStyles(<App {...props} />)
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
