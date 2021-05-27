import React from "react";
import "./App.css";
import Layout from "./Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { IntlProvider } from "react-intl";
import esTranslations from "../locales/es.json";
import enTranslations from "../locales/en.json";

function App() {
  const locale = navigator.language;

  console.log(locale);

  let messages;

  if (locale === "es" || locale === "es-ES" || locale === "es-CO") {
    messages = esTranslations;
  } else {
    messages = enTranslations;
  }

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages}>
        <Layout />
      </IntlProvider>
    </div>
  );
}

export default App;
