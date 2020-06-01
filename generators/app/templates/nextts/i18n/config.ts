import NextI18Next from 'next-i18next';

const isServer = typeof window === 'undefined';

export const defaultLang = 'en';

export const allLangs = ['en'];

export const langSelectors = ['English'];

export const namespaces = ['common'];

export const localePaths = {};

export const nextI18Instance = new NextI18Next({
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

export const { appWithTranslation, useTranslation, Link } = nextI18Instance;
