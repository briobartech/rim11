import { readCSVtoArray } from "./csv_to_array.js";

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

Com 200 anos de história, continua sendo um símbolo de coragem e tradição no Exército Argentino.`,
  },
  info: `Este Regimiento tuvo su origen en el Cuerpo de Auxiliares Argentinos formado por soldados cuyanos, que a fines de 1813, marcharon en ayuda de los patriotas Chilenos que luchaban por la libertad contra las fuerzas realistas. Se cubrieron de gloria en su bautismo de fuego acompañando a las fuerzas chilenas en CUCHACUCHA el 23 de febrero de 1814, siendo premiados por su acción con una condecoración al valor, la cual a partir de entonces los distingue, portándola todos los integrantes del Regimiento con orgullo sobre su brazo. Participó también de los COMBATES DE MEMBRILLAR, PASO DEL MAULE, TRES MONTES, RIO CLARO Y QUECHEREGUAS, regresando junto con los patriotas chilenos luego de la derrota de Rancagua a Mendoza, con el objeto de Reorganizarse y formar el núcleo de lo que sería el EJERCITO DE LOS ANDES De regreso en Cuyo el ocho de noviembre de 1814 fue creado sobre la Base del Batallón 11,el Regimiento 11, siendo la primera unidad militar con que contó el Grl SAN MARTIN para comenzar sus ambiciosos planes de Libertad. Su primer Jefe fue el Teniente Coronel Don JUAN GREGORIO DE LAS HERAS, completando el regimiento a seis compañías, constituido en su mayoría por soldados mendocinos. El 1ro de agosto de 1816, el ciudadano mendocino Don RAFAEL VARGAS, donó al Regimiento 11 su banda de música personal, que estaba compuesta por dieciséis morenos, transformándose en la PRIMERA BANDA DE MUSICA que tuvo el Ejército de los Andes. Organizado el ejército el Grl SAN MARTIN se propuso proveerlo de una Bandera, confeccionada por las Damas Patriotas Mendocinas la cual fue jurada por todo el Ejército, nombrándose patrona a la Virgen del Carmen de Cuyo, acompañó a la columna de Las Heras por el paso Uspallata en su marcha a Chile. El Regimiento 11 inicia la gesta sanmartiniana formando parte del Ejército de los Andes, batiéndose valerosamente en las victorias de Potrerillos, Guardia Vieja, Vegas de Cumpeo, cubriéndose de gloria en al batalla de Chacabuco, formando el 11 de Línea el ala derecha de la agrupación comandada por el Grl SOLER. Más tarde el Regimiento 11 hizo la Segunda Campaña al sur de Chile, la marcha se inició el 13 de marzo de 1817 integrando la División del Sur, donde obtiene dos victorias excepcionales, el combate nocturno de CURAPALIGUE y el combate de GAVILAN. Posteriormente participa en el asalto a la Plaza Fortificada de TALCAHUANO, combate que tal vez fue el más difícil y duro de nuestro Regimiento. Sobreviene luego para el Ejército Libertador, la sorpresa de CANCHA RAYADA, donde la decisión del Coronel LAS HERAS, evita que su Regimiento sea sorprendido, y logra retirarse combatiendo ordenadamente. Luego participa con el resto del Ejercito Libertador en la decisiva batalla de Maipo, lográndose el éxito que permite consolidar la libertad de Chile. La acción del Regimiento en esta Batalla le da el honor de ser distinguido con otra condecoración que junto con la de Cucha Cucha lucen todos sus integrantes en la manga de su uniforme. Ya al mando de su nuevo Jefe el Tcnl DEHEZA, el Regimiento 11 forma parte de la expedición Libertadora al Perú, en esta nueva campaña, entre 1820 y 1823 participó en los combates de NAZCA, PASCO, TOMA DE LIMA, MIRABE, TOMA DEL CALLAO, CHINCHAS, CALAMA, TORATA, MOQUEGUA Y SUBLEVACION DEL CALLAO. Al igual que los demás cuerpos del Ejército de los Andes el Regimiento concretada la libertad del Perú, solicita autorización para regresar a su Patria, retornando a la misma luego de una penosa travesía. De regreso participa en las luchas internas para la reorganización nacional hasta que en 1865 se consolida la Nación y a partir de allí son numerosas las guarniciones que ocupa cumpliendo diversas misiones, así pasó por la frontera Sur, actuando en la Campaña del Desierto contra el Indio, trasladándose luego a Tres Arroyos, Tapalqué y Olavarría para detener a los malones y proteger las fronteras de la civilización de aquella época. El 11 de octubre de 1910 por decreto del Presidente FIGUEROA ALCORTA, se le pone al Regimiento Número 11, el nombre de “GENERAL LAS HERAS”, reconociendo así a su primer Jefe y a uno de los más valerosos colaboradores del Grl SAN MARTIN. En noviembre de 1912, el Regimiento se instala en la ciudad de Rosario donde permaneció hasta el año 1964. Ese mismo año la Unidad, regresa al seno de la tierra que le vio nacer y le entregó los primeros hombres, MENDOZA, asentándose en la localidad de Tupungato. Este Regimiento tiene el Honor de ser el custodio de la Histórica Bandera del Ejercito de los Andes, reliquia y símbolo de la Libertad, la cual se encuentra en un templete en la Casa de Gobierno de la Provincia de Mendoza, custodiada en forma permanente por los bravos “LEONES DEL GENERAL DON JUAN GREGORIO DE LAS HERAS”.`,
};

export const contactData = readCSVtoArray("/rim11/public/contact-info.csv").then(
  (data) => {
    return data[0]; // Assuming the CSV has a single row with contact info
  }
);

export const textStyle = {
  content: {
    "font-size1": "1em",
    "font-size2": "2em",
    "font-size3": "3em",
    "font-size4": "4em",
    "font-size5": "5em",
    "line-height": "2.0",
    "font-family": "'Jockey One', sans-serif",
    "font-weight": "400",
  },
};
