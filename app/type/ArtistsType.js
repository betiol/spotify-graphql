
import { GraphQLList, GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';


export default new GraphQLObjectType({
    name: 'ArtistsType',
    description: 'Use for return artists data',
    fields: {
        external_urls: { type: GraphQLString },
        href: { type: GraphQLString },
        type: { type: GraphQLString },
        name: { type: GraphQLString },
        id: { type: GraphQLString },
        uri: { type: GraphQLString }
    }
})