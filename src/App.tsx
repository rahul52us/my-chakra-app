import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { observer } from "mobx-react-lite";
import RouterIndex from "./config/RoutesIndex";
import Notification from "./config/component/Notification/Notification";
import enTranslation from './config/locales/en.json'
import hiTranslation from './config/locales/hi.json'

const App = observer(() => {

  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: enTranslation },
      hi: {translation: hiTranslation}
    },
    lng: 'en', // Set the default language here
    fallbackLng: 'en', // Fallback language if the selected language is not available
    interpolation: {
      escapeValue: false,
    },
  });

  return (
    <>
      <Notification />
      <RouterIndex />
    </>
  );
});

export default App;