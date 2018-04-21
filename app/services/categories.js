// @flow
import confg from './config'
import { spotifyApi, credentialsAccess } from './config'

export default async function categories() {
	let data = await credentialsAccess().then(() => spotifyApi.getCategories())
	let categoriesData = await data.body.categories.items
	return categoriesData.map((category) => {
		return {
			href: category.href,
			//  icons: category.icons,
			id: category.id,
			name: category.name
		};
	});
}
