import "./styles.css";
import React, { useState } from "react";
import Field from "./components/Field";
import Languages from "./components/Languages";
import Translate from "./components/Translate";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";
import TranslateSection from "./components/TranslateSection";

export default function App() {
  const [language, setLanguage] = useState("en");
  const [text, setText] = useState("реакция");

  return (
    <div className="content-box">

      <Header />

      <Main>
        <TranslateSection id="field-section">
          <Field 
            label="Введите слово на русском языке" 
            onChange={setText} 
            value={text} 
          />
          <Languages 
            language={language} 
            onLanguageChange={setLanguage} 
          />
        </TranslateSection>
        <TranslateSection id="translate-section">
          <Translate 
            text={text} 
            language={language} 
          />
        </TranslateSection>
      </Main>

      <Footer />
      
    </div>
  );
}
