export async function readCSVtoArray(csvPath) {
  const response = await fetch(csvPath);
  const text = await response.text();

  // Remove possible carriage returns and split into lines
  const lines = text.replace(/\r/g, '').split('\n').filter(Boolean);

  // Get headers
  const headers = lines[0].split(',').map(h => h.trim());

  // Parse rows
  const data = lines.slice(1).map(line => {
    // Remove quotes and split by comma
    const values = line.split(',').map(v => v.replace(/['"]/g, '').trim());
    // Create object
    return headers.reduce((obj, header, idx) => {
      obj[header] = values[idx];
      return obj;
    }, {});
  });

  return data;
}

