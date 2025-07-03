import { createContext, useState } from "react";
import { themeData } from "../assets/colors";
import { textStyle } from "../assets/text";
export const AppContext = createContext();

export function AppContextProvider(props) {
  const [result, setResult] = useState("");
  const handleScan = (data) => {
    if (data) setResult(data.text);
  };

  const handleError = (err) => {
    console.error(err);
  };
  return (
    <AppContext.Provider
      value={{
        handleError: handleError,
        handleScan: handleScan,
        qrData: result,
        setQrData: setResult,
        themeData: themeData,
        textStyle: textStyle
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
