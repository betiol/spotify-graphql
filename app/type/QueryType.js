// @flow

import { GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';

import CategoriesType from './CategoriesType';
import AlbumsType from './AlbumsType';

import categories from '../services/categories';
import albums from '../services/albums'

export default new GraphQLObjectType({
	name: 'Query',
	description: 'The root of all... queries',
	fields: () => ({
		categories: {
			type: new GraphQLList(CategoriesType),
			resolve: async (obj, args, ctx) => {
				return await categories()
			}
		},
		albums: {
			type: new GraphQLList(AlbumsType),
			args: {
				albumId: {
					type: new GraphQLNonNull(new GraphQLList(GraphQLString))
				}
			},
			resolve: async (obj, args, ctx) => {
				return await albums(args.albumId)
			}
		}
	})
});
