import { readCSVtoArray } from './csv_to_array.js'

export const texts = {
  home: {
    spanish: `Fundado el 8 de noviembre de 1825 por iniciativa del Gral. San Martín, el RIM 11 fue una pieza clave del Ejército de los Andes. 

Bajo el mando del Tte. Cnel. Las Heras, combatió en campañas libertadoras como Chacabuco y Maipú, ganándose el apodo de “Los Leones de Las Heras”.

Con 200 años de historia, sigue siendo símbolo de valor y tradición en el Ejército Argentino.`,
    english: `Founded on November 8, 1825, at the initiative of General San Martín, RIM 11 was a key unit of the Army of the Andes.

Under the command of Lieutenant Colonel Las Heras, it fought in liberation campaigns such as Chacabuco and Maipú, earning the nickname “Las Heras' Lions.”

With 200 years of history, it remains a symbol of valor and tradition in the Argentine Army.`,
    portugues: `Fundado em 8 de novembro de 1825 por iniciativa do General San Martín, o RIM 11 foi uma peça fundamental do Exército dos Andes.

Sob o comando do Tenente-Coronel Las Heras, combateu em campanhas libertadoras como Chacabuco e Maipú, ganhando o apelido de “Os Leões de Las Heras.”

Com 200 anos de história, continua sendo um símbolo de coragem e tradição no Exército Argentino.`
  },
  info: 'Esta es la información sobre el rim 11'
}

export const contactData = readCSVtoArray('/src/assets/contact-info.csv').then(data => {
  return data[0]  // Assuming the CSV has a single row with contact info
})

export const textStyle = {
  content: {
    'font-size': '2.2em',
    'line-height': '2.0',
    'font-family': "'Jockey One', sans-serif",
    'font-weight': '400',
    'font-size3': '3em',
    'font-size4': '4em'
  }
}
