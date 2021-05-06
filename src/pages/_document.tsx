import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';
import theme from '../utils/theme';

const CustomDocument = () => {
  return (
    <Html lang="zh-TW">
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

CustomDocument.renderDocument = Document.renderDocument;

// 覆寫舊 Server-side 渲染方法
CustomDocument.getInitialProps = async (ctx: DocumentContext) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    });
  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement()
    ]
  };
};

export default CustomDocument;
