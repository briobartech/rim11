import { createContext, useState } from "react";
import { themeData } from "../assets/colors";
import { textStyle } from "../assets/text";
export const AppContext = createContext();

const LANGS = ["spanish", "english", "portugues"];

export function AppContextProvider(props) {

  const [themeDataSelected, setThemeData] = useState(themeData['original']);
  const [result, setResult] = useState("");
  const handleScan = (data) => {
    if (data) setResult(data.text);
  };
  const [languaje, setLanguaje] = useState("spanish");
  const handleError = (err) => {
    console.error(err);
  };

const handleLangClick = () => {
    const idx = LANGS.indexOf(languaje);
    const nextLang = LANGS[(idx + 1) % LANGS.length];
    setLanguaje(nextLang);
  };
const handleThemeChange = () => {
  const themeKeys = Object.keys(themeData);
  const currentIdx = themeKeys.findIndex(
    key => themeData[key] === themeDataSelected
  );
  const nextIdx = (currentIdx + 1) % themeKeys.length;
  setThemeData(themeData[themeKeys[nextIdx]]);
  //console.log(themeDataSelected)
};
  return (
    <AppContext.Provider
      value={{
        handleError: handleError,
        handleScan: handleScan,
        qrData: result,
        setQrData: setResult,
        themeData: themeDataSelected,
        handleThemeChange: handleThemeChange,
        textStyle: textStyle,
        languaje: languaje,
        setLanguaje: handleLangClick
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
