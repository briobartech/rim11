export async function readCSVtoArray(csvPath) {
  const response = await fetch(csvPath);
  const text = await response.text();

  // Remove possible carriage returns and split into lines
  const lines = text.replace(/\r/g, "").split("\n").filter(Boolean);

  // Get headers
  const headers = lines[0].split(",").map((h) => h.trim());

  // Parse rows
  const data = lines.slice(1).map((line) => {
    // Remove quotes and split by comma
    const values = line.split(",").map((v) => v.replace(/['"]/g, "").trim());
    // Create object
    return headers.reduce((obj, header, idx) => {
      obj[header] = values[idx];
      return obj;
    }, {});
  });

  return data;
}

/**
 * Lee un archivo CSV desde la carpeta 'public' y lo convierte en un objeto.
 *
 * @param {string} filePath - La ruta al archivo CSV dentro de la carpeta 'public'.
 * @returns {Promise<Object>} Un objeto con el primer dato de cada fila como clave.
 */
export async function convertirCsvAObjeto(filePath) {
  try {
    const response = await fetch(filePath);
    const text = await response.text();

    const lineas = text.replace(/\r/g, "").split("\n").filter(Boolean);
 /*    // Omitir el encabezado (la primera línea)
    const lineasSinEncabezado = lineas.slice(1); */

    const resultado = lineas.reduce((acc, linea) => {
      // Evitar líneas vacías
      if (linea.trim() === "") return acc;

      const [id, nombre, descripcion] = linea
        .split(",")
        .map((item) => item.trim());

      if (id) {
        acc[id] = {
          nombre: nombre || "",
          descripcion: descripcion || "",
        };
      }
      return acc;
    }, {});

    return resultado;
  } catch (error) {
    console.error("Error al leer o procesar el archivo CSV:", error);
    return {}; // Devuelve un objeto vacío en caso de error
  }
};
