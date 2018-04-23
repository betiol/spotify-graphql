// @flow

import { GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';

import CategoriesType from './CategoriesType';
import AlbumsType from './AlbumsType';
import ImagesType from './ImagesType'
import { categories, categoryByName } from '../services';
import { albums } from '../services'

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
		categoryByName: {
			type: new GraphQLList(ImagesType),
			args: {
				name: {
					type: new GraphQLNonNull(GraphQLString),
				}
			},
			resolve: async (obj, args, ctx) => {
				return await categoryByName(args.name)
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
