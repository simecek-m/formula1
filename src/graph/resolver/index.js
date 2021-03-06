// import
const { GraphQLScalarType } = require("graphql");
const moment = require("moment");

// mongoose models
const Driver = require("@database/queries/driver");
const Team = require("@database/queries/team");
const Country = require("@database/queries/country");
const DriverSeason = require("@database/model/driver/DriverSeason");
const TeamSeason = require("@database/model/team/TeamSeason");
const Car = require("@database/model/car/Car");
const Circuit = require("@database/model/circuit/Circuit");
const Race = require("@database/model/race/Race");
const Season = require("@database/model/season/Season");
const Factory = require("@database/model/team/Factory");
const Qualifying = require("@database/model/race/Qualifying");
const FastestLap = require("@database/model/race/FastestLap");

const resolvers = {
  Query: {
    drivers: (_, { filter, sort, limit }) => Driver.find(filter, sort, limit),
    driver: (_, { id }) => Driver.findById(id),
    driverSeasons: () => DriverSeason.find(),
    teams: (_, { filter, sort, limit }) => Team.find(filter, sort, limit),
    teamSeasons: () => TeamSeason.find(),
    cars: (_, { filter, sort, limit }) =>
      Car.find(filter).sort(sort).limit(limit),
    countries: (_, { filter, sort, limit }) =>
      Country.find(filter, sort, limit),
    factories: () => Factory.find(),
    circuits: (_, { filter, sort, limit }) =>
      Circuit.find(filter).sort(sort).limit(limit),
    seasons: (_, { filter, sort, limit }) =>
      Season.find(filter).sort(sort).limit(limit),
    races: (_, { filter, sort, limit }) =>
      Race.find(filter).sort(sort).limit(limit),
  },
  SortDirection: {
    ASC: 1,
    DESC: -1,
  },
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date without time (YYYY-MM-DD)",
    serialize(value) {
      return moment(value).format("YYYY-MM-DD");
    },
  }),
  Driver: {
    height: (obj, args) => {
      switch (args.unit) {
        case "CENTIMETER":
          return obj.height * 100;
        case "KILOMETER":
          return obj.height * 0.001;
        case "INCH":
          return obj.height * 39.3700787;
        case "FOOT":
          return obj.height * 3.2808399;
        case "YARD":
          return obj.height * 1.0936133;
        case "MILE":
          return obj.height * 0.000621371192;
        default:
          return obj.height;
      }
    },
    country: ({ country }) => Country.findById(country),
    driverSeasons: ({ driverSeasons }) =>
      DriverSeason.find({ _id: { $in: driverSeasons } }),
  },
  DriverSeason: {
    teams: ({ teams }, { filter, sort, limit }) =>
      Team.find(filter, sort, limit, teams),
    cars: ({ cars }) => Car.find({ _id: { $in: cars } }),
    driver: ({ driver }) => Driver.findById(driver),
    races: ({ races }) => Race.find({ _id: { $in: races } }),
    season: ({ season }) => Season.findById(season),
  },
  Team: {
    factory: ({ factory }) => Factory.findById(factory),
    teamSeasons: ({ teamSeasons }) =>
      TeamSeason.find({ _id: { $in: teamSeasons } }),
  },
  TeamSeason: {
    team: ({ team }) => Team.findById(team),
    races: ({ races }) => Race.find({ _id: { $in: races } }),
    car: ({ car }) => Car.findById(car),
    drivers: ({ drivers }, { filter, sort, limit }) =>
      Driver.find(filter, sort, limit, drivers),
    season: ({ season }) => Season.findById(season),
  },
  Car: {
    drivers: ({ drivers }, { filter, sort, limit }) =>
      Driver.find(filter, sort, limit, drivers),
    team: ({ team }) => Team.findById(team),
    season: ({ season }) => Season.findById(season),
  },
  Factory: {
    country: ({ country }) => Country.findById(country),
    team: ({ team }) => Team.findById(team),
  },
  Country: {
    drivers: ({ drivers }, { filter, sort, limit }) =>
      Driver.find(filter, sort, limit, drivers),
    factories: ({ factories }) => Factory.find({ _id: { $in: factories } }),
    circuits: ({ circuits }, { filter, sort, limit }) =>
      Circuit.find({ _id: { $in: circuits }, ...filter })
        .sort(sort)
        .limit(limit),
  },
  Circuit: {
    length: (obj, args) => {
      switch (args.unit) {
        case "CENTIMETER":
          return obj.length * 100;
        case "KILOMETER":
          return obj.length * 0.001;
        case "INCH":
          return obj.length * 39.3700787;
        case "FOOT":
          return obj.length * 3.2808399;
        case "YARD":
          return obj.length * 1.0936133;
        case "MILE":
          return obj.length * 0.000621371192;
        default:
          return obj.length;
      }
    },
    country: ({ country }) => Country.findById(country),
    races: ({ races }) => Race.find({ _id: { $in: races } }),
  },
  Season: {
    driverSeasons: ({ drivers }) =>
      DriverSeason.find({ _id: { $in: drivers } }),
    teamSeasons: ({ teams }) => TeamSeason.find({ _id: { $in: teams } }),
    races: ({ races }) => Race.find({ _id: { $in: races } }),
    cars: ({ cars }) => Car.find({ _id: { $in: cars } }),
  },
  Race: {
    season: ({ season }) => Season.findById(season),
    circuit: ({ circuit }) => Circuit.findById(circuit),
    qualifying: ({ qualifying }, { filter, sort, limit }) =>
      Qualifying.find({ _id: { $in: qualifying }, ...filter })
        .sort(sort)
        .limit(limit),
    fastestLaps: async ({ fastestLaps }) =>
      FastestLap.find({ _id: { $in: fastestLaps } }),
    // TODO: results: ({ results }) => Result.find({ _id: { $in: results }})
  },
  Qualifying: {
    driver: ({ driver }) => Driver.findById(driver),
    team: ({ team }) => Team.findById(team),
  },
  FastestLap: {
    driver: ({ driver }) => Driver.findById(driver),
    team: ({ team }) => Team.findById(team),
  },
  /* TODO: result resolver
  Result: {
    driver: ({ driver }) => Driver.findById(driver),
    team: ({ team }) => Team.findById(team)
  }
  */
};

module.exports = resolvers;
