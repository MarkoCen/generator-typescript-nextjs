import React, { FC } from 'react';
import { useTranslation } from '~/i18n/config';
import GreetingsButton from '~/client/components/common/greetings-button';

interface IProps {}

const IndexPage: FC<IProps> = () => {
  const { t } = useTranslation(['common']);

  return (
    <>
      <header>{t('common:title')}</header>
      <GreetingsButton text={'Click Me!'} />
    </>
  );
};

// @ts-ignore
IndexPage.getInitialProps = async () => ({ namespacesRequired: ['common'] });

export default IndexPage;
