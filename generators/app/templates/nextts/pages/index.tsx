import React, { Component } from 'react';
import { connectI18n, I18nProps } from '../i18n/i18n-client';
import GreetingsButton from '../client/components/common/GreetingsButton';

interface IProps extends I18nProps {}

interface IStates {}

class IndexPage extends Component<IProps, IStates> {
    static async getInitialProps() {
        return {
            namespacesRequired: ['common'],
        };
    }

    state = {};

    render() {
        const { t } = this.props;

        return (
            <>
                <header>{t('common:title')}</header>
                <GreetingsButton text={'Click Me!'} />
            </>
        );
    }
}

export default connectI18n(['common'])(IndexPage);
