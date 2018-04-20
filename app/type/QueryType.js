// @flow

import { GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';

import CategoriesType from './CategoriesType';

import categories from '../services/categories';

export default new GraphQLObjectType({
	name: 'Query',
	description: 'The root of all... queries',
	fields: () => ({
		categories: {
			type: new GraphQLList(CategoriesType),
			resolve: async (obj, args, context) => {
				return await categories()
			}
		}
	})
});
