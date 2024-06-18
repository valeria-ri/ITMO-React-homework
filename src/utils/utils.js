import axios from "axios";
import { KEY, SOURCE } from "./constants";

export const doTranslation = async (input, languageCode) => {
  let lang = 'ru';
  let url = `${SOURCE}/lookup?key=${KEY}&lang=${lang}-${languageCode}&text=${input}`;

  try {
    const { data } = await axios.post(url);
    return data.def[0].tr[0].text;
  } catch (err) {
    return '';
  }
};