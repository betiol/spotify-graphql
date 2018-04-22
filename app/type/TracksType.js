
import { GraphQLList, GraphQLBoolean, GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';
import ArtistsType from './ArtistsType'
import AvailableMarketsType from './AvailableMarketsType'

export default new GraphQLObjectType({
    name: 'TracksType',
    description: 'Use for return tracks data',
    fields: {
        artists: { type: new GraphQLList(ArtistsType) },
        disc_number: { type: GraphQLInt },
        duration_ms: { type: GraphQLInt },
        explicit: { type: GraphQLBoolean },
        id: { type: GraphQLString },
        uri: { type: GraphQLString },
        external_urls: { type: new GraphQLList(GraphQLString) },
        href: { type: GraphQLString },
        id: { type: GraphQLString },
        is_local: { type: GraphQLBoolean },
        name: { type: GraphQLString },
        preview_url: { type: GraphQLString },
        track_number: { type: GraphQLInt },
        type: { type: GraphQLString }
    }
})
