
import { GraphQLList, GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

export default new GraphQLObjectType({
    name: "AvailableMarketsType",
    description: '...',
    fields: {
        available: { type: GraphQLString }
    }
})