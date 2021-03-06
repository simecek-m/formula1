// imports
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { loadFiles } = require("@graphql-toolkit/file-loading");
const mongoose = require("mongoose");
const cors = require("cors");
require("module-alias/register");

// constants
const PORT = 8081;
const HOST = "localhost";
const GRAPH_SCHEMA_PATH = "src/graph/schema/**/*.gql";
const GRAPH_RESOLVER_PATH = "src/graph/resolver/**/*.js";
const GRAPH_API_PATH = "/graphql";
const MONGOOSE_CONNECTION = "mongodb://localhost/formula1";
const MONGOOSE_CONFIGURATION = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// express app
const app = express();

// enable all CORS requests
app.use(cors());

// middleware
app.use("/static", express.static("static"));

// graph api
const typeDefs = loadFiles(path.join(__dirname, GRAPH_SCHEMA_PATH));
const resolvers = loadFiles(path.join(__dirname, GRAPH_RESOLVER_PATH));
const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app, path: GRAPH_API_PATH });

// db
mongoose
  .connect(MONGOOSE_CONNECTION, MONGOOSE_CONFIGURATION)
  .then(() => {
    console.log("MongoDB successfully connected!");
  })
  .catch((error) => {
    console.log("Error while connection to MongoDB: ", error);
  });

// run express app
app.listen({ port: PORT, host: HOST }, () => {
  console.log(`Apollo server is running on ${HOST}:${PORT}${GRAPH_API_PATH}`);
});
