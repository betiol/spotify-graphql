// @flow

import { GraphQLList, GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';
import ImagesType from './ImagesType'
import ArtistsType from './ArtistsType'
import TracksType from './TracksType'

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
        },
        external_ids: {
            type: GraphQLString,
            resolve: (obj) => obj.external_ids
        },
        external_urls: {
            type: GraphQLString,
            resolve: (obj) => obj.external_urls
        },
        href: {
            type: GraphQLString,
            resolve: (obj) => obj.href
        },
        id: {
            type: GraphQLString,
            resolve: (obj) => obj.id
        },
        label: {
            type: GraphQLString,
            resolve: (obj) => obj.label
        },
        name: {
            type: GraphQLString,
            resolve: (obj) => obj.name
        },
        popularity: {
            type: GraphQLInt,
            resolve: (obj) => obj.popularity
        },
        release_date: {
            type: GraphQLString,
            resolve: (obj) => obj.release_date
        },
        release_date_precision: {
            type: GraphQLString,
            resolve: (obj) => obj.release_date_precision
        },
        uri: {
            type: GraphQLString,
            resolve: (obj) => obj.uri
        },
        tracks: {
            type: new GraphQLList(TracksType),
            resolve: (obj) => obj.tracks
        }
    }
});