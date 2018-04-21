// @flow

import { GraphQLList, GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

const IconType = new GraphQLObjectType({
	name: 'IconsType',
	description: 'TYPES',
	fields: {
		height: { type: GraphQLInt },
		width: { type: GraphQLInt },
		url: { type: GraphQLString }
	}
})


export default new GraphQLObjectType({
	name: 'CategoriesType',
	description: 'Represents Categories Attributes',
	fields: {
		href: {
			type: GraphQLString,
			resolve: (obj) => obj.href
		},
		icons: {
			type: new GraphQLList(IconType),
			resolve: (obj) => { return obj.icons }
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
