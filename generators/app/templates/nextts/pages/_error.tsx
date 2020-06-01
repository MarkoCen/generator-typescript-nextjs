import React, { FC } from 'react';

interface IProps {
  statusCode: number;
}

const ErrorPage: FC<IProps> = ({ statusCode }) => {
  return (
    <div>
      <p>
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    </div>
  );
};

// @ts-ignore
ErrorPage.getInitialProps = ({ res, err }) => {
  // eslint-disable-next-line no-nested-ternary
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode, namespacesRequired: ['common'] };
};

export default ErrorPage;
