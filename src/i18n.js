
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

export const i18nOption = {
    locale: 'fr',
    fallbackLocale: 'fr',
    messages: loadLocalMessages(),
    legacy: false
}

export default createI18n(i18nOption)