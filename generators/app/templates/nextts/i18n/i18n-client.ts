import * as langDetector from 'i18next-browser-languagedetector';
import * as XHR from 'i18next-xhr-backend';
import NextI18Next, { InitConfig } from 'next-i18next';
import { WithTranslation } from 'react-i18next';
import { clientConfigs, languages, otherLanguages, serverConfigs } from './config';

const isNode = typeof window === 'undefined';

// tslint:disable-next-line:interface-name
export interface I18nProps extends WithTranslation {
    initialI18nStore?: any;
    initialLanguage?: languages;
}

let nextI18Next: NextI18Next;
const use: any[] = [];
let config: InitConfig;

if (isNode) {
    config = {
        ...serverConfigs,
        serverLanguageDetection: true,
        defaultLanguage: languages.EN,
        otherLanguages,
    };
} else {
    use.push(XHR);
    use.push(langDetector);
    config = {
        ...clientConfigs,
        browserLanguageDetection: true,
        defaultLanguage: languages.EN,
        otherLanguages,
        use,
    };
}

nextI18Next = new NextI18Next(config);

export { nextI18Next };

export const connectI18n = nextI18Next.withTranslation;
