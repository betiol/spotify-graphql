// @flow

import { GraphQLList, GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';
import ImagesType from './ImagesType'

export default new GraphQLObjectType({
	name: 'CategoriesType',
	description: 'Represents Categories Attributes',
	fields: {
		href: {
			type: GraphQLString,
			resolve: (obj) => obj.href
		},
		icons: {
			type: new GraphQLList(ImagesType),
			resolve: (obj) => obj.icons
		},
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
