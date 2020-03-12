const connection = new Mongo();
const db = connection.getDB("formula1");
db.dropDatabase();

// drivers
const hamilton = {
  _id: ObjectId(),
  firstname: "Lewis",
  lastname: "Hamilton",
  height: 1.74,
  birthday: new Date("1985-01-07"),
  points: 413,
  position: 1,
  picture: "/static/assets/drivers/hamilton.jpg",
  number: 44,
  links: {
    web: "https://www.lewishamilton.com/",
    instagram: "https://www.instagram.com/lewishamilton/",
    facebook: "https://www.facebook.com/LewisHamilton/"
  }
};

const bottas = {
  _id: ObjectId(),
  firstname: "Valtteri",
  lastname: "Bottas",
  height: 1.73,
  birthday: new Date("1989-08-28"),
  points: 326,
  position: 2,
  picture: "/static/assets/drivers/bottas.jpg",
  number: 77,
  links: {
    web: "http://valtteribottas.com/",
    instagram: "https://www.instagram.com/valtteribottas/",
    facebook: "https://www.facebook.com/ValtteriBottas/"
  }
};

const vettel = {
  _id: ObjectId(),
  firstname: "Sebastian",
  lastname: "Vettel",
  height: 1.75,
  birthday: new Date("1987-07-03"),
  points: 240,
  position: 5,
  picture: "/static/assets/drivers/vettel.jpg",
  number: 5,
  links: {
    web: "https://www.sebastianvettel.de/",
    instagram: null,
    facebook: null
  }
};

const leclerc = {
  _id: ObjectId(),
  firstname: "Charles",
  lastname: "Leclerc",
  height: 1.8,
  birthday: new Date("1997-10-16"),
  points: 264,
  position: 4,
  picture: "/static/assets/drivers/leclerc.jpg",
  number: 16,
  links: {
    web: "https://www.charlesleclerc.com/",
    instagram: "https://www.instagram.com/charles_leclerc/",
    facebook: "https://www.facebook.com/CharlesLeclercOfficiel/"
  }
};

const verstappen = {
  _id: ObjectId(),
  firstname: "Max",
  lastname: "Verstappen",
  height: 1.8,
  birthday: new Date("1997-09-30"),
  points: 278,
  position: 3,
  picture: "/static/assets/drivers/verstappen.jpg",
  number: 33,
  links: {
    web: "https://www.verstappen.nl/en",
    instagram: "https://www.instagram.com/maxverstappen1/",
    facebook: "https://www.facebook.com/MaxVerstappen/"
  }
};

const albon = {
  _id: ObjectId(),
  firstname: "Alexander",
  lastname: "Albon",
  height: 1.86,
  birthday: new Date("1996-03-23"),
  points: 92,
  position: 8,
  picture: "/static/assets/drivers/albon.jpg",
  number: 23,
  links: {
    web: "https://www.alexalbon.com/",
    instagram: "https://www.instagram.com/alex_albon/",
    facebook: "https://www.facebook.com/alexalbonofficial/"
  }
};

const sainz = {
  _id: ObjectId(),
  firstname: "Carlos",
  lastname: "Sainz",
  height: 1.78,
  birthday: new Date("1994-09-01"),
  points: 96,
  position: 6,
  picture: "/static/assets/drivers/sainz.jpg",
  number: 55,
  links: {
    web: "https://www.carlossainz.es/",
    instagram: "https://www.instagram.com/carlossainz55/",
    facebook: "https://www.facebook.com/Carlossainz55/"
  }
};

const norris = {
  _id: ObjectId(),
  firstname: "Lando",
  lastname: "Norris",
  height: 1.7,
  birthday: new Date("1999-11-13"),
  points: 49,
  position: 11,
  picture: "/static/assets/drivers/norris.jpg",
  number: 4,
  links: {
    web: "https://landonorris.com/",
    instagram: "https://www.instagram.com/landonorris/",
    facebook: "https://www.facebook.com/landonorris1/"
  }
};

const hulkenberg = {
  _id: ObjectId(),
  firstname: "Nico",
  lastname: "Hülkenberg",
  height: 1.84,
  birthday: new Date("1987-08-19"),
  points: 37,
  position: 14,
  picture: "/static/assets/drivers/hulkenberg.jpg",
  number: 27,
  links: {
    web: "https://www.nicohulkenberg.net/",
    instagram: "https://www.instagram.com/hulkhulkenberg/",
    facebook: "https://facebook.com/NicoHulkenberg.official/"
  }
};

const ricciardo = {
  _id: ObjectId(),
  firstname: "Daniel",
  lastname: "Ricciardo",
  height: 1.78,
  birthday: new Date("1989-07-01"),
  points: 54,
  position: 9,
  picture: "/static/assets/drivers/ricciardo.jpg",
  number: 3,
  links: {
    web: "https://danielricciardo.com/",
    instagram: "https://www.instagram.com/danielricciardo/",
    facebook: "https://facebook.com/DanielRicciardo/"
  }
};

const gasly = {
  _id: ObjectId(),
  firstname: "Pierre",
  lastname: "Gasly",
  height: 1.77,
  birthday: new Date("1996-02-07"),
  points: 95,
  position: 7,
  picture: "/static/assets/drivers/gasly.jpg",
  number: 10,
  links: {
    web: "https://www.pierregasly.com/",
    instagram: "https://www.instagram.com/pierregasly/",
    facebook: "https://facebook.com/PierreGasly/"
  }
};

const kvyat = {
  _id: ObjectId(),
  firstname: "Daniil",
  lastname: "Kvyat",
  height: 1.82,
  birthday: new Date("1994-04-26"),
  points: 37,
  position: 13,
  picture: "/static/assets/drivers/kvyat.jpg",
  number: 26,
  links: {
    web: "http://en.kvyat.com/",
    instagram: "https://www.instagram.com/danydk1/",
    facebook: null
  }
};

const perez = {
  _id: ObjectId(),
  firstname: "Sergio",
  lastname: "Perez",
  height: 1.73,
  birthday: new Date("1990-01-26"),
  points: 52,
  position: 10,
  picture: "/static/assets/drivers/perez.jpg",
  number: 11,
  links: {
    web: "https://sergioperez.mx/",
    instagram: "https://www.instagram.com/schecoperez/",
    facebook: "https://www.facebook.com/sergioperezf1/"
  }
};

const stroll = {
  _id: ObjectId(),
  firstname: "Lance",
  lastname: "Stroll",
  height: 1.73,
  birthday: new Date("1990-01-26"),
  points: 21,
  position: 15,
  picture: "/static/assets/drivers/stroll.jpg",
  number: 18,
  links: {
    web: "https://www.lancestroll.com/",
    instagram: "https://www.instagram.com/lance_stroll/",
    facebook: "https://www.facebook.com/stroll.lance/"
  }
};

const raikkonen = {
  _id: ObjectId(),
  firstname: "Kimi",
  lastname: "Räikkonen",
  height: 1.75,
  birthday: new Date("1979-10-17"),
  points: 43,
  position: 12,
  picture: "/static/assets/drivers/raikkonen.jpg",
  number: 7,
  links: {
    web: "https://www.kimiraikkonen.com/",
    instagram: "https://www.instagram.com/kimimatiasraikkonen/",
    facebook: null
  }
};

const giovinazzi = {
  _id: ObjectId(),
  firstname: "Antonio",
  lastname: "Giovinazzi",
  height: 1.85,
  birthday: new Date("1993-12-14"),
  points: 14,
  position: 17,
  picture: "/static/assets/drivers/giovinazzi.jpg",
  number: 99,
  links: {
    web: "http://antoniogiovinazzi.com/",
    instagram: "https://www.instagram.com/antogiovinazzi99/",
    facebook: null
  }
};

const magnussen = {
  _id: ObjectId(),
  firstname: "Kevin",
  lastname: "Magnussen",
  height: 1.74,
  birthday: new Date("1992-10-05"),
  points: 20,
  position: 16,
  picture: "/static/assets/drivers/magnussen.jpg",
  number: 20,
  links: {
    web: "https://kevinmagnussen.com/",
    instagram: "https://www.instagram.com/kevinmagnussen/",
    facebook: "https://facebook.com/KevinMagnussen/"
  }
};

const grosjean = {
  _id: ObjectId(),
  firstname: "Romain",
  lastname: "Grosjean",
  height: 1.8,
  birthday: new Date("1986-04-17"),
  points: 8,
  position: 18,
  picture: "/static/assets/drivers/grosjean.jpg",
  number: 8,
  links: {
    web: "https://www.romaingrosjean.com/en/home/",
    instagram: "https://www.instagram.com/grosjeanromain/",
    facebook: "https://www.facebook.com/grosjeanromain/"
  }
};

const kubica = {
  _id: ObjectId(),
  firstname: "Robert",
  lastname: "Kubica",
  height: 1.84,
  birthday: new Date("1984-12-07"),
  points: 1,
  position: 19,
  picture: "/static/assets/drivers/kubica.jpg",
  number: 88,
  links: {
    web: null,
    instagram: "https://www.instagram.com/robertkubica_real/",
    facebook: "https://www.facebook.com/KubicaOfficial/"
  }
};

const russell = {
  _id: ObjectId(),
  firstname: "George",
  lastname: "Russell",
  height: 1.85,
  birthday: new Date("1998-02-15"),
  points: 0,
  position: 20,
  picture: "/static/assets/drivers/russell.jpg",
  number: 63,
  links: {
    web: "https://www.georgerussell63.com/",
    instagram: "https://www.instagram.com/georgerussell63/",
    facebook: "https://www.facebook.com/GeorgeRussell63/"
  }
};

// teams
const mercedes = {
  _id: ObjectId(),
  name: "Mercedes",
  principal: "Toto Wolff",
  drivers: [hamilton._id, bottas._id],
  position: 1,
  points: 739,
  color: "#00D2BE"
};

const ferrari = {
  _id: ObjectId(),
  name: "Ferrari",
  principal: "Mattia Binotto",
  drivers: [vettel._id, leclerc._id],
  position: 2,
  points: 504,
  color: "#DC0000"
};

const redbull = {
  _id: ObjectId(),
  name: "Redbull",
  principal: "Christian Horner",
  drivers: [verstappen._id, albon._id],
  position: 3,
  points: 417,
  color: "#1E41FF"
};

const mclaren = {
  _id: ObjectId(),
  name: "McLaren",
  principal: "Andreas Seidl",
  drivers: [sainz._id, norris._id],
  position: 4,
  points: 145,
  color: "#FF8700"
};

const renault = {
  _id: ObjectId(),
  name: "Renault",
  principal: "Cyril Abiteboul",
  drivers: [hulkenberg._id, ricciardo._id],
  position: 5,
  points: 91,
  color: "#FFF500"
};

const toroRosso = {
  _id: ObjectId(),
  name: "Toro Rosso",
  principal: "Franz Tost",
  drivers: [gasly._id, kvyat._id],
  position: 6,
  points: 85,
  color: "#469BFF"
};

const racingPoint = {
  _id: ObjectId(),
  name: "Racing Point",
  principal: "Otmar Szafnauer",
  drivers: [perez._id, stroll._id],
  position: 7,
  points: 73,
  color: "#F596C8"
};

const alfaRomeo = {
  _id: ObjectId(),
  name: "Alfa Romeo",
  principal: "Frédéric Vasseur",
  drivers: [raikkonen._id, giovinazzi._id],
  position: 8,
  points: 57,
  color: "#9B0000"
};

const haas = {
  _id: ObjectId(),
  name: "Haas",
  principal: "Gene Haas",
  drivers: [magnussen._id, grosjean._id],
  position: 9,
  points: 28,
  color: "#BD9E57"
};

const williams = {
  _id: ObjectId(),
  name: "Williams",
  principal: "Frank Williams",
  drivers: [kubica._id, russell._id],
  position: 20,
  points: 1,
  color: "#F5F5F5"
};

hamilton.team = mercedes._id;
bottas.team = mercedes._id;
vettel.team = ferrari._id;
leclerc.team = ferrari._id;
verstappen.team = redbull._id;
albon.team = redbull._id;
sainz.team = mclaren._id;
norris.team = mclaren._id;
hulkenberg.team = renault._id;
ricciardo.team = renault._id;
gasly.team = toroRosso._id;
kvyat.team = toroRosso._id;
perez.team = racingPoint._id;
stroll.team = racingPoint._id;
raikkonen.team = alfaRomeo._id;
giovinazzi.team = alfaRomeo._id;
magnussen.team = haas._id;
grosjean.team = haas._id;
kubica.team = williams._id;
russell.team = williams._id;

// cars
const ferrari_car = {
  _id: ObjectId(),
  name: "Ferrari SF90",
  team: ferrari._id,
  drivers: [vettel._id, leclerc._id],
  engine: null,
  fuel: "Shell V-Power",
  weight: 743
};

ferrari.car = ferrari_car._id;
vettel.car = ferrari_car._id;
leclerc.car = ferrari_car._id;

const mercedes_car = {
  _id: ObjectId(),
  name: "Mercedes W10",
  team: mercedes._id,
  drivers: [hamilton._id, bottas._id],
  engine: null,
  fuel: "Petronas Primax",
  weight: 743
};

mercedes.car = mercedes_car._id;
hamilton.car = mercedes_car._id;
bottas.car = mercedes_car._id;

const redbull_car = {
  _id: ObjectId(),
  name: "RedBull RB15",
  team: redbull._id,
  drivers: [verstappen._id, albon._id],
  engine: null,
  fuel: "Esso Synergy",
  weight: 743
};

redbull.car = redbull_car._id;
verstappen.car = redbull_car._id;
albon.car = redbull_car._id;

const mclaren_car = {
  _id: ObjectId(),
  name: "McLaren MCL34",
  team: mclaren._id,
  drivers: [sainz._id, norris._id],
  engine: null,
  fuel: "BP Ultimate",
  weight: 743
};

mclaren.car = mclaren_car._id;
sainz.car = mclaren_car._id;
norris.car = mclaren_car._id;

const renault_car = {
  _id: ObjectId(),
  name: "Renault R.S.19",
  team: renault._id,
  drivers: [hulkenberg._id, ricciardo._id],
  engine: null,
  fuel: "BP Ultimate",
  weight: 743
};

renault.car = renault_car._id;
hulkenberg.car = renault_car._id;
ricciardo.car = renault_car._id;

const toroRosso_car = {
  _id: ObjectId(),
  name: "Toro Rosso STR14",
  team: toroRosso._id,
  drivers: [gasly._id, kvyat._id],
  engine: null,
  fuel: "Mobil Synergy",
  weight: 743
};

toroRosso.car = toroRosso_car._id;
gasly.car = toroRosso_car._id;
kvyat.car = toroRosso_car._id;

const racingPoint_car = {
  _id: ObjectId(),
  name: "Racing Point RP19",
  team: racingPoint._id,
  drivers: [perez._id, stroll._id],
  engine: null,
  fuel: "Petronas Primax",
  weight: 743
};

racingPoint.car = racingPoint_car;
perez.car = racingPoint_car;
stroll.car = racingPoint_car;

const alfaRomeo_car = {
  _id: ObjectId(),
  name: "Alfa Romeo Racing C38",
  team: alfaRomeo._id,
  drivers: [raikkonen._id, giovinazzi._id],
  engine: null,
  fuel: "Shell V-Power",
  weight: 743
};

alfaRomeo.car = alfaRomeo_car._id;
raikkonen.car = alfaRomeo_car._id;
giovinazzi.car = alfaRomeo_car._id;

const haas_car = {
  _id: ObjectId(),
  name: "Haas VF-19",
  team: haas._id,
  drivers: [magnussen._id, grosjean._id],
  engine: null,
  fuel: "Shell V-Power",
  weight: 743
};

haas.car = haas_car._id;
magnussen.car = alfaRomeo_car._id;
grosjean.car = alfaRomeo_car._id;

const williams_car = {
  _id: ObjectId(),
  name: "Williams FW42",
  team: williams._id,
  drivers: [kubica._id, russell._id],
  engine: null,
  fuel: "Petronas Primax",
  weight: 743
};

williams.car = williams_car._id;
kubica.car = williams_car._id;
russell.car = williams_car._id;

// countries
const britain = {
  _id: ObjectId(),
  name: "Great Britain",
  drivers: [hamilton._id, norris._id, russell._id],
  teams: [
    mercedes._id,
    redbull._id,
    mclaren._id,
    renault._id,
    racingPoint._id,
    williams._id
  ],
  circuits: [],
  flag: "/static/assets/flag/britain.svg"
};

const finland = {
  _id: ObjectId(),
  name: "Finland",
  drivers: [bottas._id, raikkonen._id],
  teams: [],
  circuits: [],
  flag: "/static/assets/flag/finland.svg"
};

const germany = {
  _id: ObjectId(),
  name: "Germany",
  drivers: [vettel._id],
  teams: [],
  circuits: [],
  flag: "/static/assets/flag/germany.svg"
};

const monaco = {
  _id: ObjectId(),
  name: "Monaco",
  drivers: [leclerc._id],
  teams: [],
  circuits: [],
  flag: "/static/assets/flag/monaco.svg"
};

const netherlands = {
  _id: ObjectId(),
  name: "Netherlands",
  drivers: [verstappen._id],
  teams: [],
  circuits: [],
  flag: "/static/assets/flag/netherlands.svg"
};

const thailand = {
  _id: ObjectId(),
  name: "Thailand",
  drivers: [albon._id],
  teams: [],
  circuits: [],
  flag: "/static/assets/flag/thailand.svg"
};

const italy = {
  _id: ObjectId(),
  name: "Italy",
  drivers: [giovinazzi._id],
  teams: [ferrari._id, toroRosso._id],
  circuits: [],
  flag: "/static/assets/flag/italy.svg"
};

const spain = {
  _id: ObjectId(),
  name: "Spain",
  drivers: [sainz._id],
  teams: [],
  circuits: [],
  flag: "/static/assets/flag/spain.svg"
};

const australia = {
  _id: ObjectId(),
  name: "Australia",
  drivers: [ricciardo._id],
  teams: [],
  circuits: [],
  flag: "/static/assets/flag/australia.svg"
};

const france = {
  _id: ObjectId(),
  name: "France",
  drivers: [gasly._id, grosjean._id],
  teams: [],
  circuits: [],
  flag: "/static/assets/flag/france.svg"
};

const russia = {
  _id: ObjectId(),
  name: "Russia",
  drivers: [kvyat._id],
  teams: [],
  circuits: [],
  flag: "/static/assets/flag/russia.svg"
};

const bahrain = {
  _id: ObjectId(),
  name: "Bahrain",
  drivers: [],
  teams: [],
  circuits: [],
  flag: "/static/assets/flag/bahrain.svg"
};

const china = {
  _id: ObjectId(),
  name: "China",
  drivers: [],
  teams: [],
  circuits: [],
  flag: "/static/assets/flag/china.svg"
};

const belgium = {
  _id: ObjectId(),
  name: "Belgium",
  drivers: [],
  teams: [],
  circuits: [],
  flag: "/static/assets/flag/belgium.svg"
};

const poland = {
  _id: ObjectId(),
  name: "Poland",
  drivers: [kubica._id],
  teams: [],
  circuits: [],
  flag: "/static/assets/flag/poland.svg"
};

const hungary = {
  _id: ObjectId(),
  name: "Hungary",
  drivers: [],
  teams: [],
  circuits: [],
  flag: "/static/assets/flag/hungary.svg"
};

const austria = {
  _id: ObjectId(),
  name: "Austria",
  drivers: [],
  teams: [],
  circuits: [],
  flag: "/static/assets/flag/austria.svg"
};

const canada = {
  _id: ObjectId(),
  name: "Canada",
  drivers: [stroll._id],
  teams: [],
  circuits: [],
  flag: "/static/assets/flag/canada.svg"
};

const azerbaijan = {
  _id: ObjectId(),
  name: "Azerbaijan",
  drivers: [],
  teams: [],
  circuits: [],
  flag: "/static/assets/flag/azerbaijan.svg"
};

const usa = {
  _id: ObjectId(),
  name: "USA",
  drivers: [],
  teams: [haas._id],
  circuits: [],
  flag: "/static/assets/flag/usa.svg"
};

const brazil = {
  _id: ObjectId(),
  name: "Brazil",
  drivers: [],
  teams: [],
  circuits: [],
  flag: "/static/assets/flag/brazil.svg"
};

const japan = {
  _id: ObjectId(),
  name: "Japan",
  drivers: [],
  teams: [],
  circuits: [],
  flag: "/static/assets/flag/japan.svg"
};

const singapore = {
  _id: ObjectId(),
  name: "Singapore",
  drivers: [],
  teams: [],
  circuits: [],
  flag: "/static/assets/flag/singapore.svg"
};

const mexico = {
  _id: ObjectId(),
  name: "Mexico",
  drivers: [perez._id],
  teams: [],
  circuits: [],
  flag: "/static/assets/flag/mexico.svg"
};

const emirates = {
  _id: ObjectId(),
  name: "United Arab Emirates",
  drivers: [],
  teams: [],
  circuits: [],
  flag: "/static/assets/flag/emirates.svg"
};

const vietnam = {
  _id: ObjectId(),
  name: "Vietnam",
  drivers: [],
  teams: [],
  circuits: [],
  flag: "/static/assets/flag/vietnam.svg"
};

const denmark = {
  _id: ObjectId(),
  name: "Denmark",
  drivers: [magnussen._id],
  teams: [],
  circuits: [],
  flag: "/static/assets/flag/denmark.svg"
};

const switzerland = {
  _id: ObjectId(),
  name: "Switzerland",
  drivers: [],
  teams: [alfaRomeo._id],
  circuits: [],
  flag: "/static/assets/flag/switzerland.svg"
};

hamilton.country = britain._id;
bottas.country = finland._id;
vettel.country = germany._id;
leclerc.country = monaco._id;
verstappen.country = netherlands._id;
albon.country = thailand._id;
sainz.country = spain._id;
norris.country = britain._id;
hulkenberg.country = germany._id;
ricciardo.country = australia._id;
gasly.country = france._id;
kvyat.country = russia._id;
perez.country = mexico._id;
stroll.country = canada._id;
raikkonen.country = finland._id;
giovinazzi.country = italy._id;
magnussen.country = denmark._id;
grosjean.country = france._id;
kubica.country = poland._id;
russell.country = britain._id;

// residences
const mercedes_residence = {
  _id: ObjectId(),
  country: britain._id,
  city: "Brackley"
};

const ferrari_residence = {
  _id: ObjectId(),
  country: italy._id,
  city: "Maranello"
};

const redbull_residence = {
  _id: ObjectId(),
  country: britain._id,
  city: "Milton Keynes"
};

const mclaren_residence = {
  _id: ObjectId(),
  country: britain._id,
  city: "Woking"
};

const renault_residence = {
  _id: ObjectId(),
  country: britain._id,
  city: "Enstone"
};

const toroRosso_residence = {
  _id: ObjectId(),
  country: italy._id,
  city: "Faenza"
};

const racingPoint_residence = {
  _id: ObjectId(),
  country: britain._id,
  city: "Silverstone"
};

const alfaRomeo_residence = {
  _id: ObjectId(),
  country: switzerland._id,
  city: "Zürich"
};

const haas_residence = {
  _id: ObjectId(),
  country: usa._id,
  city: "Kannapolis"
};

const williams_residence = {
  _id: ObjectId(),
  country: britain._id,
  city: "Wantage"
};

mercedes.residence = mercedes_residence._id;
ferrari.residence = ferrari_residence._id;
redbull.residence = redbull_residence._id;
mclaren.residence = mclaren_residence._id;
renault.residence = renault_residence._id;
toroRosso.residence = toroRosso_residence._id;
racingPoint.residence = racingPoint_residence._id;
alfaRomeo.residence = alfaRomeo_residence._id;
haas.residence = haas_residence._id;
williams.residence = williams_residence._id;

// circuits
const melbourne = {
  _id: ObjectId(),
  name: "Melbourne Grand Prix Circuit",
  city: "Melbourne",
  country: australia._id,
  opened: new Date("1953-11-20"),
  length: 5303,
  active: true,
  map: "/static/assets/circuit/melbourne.png"
};

const bahrain_circuit = {
  _id: ObjectId(),
  name: "Bahrain International Circuit",
  city: "Sakhir",
  country: bahrain._id,
  opened: new Date("2004-03-17"),
  length: 5412,
  active: true,
  map: "/static/assets/circuit/bahrain.png"
};

const hanoi = {
  _id: ObjectId(),
  name: "Hanoi Circuit",
  city: "Hanoi",
  country: vietnam._id,
  opened: new Date("2019-03-21"),
  length: 5607,
  active: false,
  map: "/static/assets/circuit/hanoi.png"
};

const shanghai = {
  _id: ObjectId(),
  name: "Shanghai International Circuit",
  city: "Shanghai",
  country: china._id,
  opened: new Date("2004-06-06"),
  length: 5451,
  active: true,
  map: "/static/assets/circuit/shanghai.png"
};

const zandvoort = {
  _id: ObjectId(),
  name: "Circuit Zandvoort",
  city: "Zandvoort",
  country: netherlands._id,
  opened: new Date("1948-08-07"),
  length: 4252,
  active: false,
  map: "/static/assets/circuit/netherlands.png"
};

const barcelona = {
  _id: ObjectId(),
  name: "Circuit de Barcelona-Catalunya",
  city: "Barcelona",
  country: spain._id,
  opened: new Date("1991-09-10"),
  length: 4655,
  active: true,
  map: "/static/assets/circuit/spain.png"
};

const monaco_circuit = {
  _id: ObjectId(),
  name: "Circuit de Monaco",
  city: "Monaco",
  country: monaco._id,
  opened: new Date("1929-04-14"),
  length: 3337,
  active: true,
  map: "/static/assets/circuit/monaco.png"
};

const baku = {
  _id: ObjectId(),
  name: "Baku City Circuit",
  city: "Baku",
  country: azerbaijan._id,
  opened: new Date("2017-06-25"),
  length: 6003,
  active: true,
  map: "/static/assets/circuit/baku.png"
};

const canada_circuit = {
  _id: ObjectId(),
  name: "Circuit Gilles-Villeneuve",
  city: "Montreal",
  country: canada._id,
  opened: new Date("1978-09-24"),
  length: 4361,
  active: true,
  map: "/static/assets/circuit/canada.png"
};

const france_circuit = {
  _id: ObjectId(),
  name: "Circuit Paul Ricard",
  city: "Marseille",
  country: france._id,
  opened: new Date("1970-04-19"),
  length: 5842,
  active: true,
  map: "/static/assets/circuit/france.png"
};

const austria_circuit = {
  _id: ObjectId(),
  name: "Red Bull Ring",
  city: "Spielberg",
  country: austria._id,
  opened: new Date("1969-07-27"),
  length: 4318,
  active: true,
  map: "/static/assets/circuit/austria.png"
};

const silverstone = {
  _id: ObjectId(),
  name: "Silverstone Circuit",
  city: "Silverstone",
  country: britain._id,
  opened: new Date("1947-09-01"),
  length: 5891,
  active: true,
  map: "/static/assets/circuit/silverstone.png"
};

const hungaroring = {
  _id: ObjectId(),
  name: "Hungaroring",
  city: "Mogyoród",
  country: hungary._id,
  opened: new Date("1986-03-24"),
  length: 4381,
  active: true,
  map: "/static/assets/circuit/hungaroring.png"
};

const spa = {
  _id: ObjectId(),
  name: "Circuit de Spa-Francorchamps",
  city: "Francorchamps",
  country: belgium._id,
  opened: new Date("1921-08-01"),
  length: 7004,
  active: true,
  map: "/static/assets/circuit/spa.png"
};

const monza = {
  _id: ObjectId(),
  name: "Autodromo Nazionale Monza",
  city: "Monza",
  country: italy._id,
  opened: new Date("1922-09-03"),
  length: 5793,
  active: true,
  map: "/static/assets/circuit/monza.png"
};

const singapore_circuit = {
  _id: ObjectId(),
  name: "Marina Bay Street Circuit",
  city: "Singapore",
  country: singapore._id,
  opened: new Date("2008-08-31"),
  length: 5063,
  active: true,
  map: "/static/assets/circuit/singapore.png"
};

const sochi = {
  _id: ObjectId(),
  name: "Sochi Autodrom",
  city: "Sochi",
  country: russia._id,
  opened: new Date("2014-09-21"),
  length: 5848,
  active: true,
  map: "/static/assets/circuit/sochi.png"
};

const suzuka = {
  _id: ObjectId(),
  name: "Suzuka International Racing Course",
  city: "Suzuka",
  country: japan._id,
  opened: new Date("1962-09-20"),
  length: 5807,
  active: true,
  map: "/static/assets/circuit/suzuka.png"
};

const usa_circuit = {
  _id: ObjectId(),
  name: "Circuit of The Americas",
  city: "Austin",
  country: usa._id,
  opened: new Date("2012-10-21"),
  length: 5513,
  active: true,
  map: "/static/assets/circuit/usa.png"
};

const mexico_circuit = {
  _id: ObjectId(),
  name: "Autódromo Hermanos Rodríguez",
  city: "Mexico City",
  country: mexico._id,
  opened: new Date("1962-11-04"),
  length: 4304,
  active: true,
  map: "/static/assets/circuit/mexico.png"
};

const brazil_circuit = {
  _id: ObjectId(),
  name: "Autódromo José Carlos Pace",
  city: "Sao Paulo",
  country: brazil._id,
  opened: new Date("1940-05-12"),
  length: 4309,
  active: true,
  map: "/static/assets/circuit/brazil.png"
};

const emirates_circuit = {
  _id: ObjectId(),
  name: "Yas Marina Circuit",
  city: "Abu Dhabi",
  country: emirates._id,
  opened: new Date("2009-10-07"),
  length: 5554,
  active: true,
  map: "/static/assets/circuit/emirates.png"
};

australia.circuits = [melbourne._id];
bahrain.circuits = [bahrain_circuit._id];
china.circuits = [shanghai._id];
italy.circuits = [monza._id];
vietnam.circuits = [hanoi._id];
netherlands.circuits = [zandvoort._id];
spain.circuits = [barcelona._id];
monaco.circuits = [monaco_circuit._id];
azerbaijan.circuits = [baku._id];
canada.circuits = [canada_circuit._id];
france.circuits = [france_circuit._id];
austria.circuits = [austria_circuit._id];
britain.circuits = [silverstone._id];
hungary.circuits = [hungaroring._id];
belgium.circuits = [spa._id];
singapore.circuits = [singapore_circuit._id];
russia.circuits = [sochi._id];
japan.circuits = [suzuka._id];
usa.circuits = [usa_circuit._id];
mexico.circuits = [mexico_circuit._id];
brazil.circuits = [brazil_circuit._id];
emirates.circuits = [emirates_circuit._id];

// insert documents into DB
db.drivers.insertMany([
  hamilton,
  bottas,
  vettel,
  leclerc,
  verstappen,
  albon,
  sainz,
  norris,
  hulkenberg,
  ricciardo,
  gasly,
  kvyat,
  perez,
  stroll,
  raikkonen,
  giovinazzi,
  magnussen,
  grosjean,
  kubica,
  russell
]);
db.teams.insertMany([
  mercedes,
  ferrari,
  redbull,
  mclaren,
  renault,
  toroRosso,
  racingPoint,
  alfaRomeo,
  haas,
  williams
]);
db.countries.insertMany([
  britain,
  finland,
  germany,
  monaco,
  netherlands,
  thailand,
  italy,
  spain,
  australia,
  france,
  russia,
  bahrain,
  china,
  austria,
  azerbaijan,
  belgium,
  brazil,
  canada,
  hungary,
  japan,
  mexico,
  poland,
  singapore,
  usa,
  vietnam,
  denmark,
  switzerland
]);
db.residences.insertMany([
  mercedes_residence,
  ferrari_residence,
  redbull_residence,
  mclaren_residence,
  renault_residence,
  toroRosso_residence,
  racingPoint_residence,
  alfaRomeo_residence,
  haas_residence,
  williams_residence
]);
db.circuits.insertMany([
  melbourne,
  bahrain_circuit,
  shanghai,
  hanoi,
  zandvoort,
  barcelona,
  monaco_circuit,
  baku,
  canada_circuit,
  france_circuit,
  austria_circuit,
  silverstone,
  hungaroring,
  spa,
  monza,
  singapore_circuit,
  sochi,
  suzuka,
  usa_circuit,
  mexico_circuit,
  brazil_circuit,
  emirates_circuit
]);
db.cars.insertMany([
  ferrari_car,
  mercedes_car,
  redbull_car,
  mclaren_car,
  renault_car,
  toroRosso_car,
  racingPoint_car,
  alfaRomeo_car,
  haas_car,
  williams_car
]);
