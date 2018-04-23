// @flow
import confg from './config'
import { spotifyApi, credentialsAccess } from './config'

async function categories() {
	let data = await credentialsAccess().then(() => spotifyApi.getCategories())
	let categoriesData = await data.body.categories.items
	return categoriesData.map((category) => {
		return {
			href: category.href,
			icons: category.icons,
			id: category.id,
			name: category.name
		};
	});
}

async function categoryByName(name: string) {
	let data = await credentialsAccess().then(() => spotifyApi.getCategory(name))
	let categoriesData = await data.body
	return categoriesData.icons.map((category) => {
		return {
			href: categoriesData.href,
			url: category.url,
			width: category.width,
			height: category.height
		};
	});
}

export { categories, categoryByName }