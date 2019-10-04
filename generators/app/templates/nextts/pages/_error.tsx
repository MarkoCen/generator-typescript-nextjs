import React from 'react';

interface IProps {
    statusCode: number;
}

class ErrorPage extends React.Component<IProps> {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode };
    }

    render() {
        return (
            <div>
                <p>
                    {this.props.statusCode
                        ? `An error ${this.props.statusCode} occurred on server`
                        : 'An error occurred on client'}
                </p>
            </div>
        );
    }
}

export default ErrorPage;
