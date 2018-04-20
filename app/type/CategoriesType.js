// @flow

import { GraphQLList, GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

export default new GraphQLObjectType({
	name: 'CategoriesType',
	description: 'Represents Categories Attributes',
	fields: {
		href: {
			type: GraphQLString,
			resolve: (obj) => obj.href
		},
		// icons: {
		// 	type: GraphQLList,
		// 	resolve: (obj) => { return obj.map(x => x) }
		// },
		id: {
			type: GraphQLString,
			resolve: (obj) => obj.id
		},
		name: {
			type: GraphQLString,
			resolve: (obj) => obj.name
		}
	}
});
