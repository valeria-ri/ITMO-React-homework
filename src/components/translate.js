import React, { useEffect, useState } from "react";
import axios from "axios";

const doTranslation = async (input, languageCode) => {
  let y = 'https://dictionary.yandex.net/api/v1/dicservice.json';
  let key = 'dict.1.1.20240618T161251Z.027913a470962fd5.6090e53b44429c4d2cbdc246c9247b8f208c510f';
  let lang = 'ru';
  let url = `${y}/lookup?key=${key}&lang=${lang}-${languageCode}&text=${input}`;

  try {
    const { data } = await axios.post(url);
    return data.def[0].tr[0].text;
  } catch (err) {
    return '';
  }
};

export default ({ language, text }) => {
  const [translated, setTranslated] = useState('');

  useEffect(() => {
    if (!text) {
      setTranslated('');
      return;
    }
    doTranslation(text, language).then(setTranslated);
  }, [text, language]);

  return (
    <div>
      <label className="label">Output</label>
      <h1 className="title">{translated}</h1>
    </div>
  );
};
