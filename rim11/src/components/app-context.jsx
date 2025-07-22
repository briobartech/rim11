import { createContext, useState } from "react";
import { themeData } from "../assets/colors";
import { textStyle } from "../assets/text";
export const AppContext = createContext();

const LANGS = ["spanish", "english", "portugues"];

export function AppContextProvider(props) {

  
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

  return (
    <AppContext.Provider
      value={{
        handleError: handleError,
        handleScan: handleScan,
        qrData: result,
        setQrData: setResult,
        themeData: themeData,
        textStyle: textStyle,
        languaje: languaje,
        setLanguaje: handleLangClick
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
