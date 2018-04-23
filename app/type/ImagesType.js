
import { GraphQLList, GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';


export default new GraphQLObjectType({
    name: 'ImagesType',
    description: 'Use for return image data',
    fields: {
        height: { type: GraphQLInt },
        width: { type: GraphQLInt },
        url: { type: GraphQLString },
        href: { type: GraphQLString }
    }
})