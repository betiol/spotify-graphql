// @flow

import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

import CategoriesType from './CategoriesType';

import categories from '../services/categories';

export default new GraphQLObjectType({
	name: 'Query',
	description: 'The root of all... queries',
	fields: () => ({
		categories: {
			type: CategoriesType,
			resolve: async (obj, args, context) => {
				return await categories();
			}
		}
	})
});
