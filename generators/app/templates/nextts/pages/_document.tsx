/*  eslint-disable react/jsx-props-no-spreading, react/no-danger */
import React from 'react';
import Document, { Main, NextScript, Head, Html } from 'next/document';
import { Helmet, HelmetData } from 'react-helmet';

export default class extends Document<{ helmet: HelmetData }> {
  static async getInitialProps(...args) {
    // @ts-ignore
    const documentProps = await super.getInitialProps(...args);
    return { ...documentProps, helmet: Helmet.renderStatic() };
  }

  get helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent();
  }

  get helmetBodyAttrComponents() {
    return this.props.helmet.bodyAttributes.toComponent();
  }

  get helmetHeadComponents() {
    return Object.keys(this.props.helmet)
      .filter((el) => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map((el) => this.props.helmet[el].toComponent());
  }

  render() {
    return (
      <Html {...this.helmetHtmlAttrComponents}>
        <Head>{this.helmetHeadComponents}</Head>
        <body {...this.helmetBodyAttrComponents}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
