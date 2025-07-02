import { createContext, useState } from "react";

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
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
