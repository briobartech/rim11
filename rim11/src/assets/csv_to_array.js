function leerCSV(archivoCSV, callback) {
  const lector = new FileReader();

  lector.onload = function(evento) {
    const contenido = evento.target.result;
    const lineas = contenido.split('\n');
    const datos = lineas.map(linea => linea.split(','));
    callback(datos); // Devuelve el array resultante
  };

  lector.onerror = function() {
    console.error('Error al leer el archivo CSV');
  };

  lector.readAsText(archivoCSV);
}
