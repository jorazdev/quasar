
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import fr from './locales/fr.json'

export const loadLocalMessages = () => {
    const locales = [{en: en}, {fr: fr}]
    const messages = {}

    locales.forEach(locale => {
        const key = Object.keys(locale)
        messages[key] = locale[key]
    })
    
    return messages
}

const datetimeFormats = {
    'fr-FR': {
        mini: {
            month: 'numeric',
            day: 'numeric'
        },
        short: {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        },
        default: {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        }
    },
    'en-US': {
        mini: {
            month: 'numeric',
            day: 'numeric'
        },
        short: {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        },
        default: {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        }
    }
}
export const i18nOption = {
    locale: 'fr',
    fallbackLocale: 'fr',
    messages: loadLocalMessages(),
    legacy: false,
    datetimeFormats
}

export default createI18n(i18nOption)