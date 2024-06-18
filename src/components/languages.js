/* eslint-disable */
import React, { useState } from "react";

const LANGUAGES = [
  { label: "English", value: "en" },
  { label: "Polish", value: "pl" },
  { label: "Ukrainian", value: "uk" },
  { label: "German", value: "de" },
  { label: "French", value: "fr" },
  { label: "Spanish", value: "es" },
  { label: "Italian", value: "it" },
  { label: "Turkish", value: "tr" },
];

const Languages = ({ language, onLanguageChange }) => {
  if (language === undefined) {
    language = "en";
  }
  const languageConfig = LANGUAGES.find((l) => l.value === language);
  if (!languageConfig) {
    throw new Error(`Unknown language code '${language}'`);
  }

  const [open, setOpen] = useState(false);

  const onSelect = (language) => {
    setOpen(false);
    onLanguageChange(language);
  };

  return (
    <div>
      <label className="label">Введите язык</label>
      <div className={`dropdown ${open && "is-active"}`}>
        <div className="dropdown-trigger">
          <button className="button" onClick={() => setOpen(!open)}>
            <span>{languageConfig.label}</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" />
            </span>
          </button>
        </div>
        <div className="dropdown-menu">
          <div className="dropdown-content">
            {LANGUAGES.map(({ label, value }) => {
              return (
                <a
                  key={Math.random()}
                  href="#"
                  onClick={() => onSelect(value)}
                  className="dropdown-item"
                >
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
