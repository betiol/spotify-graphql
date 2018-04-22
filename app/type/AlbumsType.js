// @flow

import { GraphQLList, GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';
import ImagesType from './ImagesType'
import ArtistsType from './ArtistsType'
export default new GraphQLObjectType({
    name: 'AlbumsType',
    description: 'Represents Albums Attributes',
    fields: {
        album_type: {
            type: GraphQLString,
            resolve: (obj) => obj.album_type
        },
        images: {
            type: new GraphQLList(ImagesType),
            resolve: (obj) => obj.images
        },
        artists: {
            type: new GraphQLList(ArtistsType),
            resolve: (obj) => obj.artists
        }
    }
});
