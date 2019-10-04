import { InitOptions } from 'i18next';

export enum languages {
    EN = 'en',
    ZH = 'zh',
}

const allLanguages = [languages.EN, languages.ZH];
export const otherLanguages = allLanguages.filter((lang) => [languages.EN].indexOf(lang) < 0);

export const defaultLanguage = languages.EN;

export const namespaces = ['common'];

export const defaultNS = 'common';

export const baseConfigs: InitOptions = {
    debug: false,
    load: 'languageOnly',
    fallbackLng: defaultLanguage,
    ns: namespaces,
    defaultNS,
    saveMissing: false,
    whitelist: allLanguages,
};

export const clientConfigs: InitOptions = {
    ...baseConfigs,
    detection: {
        caches: ['localStorage', 'cookie'],
        order: ['localStorage', 'cookie'],
        lookupCookie: '<%= app.name %>-i18n',
        lookupLocalStorage: '<%= app.name %>.i18n',
    },
    interpolation: {
        escapeValue: false,
    },
    debug: process.env.NODE_ENV !== 'production',
};

export const serverConfigs: InitOptions = {
    ...baseConfigs,
    preload: allLanguages,
    detection: {
        order: ['cookie'], // all
        caches: ['cookie'], // default false
        lookupPath: 'lng',
        lookupFromPathIndex: 0,
        lookupCookie: '<%= app.name %>-i18n',
    },
};
