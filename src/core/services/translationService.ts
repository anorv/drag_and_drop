import { createI18n } from 'vue-i18n'
const localeKey = 'lt'
const messages = {
  lt: {
    NOTIFICATIONS: {
      TO_DO_LIST: 'Darbų sąrašas',
      PICK_UP_STATUS: 'Pasirinkite statusą',
      OPENED: 'Atidarytos užduotys',
      IN_PROGRESS: 'Vykdomos užduotis',
      DONE: 'Baigtos užduotys',
      CLOSED: 'Uždarytos užduotys',
    },
    TASK: {
      ADD_TASK: 'Sukurti naują užduotį',
      TITLE: 'Pavadinimas',
      DESCRIPTION: 'Aprašymas',
      STATUS: 'Statusas',
      SELECT_STATUS: 'Pasirinkite statusą',
    },
    STATUS: {
      OPENED: 'Atidarytas',
      IN_PROGRESS: 'Vykdomas',
      DONE: 'Baigtas',
      CLOSED: 'Uždarytas',
    },
    BUTTON: {
      CLOSE: 'Uždaryti',
      CREATE: 'Sukurti',
    },
  },
}

export const i18n = createI18n({
  locale: localeKey,
  fallbackLocale: 'en',
  legacy: false,
  globalInjection: true,
  messages,
  warnHtmlMessage: false, //To disable vue-i18n warning when using v-html for translation. Reference: https://stackoverflow.com/questions/69795845/vue-3-eslint-warning-intlify-detected-html and https://stackoverflow.com/questions/58211803/v-html-only-use-for-text-is-it-safe
})
