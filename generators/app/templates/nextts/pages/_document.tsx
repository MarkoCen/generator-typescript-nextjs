import Document, { Head, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';
import { ServerStyleSheet } from 'styled-components';

interface IDocProps {
    styleTags: Array<ReactElement<{}>>;
}

export default class MyDocument extends Document<IDocProps> {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }

    render() {
        return (
            <html>
                <Head>
                    <title><%= app.name %>@<%= app.version %></title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
