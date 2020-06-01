import NextI18Next from 'next-i18next';

const isServer = typeof window === 'undefined';

export const defaultLang = 'en';

export const allLangs = ['en'];

export const langSelectors = ['English'];

export const namespaces = ['common'];

export const localePaths = {};

const NextI18NextInstance = new NextI18Next({
  debug: false,
  browserLanguageDetection: false,
  serverLanguageDetection: false,
  defaultLanguage: defaultLang,
  fallbackLng: defaultLang,
  otherLanguages: allLangs.filter((l) => l !== defaultLang),
  whitelist: allLangs,
  ns: namespaces,
  localePath: 'public/locales',
  localeSubpaths: localePaths,
  preload: isServer ? allLangs : false,
  defaultNS: 'common',
  load: 'currentOnly',
  missingKeyHandler: false,
});

export default NextI18NextInstance;

export const { appWithTranslation, useTranslation, Link } = NextI18NextInstance;
