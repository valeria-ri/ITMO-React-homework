import React, { useEffect, useState } from "react";
import { doTranslation } from "../utils/utils";

const Translate = ({ language, text }) => {
  const [translated, setTranslated] = useState('');

  useEffect(() => {
    if (!text) {
      setTranslated('');
      return;
    };
    doTranslation(text, language)
      .then(setTranslated);
  }, [text, language]);

  return (
    <div className="translate">
      <label className="translate__label label">Перевод</label>
      <h2 className="translate__result">{translated || '...'}</h2>
    </div>
  );
};

export default Translate;
