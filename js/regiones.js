'use strict'

/* ──────────────────────────────────────────────────────────────── *\
 *  regiones.js
 * 
 *  Interacciones:
 *   – Mostrar nombre del departamento al hacer hover en el mapa
 *   – Cambiar información del departamento al hacer click sobre uno dentro del mapa
 * 
 *  Datos:
 *   – Objeto regionesInfo con información de cada departamento
 * 
 *  Estructura:
 *   – Constantes
 *   – Eventos de hover y click
 *   -
\* ──────────────────────────────────────────────────────────────── */

/**
 * Objeto que contiene la información de cada departamento de Colombia.
 * @typedef {Object} Departamento
 * @property {string} h3 - Nombre del departamento.
 * @property {string} clima - Descripción del clima del departamento.
 * @property {string} descripcion - Texto descriptivo del departamento.
 * @property {string} capital - Nombre de la capital del departamento.
 * @property {string} fraseCapital - Frase destacada de la capital.
 * 
 * @type {Object.<string, Departamento>}
 */
const regionesInfo = {
    Amazonas: {
        h3: "Amazonas",
        clima: "Clima: Tropical húmedo, 23-27°C",
        descripcion: "El Amazonas alberga una de las mayores biodiversidades del planeta y es clave en la regulación del clima global.",
        capital: "Capital: Leticia",
        fraseCapital: "La puerta de entrada a la selva amazónica."
    },
    Antioquia: {
        h3: "Antioquia",
        clima: "Clima: Cálido y templado, 18-28°C",
        descripcion: "Antioquia es conocida por su cultura paisa, su producción de café y Medellín, la ciudad de la eterna primavera.",
        capital: "Capital: Medellín",
        fraseCapital: "La ciudad de la eterna primavera."
    },
    Arauca: {
        h3: "Arauca",
        clima: "Clima: Tropical de sabana, 24-30°C",
        descripcion: "Arauca es una región ganadera importante y destaca por sus paisajes de sabana y su riqueza cultural llanera.",
        capital: "Capital: Arauca",
        fraseCapital: "La cuna del joropo y el alma llanera."
    },
    Atlantico: {
        h3: "Atlántico",
        clima: "Clima: Cálido seco, 27-32°C",
        descripcion: "Atlántico alberga a Barranquilla, cuna del Carnaval declarado Patrimonio Cultural de la Humanidad.",
        capital: "Capital: Barranquilla",
        fraseCapital: "Donde la alegría nunca se detiene."
    },
    Bolivar: {
        h3: "Bolívar",
        clima: "Clima: Tropical húmedo, 25-31°C",
        descripcion: "Bolívar es el hogar de Cartagena, una ciudad amurallada con historia colonial y playas caribeñas.",
        capital: "Capital: Cartagena",
        fraseCapital: "La joya del Caribe colombiano."
    },
    Boyaca: {
        h3: "Boyacá",
        clima: "Clima: Frío de montaña, 10-18°C",
        descripcion: "Boyacá fue clave en la independencia de Colombia y es conocido por su arquitectura colonial y paisajes andinos.",
        capital: "Capital: Tunja",
        fraseCapital: "Cuna de la independencia."
    },
    Caldas: {
        h3: "Caldas",
        clima: "Clima: Templado húmedo, 16-24°C",
        descripcion: "Ubicado en el Eje Cafetero, Caldas es famoso por su producción de café y sus aguas termales.",
        capital: "Capital: Manizales",
        fraseCapital: "Entre montañas y café."
    },
    Caqueta: {
        h3: "Caquetá",
        clima: "Clima: Tropical húmedo, 24-28°C",
        descripcion: "Caquetá forma parte de la Amazonía colombiana y destaca por su vegetación exuberante y vida silvestre.",
        capital: "Capital: Florencia",
        fraseCapital: "Corazón de la Amazonía."
    },
    Casanare: {
        h3: "Casanare",
        clima: "Clima: Tropical de sabana, 24-32°C",
        descripcion: "Casanare es un paraíso para el ecoturismo con llanuras extensas, avistamiento de fauna y cultura llanera.",
        capital: "Capital: Yopal",
        fraseCapital: "En el corazón de los Llanos."
    },
    Cauca: {
        h3: "Cauca",
        clima: "Clima: Variado, de templado a frío, 14-24°C",
        descripcion: "Cauca es un departamento multicultural con comunidades indígenas, riqueza arqueológica y paisajes andinos.",
        capital: "Capital: Popayán",
        fraseCapital: "La ciudad blanca."
    },
    Cesar: {
        h3: "Cesar",
        clima: "Clima: Cálido seco, 26-33°C",
        descripcion: "Tierra del vallenato, el Cesar es famoso por su música tradicional y los paisajes de la Sierra Nevada de Santa Marta.",
        capital: "Capital: Valledupar",
        fraseCapital: "La cuna del vallenato."
    },
    Choco: {
        h3: "Chocó",
        clima: "Clima: Tropical súper húmedo, 24-30°C",
        descripcion: "Es uno de los lugares más lluviosos del mundo, con selvas densas y cultura afrocolombiana vibrante.",
        capital: "Capital: Quibdó",
        fraseCapital: "El corazón del Pacífico."
    },
    Cordoba: {
        h3: "Córdoba",
        clima: "Clima: Cálido húmedo, 26-32°C",
        descripcion: "Córdoba es conocido por su ganadería, música porro y su cercanía al Caribe colombiano.",
        capital: "Capital: Montería",
        fraseCapital: "La capital ganadera."
    },
    Cundinamarca: {
        h3: "Cundinamarca",
        clima: "Clima: Frío de montaña, 12-20°C",
        descripcion: "Cundinamarca rodea a Bogotá y ofrece paisajes rurales, arquitectura colonial y centros históricos.",
        capital: "Capital: Bogotá",
        fraseCapital: "La capital de los colombianos."
    },
    Guainia: {
        h3: "Guainía",
        clima: "Clima: Tropical húmedo, 24-28°C",
        descripcion: "Es uno de los departamentos más biodiversos y poco poblados, con gran presencia de comunidades indígenas.",
        capital: "Capital: Inírida",
        fraseCapital: "La ciudad del viento y las selvas."
    },
    Guaviare: {
        h3: "Guaviare",
        clima: "Clima: Tropical húmedo, 24-30°C",
        descripcion: "Rico en arqueología rupestre, Guaviare mezcla selva, sabana y cultura ancestral.",
        capital: "Capital: San José del Guaviare",
        fraseCapital: "Entre selvas y ríos."
    },
    Huila: {
        h3: "Huila",
        clima: "Clima: Cálido templado, 18-28°C",
        descripcion: "Es hogar del Parque Arqueológico de San Agustín y de la producción de café y achiras.",
        capital: "Capital: Neiva",
        fraseCapital: "La puerta del desierto de la Tatacoa."
    },
    Guajira: {
        h3: "La Guajira",
        clima: "Clima: Árido y seco, 27-35°C",
        descripcion: "Una región desértica habitada por los Wayuu, con paisajes únicos como las Dunas de Taroa y Cabo de la Vela.",
        capital: "Capital: Riohacha",
        fraseCapital: "El alma Wayuu de Colombia."
    },
    Magdalena: {
        h3: "Magdalena",
        clima: "Clima: Tropical seco, 26-32°C",
        descripcion: "Santa Marta, su capital, es una de las ciudades más antiguas de América y puerta de entrada a la Sierra Nevada.",
        capital: "Capital: Santa Marta",
        fraseCapital: "La ciudad más antigua de Colombia."
    },
    Meta: {
        h3: "Meta",
        clima: "Clima: Tropical de sabana, 24-30°C",
        descripcion: "Es una puerta a los Llanos Orientales y cuenta con paisajes como Caño Cristales, el río de los cinco colores.",
        capital: "Capital: Villavicencio",
        fraseCapital: "La puerta a los Llanos Orientales."
    },
    Narinio: {
        h3: "Nariño",
        clima: "Clima: Frío de montaña, 8-18°C",
        descripcion: "Región andina con el imponente Santuario de Las Lajas y rica en tradiciones indígenas.",
        capital: "Capital: Pasto",
        fraseCapital: "La ciudad de las tradiciones y los volcanes."
    },
    Norte_de_Santander: {
        h3: "Norte de Santander",
        clima: "Clima: Templado a cálido, 20-30°C",
        descripcion: "Su capital, Cúcuta, es una ciudad fronteriza con gran influencia cultural y económica binacional.",
        capital: "Capital: Cúcuta",
        fraseCapital: "La ciudad fronteriza llena de historia."
    },
    Putumayo: {
        h3: "Putumayo",
        clima: "Clima: Tropical húmedo, 23-27°C",
        descripcion: "Es una región amazónica rica en cultura indígena, biodiversidad y cascadas impresionantes.",
        capital: "Capital: Mocoa",
        fraseCapital: "La ciudad de las aguas y la selva."
    },
    Quindio: {
        h3: "Quindío",
        clima: "Clima: Templado húmedo, 18-26°C",
        descripcion: "En el corazón del Eje Cafetero, Quindío es famoso por sus paisajes, cafetales y pueblos como Salento.",
        capital: "Capital: Armenia",
        fraseCapital: "La cuna del café colombiano."
    },
    Risaralda: {
        h3: "Risaralda",
        clima: "Clima: Templado húmedo, 18-26°C",
        descripcion: "Es parte del Paisaje Cultural Cafetero y se destaca por su diversidad natural y urbana.",
        capital: "Capital: Pereira",
        fraseCapital: "El corazón del Eje Cafetero."
    },
    San_Andres_Providencia_y_Santa_Catalina: {
        h3: "San Andrés y Providencia",
        clima: "Clima: Tropical marítimo, 26-30°C",
        descripcion: "Islas caribeñas de aguas cristalinas, reconocidas por su cultura raizal y playas paradisíacas.",
        capital: "Capital: San Andrés",
        fraseCapital: "Un paraíso en el Caribe."
    },
    Santander: {
        h3: "Santander",
        clima: "Clima: Cálido seco a templado, 22-30°C",
        descripcion: "Conocido por su turismo de aventura, pueblos coloniales y cañones imponentes como el del Chicamocha.",
        capital: "Capital: Bucaramanga",
        fraseCapital: "La ciudad de los parques."
    },
    Sucre: {
        h3: "Sucre",
        clima: "Clima: Cálido seco, 26-32°C",
        descripcion: "Sucre destaca por su herencia cultural, sabanas y la ciudad histórica de Sincelejo.",
        capital: "Capital: Sincelejo",
        fraseCapital: "Cuna de la cultura sabanera."
    },
    Tolima: {
        h3: "Tolima",
        clima: "Clima: Cálido a templado, 20-30°C",
        descripcion: "Tierra de tamales y música, es un departamento agrícola e histórico en el centro del país.",
        capital: "Capital: Ibagué",
        fraseCapital: "La capital musical de Colombia."
    },
    Valle_del_Cauca: {
        h3: "Valle del Cauca",
        clima: "Clima: Cálido a templado, 22-30°C",
        descripcion: "El Valle es una región con ríos, cultivos de caña y diversidad cultural.",
        capital: "Capital: Cali",
        fraseCapital: "Capital de la salsa."
    },
    Vaupes: {
        h3: "Vaupés",
        clima: "Clima: Tropical húmedo, 24-28°C",
        descripcion: "Región amazónica poco explorada, rica en biodiversidad y culturas indígenas ancestrales.",
        capital: "Capital: Mitú",
        fraseCapital: "Una joya escondida en la selva."
    },
    Vichada: {
        h3: "Vichada",
        clima: "Clima: Tropical de sabana, 24-32°C",
        descripcion: "Ubicado en los Llanos Orientales, es uno de los departamentos más extensos y menos poblados del país.",
        capital: "Capital: Puerto Carreño",
        fraseCapital: "La tranquilidad de los Llanos."
    }
}

const infoDepartamento = document.querySelector(`Departamento`)
// Elemento que muestra el nombre del departamento
const nombreDepartamento = document.querySelector(`.Departamento-h3`)
// Elemento que muestra el clima del departamento
const climaDepartamento = document.querySelector(`.Departamento-clima`)
// Elemento que muestra la descripción del departamento
const descripcionDepartamento = document.querySelector(`.Departamento-p`)
// Selección de los departamentos en los que se haga click dentro del mapa
const regiones = document.querySelectorAll(`.departamento`)
// Imagen que cambia según el departamento seleccionado
const imagenMapa = document.querySelector(`.Departamento-img`)
// Título que muestra la capital del departamento
const capital = document.querySelector(`.Capital-h4`)
// Frase destacada de la capital del departamento
const fraseCapital = document.querySelector(`.Capital-p`)
// Nombre del departamento que se actualiza al pasar el ratón por encima
const modalTitulo = document.querySelector('.modal-titulo');

regiones.forEach((_, i)=>{
    /**
   * Evento que actualiza el título del modal al pasar el mouse por un departamento
   * @param {MouseEvent} e Evento del mouse
   * @return {undefined} No tiene return
   */
    regiones[i].addEventListener(`mouseover`, ()=>{
        const tituloDepartamento = regiones[i].getAttribute(`id`)
        modalTitulo.innerText = tituloDepartamento;
    }
    )

     /**
   * Evento que activa un departamento al hacer clic y actualiza la información del departamento
   * @param {MouseEvent} e Evento del click
   * @return {undefined} No tiene return
   */
    regiones[i].addEventListener(`click`, ()=>{
        // Elimina la clase activa de todas las regiones
        regiones.forEach((_, j)=>{
            regiones[j].classList.remove(`departamento--activo`)
        })
          // Añade la clase activa a la región clicada
        regiones[i].classList.add(`departamento--activo`)
        // Obtiene el ID del departamento seleccionado
        const tituloDepartamento = regiones[i].getAttribute(`id`)
       //Actualiza la imagen del mapa con el departamento seleccionado
        imagenMapa.alt = tituloDepartamento;
       imagenMapa.src = `./assets/${tituloDepartamento}.webp`;
        // Busca la información correspondiente a ese departamento en el objeto regionesInfo
       const regionData = regionesInfo[tituloDepartamento];
        if (regionData) {
            nombreDepartamento.innerText = regionData.h3;
            climaDepartamento.innerText = regionData.clima;
            descripcionDepartamento.innerText = regionData.descripcion;
            capital.innerText = regionData.capital;
            fraseCapital.innerText = regionData.fraseCapital;
        } else {
            nombreDepartamento.innerText = tituloDepartamento || "Región desconocida";
            climaDepartamento.innerText = "Clima: Información no disponible";
            descripcionDepartamento.innerText = "Descripción: Información no disponible.";
            capital.innerText = "Capital: Información no disponible";
            fraseCapital.innerText = "Frase: Información no disponible.";
        }  
    })
})