import withRedux, { AppProps as ReduxAppProps, NextJSAppContext } from 'next-redux-wrapper';
import { AppProps } from 'next/app';
import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { appWithTranslation } from '~/i18n/config';
import { createStore } from '~/store';

import '~/client/styles/globals.scss';

const App: FC<AppProps & ReduxAppProps> = ({ store, Component, pageProps }) => {
  return (
    <Provider store={store}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Provider>
  );
};

// @ts-ignore
App.getInitialProps = async ({ Component, ctx }: NextJSAppContext) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  return { pageProps };
};

export default withRedux(createStore)(appWithTranslation(App));
