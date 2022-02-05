const graphql = require('graphql')

const { GraphQLObjectType } = graphql;

//dummy data
var books = [
    { name: "Name of the Wind", genre: "Fantasy", id: "1"},
    { name: "The Final Empire", genre: "Fantasy", id: "2"},
    { name: "The Long Earth", genre: "Sci-Fi", id: "3"},
]

const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: { type: graphql.GraphQLString },
        name: { type: graphql.GraphQLString },
        genre: { type: graphql.GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        book: {
            type: BookType,
            args: { id: { type: graphql.GraphQLString } }
            resolve(parent, args) {
                //code to get data from db / other sources
                return _.find(books, {id: args.id});
            }
        }
    }
});

module.exports = new graphql.GraphQLSchema({
    query: RootQuery,
});