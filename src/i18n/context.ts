import { createContext, useMemo, useState } from "react";

export const I18nContext = createContext({});

export function I18nProvider({children}) {
  
  const [lang, setLang] = useState('ru');

  const i18n = useMemo(() => ({
    lang,
    setLang,
    t: (text, number) => translate(lang, text, number)
  }), [lang]);

  return (
    <I18nContext.Provider value={i18n}>
      {children}
    </I18nContext.Provider>
  );
}