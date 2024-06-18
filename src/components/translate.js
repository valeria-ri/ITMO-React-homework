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
    <div>
      <label className="label">Перевод</label>
      <h1 className="title">{translated}</h1>
    </div>
  );
};

export default Translate;
