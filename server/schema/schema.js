const graphql = require('graphql')

const { GraphQLObjectType } = graphql;

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
            }
        }
    }
});

module.exports = new graphql.GraphQLSchema({
    query: RootQuery,
})

//deneme