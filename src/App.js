import "./styles.css";
import React, { useState } from "react";
import Field from "./components/Field";
import Languages from "./components/Languages";
import Translate from "./components/Translate";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";

export default function App() {
  const [language, setLanguage] = useState("en");
  const [text, setText] = useState("Реакция");

  return (
    <div className="content">
      <Header />
      <Main>
        <Field label="Введите слово на русском языке" onChange={setText} value={text} />
        <Languages language={language} onLanguageChange={setLanguage} />
        <hr />
        <Translate text={text} language={language} />
      </Main>
      <Footer />
    </div>
  );
}
