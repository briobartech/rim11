import { createContext, useState, useEffect } from "react";
import { themeData } from "../assets/colors";
import { textStyle } from "../assets/text";
import { convertirCsvAObjeto } from "../assets/csv_to_array.js";

export const AppContext = createContext();

const LANGS = ["spanish", "english", "portugues"];

export function AppContextProvider(props) {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [languaje, setLanguaje] = useState("spanish");
  const [themeDataSelected, setThemeData] = useState(themeData["original"]);
  const [result, setResult] = useState("");

  useEffect(() => {
    const cargarDatos = async () => {
      // La ruta es relativa a la carpeta 'public'
      const datosProcesados = await convertirCsvAObjeto("/public/bbdd.csv");
      setDatos(datosProcesados);
      setCargando(false);
    };

    cargarDatos();
  }, []); // El array vacío asegura que se ejecute solo una vez al montar el componente



  const handleScan = (data) => {
    if (data) setResult(data.text);
  };

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
      (key) => themeData[key] === themeDataSelected
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
        setLanguaje: handleLangClick,
        datos: datos,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
