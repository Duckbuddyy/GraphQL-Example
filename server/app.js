const { NODE_PORT, MONGO_USERNAME, MONGO_PASSWORD, MONGO_DATABASE_NAME } = require("./config");

const express = require("express");
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const mongoUrl = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@graphql-cluster.0suav.mongodb.net/${MONGO_DATABASE_NAME}?retryWrites=true&w=majority`;

const app = express();

mongoose.connect(mongoUrl);
mongoose.connection.once("open", () => {
    console.log("Connected to database");
});

app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true,
    extensions({
        result,
      }) {
        console.log(result.data);
      },
}));

app.listen(NODE_PORT, () => {
    console.log("Listening request from localhost: " + NODE_PORT)
});