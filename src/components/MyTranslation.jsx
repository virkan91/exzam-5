import React from 'react'
import "../18n"
import { useTranslation } from "react-i18next";


const MyTranslation = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <select
      onChange={(event) => changeLanguage(event.target.value)}
      className="border rounded px-1 font-[500]"
    >
      <option value="ru">RU</option>
      <option value="en">EN</option>
    </select>
  );
};

export default MyTranslation;