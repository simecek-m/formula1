const connection = new Mongo();
const db = connection.getDB("formula1");
db.dropDatabase();

load("./documents/drivers.js");
load("./documents/teams.js");
load("./documents/cars.js");
load("./documents/countries.js");
load("./documents/factories.js");
load("./documents/circuits.js");

// TODO: races documents
// load("./documents/races.js");

// TODO: driver seasons documents
// load("./documents/driverSeasons.js");

// TODO: team seasons documents
// load("./documents/teamSeasons.js");

// -------------------------- RELATIONSHIPS --------------------------

// DRIVER - DRIVER_SEASONS
// DRIVER - COUNTRY

// TEAM - TEAM_SEASONS
// TEAM - FACTORY

// CAR - DRIVERS
// CAR - TEAM

// COUNTRY - DRIVERS
// COUNTRY - FACTORY
// COUNTRY - CIRCUITS

// FACTORY - COUNTRY
// FACTORY - TEAM

// CIRCUIT - RACES
// CIRCUIT - COUNTRIES

// RACE - CIRCUIT
// RACE - QUALIFYING - DRIVER
// RACE - QUALIFYING - TEAM
// RACE - FASTEST_LAP - DRIVER
// RACE - FASTEST_LAP - TEAM
// RACE - RESULT - DRIVER
// RACE - RESULT - TEAM

// DRIVER_SEASON - DRIVER
// DRIVER_SEASON - TEAMS
// DRIVER_SEASON - CARS
// DRIVER_SEASON - RACES

// TEAM_SEASON - TEAM
// TEAM_SEASON - DRIVERS
// TEAM_SEASON - CARS
// TEAM_SEASON - RACES

// -------------------------- RELATIONSHIPS --------------------------



// -------------------------- INSERT ALL DOCUMENTS WITH RELATIONSHIPS INTO DB --------------------------
// db.drivers.insertMany([
//   hamilton,
//   bottas,
//   vettel,
//   leclerc,
//   verstappen,
//   albon,
//   sainz,
//   norris,
//   hulkenberg,
//   ricciardo,
//   gasly,
//   kvyat,
//   perez,
//   stroll,
//   raikkonen,
//   giovinazzi,
//   magnussen,
//   grosjean,
//   kubica,
//   russell
// ]);
// db.teams.insertMany([
//   mercedes,
//   ferrari,
//   redbull,
//   mclaren,
//   renault,
//   toroRosso,
//   racingPoint,
//   alfaRomeo,
//   haas,
//   williams
// ]);
// db.countries.insertMany([
//   britain,
//   finland,
//   germany,
//   monaco,
//   netherlands,
//   thailand,
//   italy,
//   spain,
//   australia,
//   france,
//   russia,
//   bahrain,
//   china,
//   austria,
//   azerbaijan,
//   belgium,
//   brazil,
//   canada,
//   hungary,
//   japan,
//   mexico,
//   poland,
//   singapore,
//   usa,
//   vietnam,
//   denmark,
//   switzerland
// ]);
// db.residences.insertMany([
//   mercedes_residence,
//   ferrari_residence,
//   redbull_residence,
//   mclaren_residence,
//   renault_residence,
//   toroRosso_residence,
//   racingPoint_residence,
//   alfaRomeo_residence,
//   haas_residence,
//   williams_residence
// ]);
// db.circuits.insertMany([
//   melbourne,
//   bahrain_circuit,
//   shanghai,
//   hanoi,
//   zandvoort,
//   barcelona,
//   monaco_circuit,
//   baku,
//   canada_circuit,
//   france_circuit,
//   austria_circuit,
//   silverstone,
//   hungaroring,
//   spa,
//   monza,
//   singapore_circuit,
//   sochi,
//   suzuka,
//   usa_circuit,
//   mexico_circuit,
//   brazil_circuit,
//   emirates_circuit
// ]);
// db.cars.insertMany([
//   ferrari_car,
//   mercedes_car,
//   redbull_car,
//   mclaren_car,
//   renault_car,
//   toroRosso_car,
//   racingPoint_car,
//   alfaRomeo_car,
//   haas_car,
//   williams_car
// ]);

// -------------------------- INSERT ALL DOCUMENTS WITH RELATIONSHIPS INTO DB --------------------------