import { useTranslation } from "react-i18next";

export function LanguageSelector() {
  const { i18n } = useTranslation();
  return (
    <>
      <img
        role="button"
        src="https://flagcdn.com/24x18/tr.png"
        width="24"
        height="18"
        alt="Turkce"
        onClick={() => i18n.changeLanguage("tr")}
      ></img>

      <img
        role="button"
        src="https://flagcdn.com/24x18/us.png"
        width="24"
        height="18"
        alt="English"
        onClick={() => i18n.changeLanguage("en")}
      ></img>
    </>
  );
}
