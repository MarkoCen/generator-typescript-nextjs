import withRedux from 'next-redux-wrapper';
import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { nextI18Next } from '../i18n/i18n-client';
import { createStore } from '../store';

require('../client/sass/globals.scss');

class NextJSTypeScriptApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return { pageProps };
    }

    render() {
        const { Component, pageProps, store } = this.props;

        return (
            <Container>
                <Provider store={store}>
                    <>
                        <Component {...pageProps} />
                    </>
                </Provider>
            </Container>
        );
    }
}

// @ts-ignore
export default withRedux(createStore)(nextI18Next.appWithTranslation(NextJSTypeScriptApp));
