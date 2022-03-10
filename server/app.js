const { SERVER_PORT, MONGO_USERNAME, MONGO_PASSWORD } = require("./config");

const express = require("express");
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const mongoUrl = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@graphql-database:27017/?retryWrites=true&w=majority`;

const app = express();

app.use(cors({}));

mongoose.connect(mongoUrl);
mongoose.connection.once("open", () => {
    console.log("Connected to database");
});

app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(SERVER_PORT, () => {
    console.log("Listening request from localhost: " + SERVER_PORT)
});