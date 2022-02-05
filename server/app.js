const express = require("express");
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const schema = require("./schema/schema");

const app = express();

const NODE_PORT = process.env.NODE_PORT;

app.use("/graphql", graphqlHTTP({
    schema: schema,
}));

app.listen(NODE_PORT, () => {
    console.log("Listening request from localhost: " + NODE_PORT)
});