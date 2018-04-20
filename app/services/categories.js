// @flow

// const token =
// 	'BQApgu7iRbkvNxseOAxKSk-m8x1YvPQw1eMCcM4mM0WewFFhfPUM9gI_MBY-g9yTZer77L6B0UU7niwL7dML1IOcSxCnJKEB0OnOzugvE1npKCOIrKrDc2_lJCA9h7eOVFPVFDMWVBB3S1R7_x3zauAirpB4FEN36-klqPD54vm8Q9KTb2gpxb3NurqcV8kdVXHhbPSjP3FoMZRqZARL7D1oc5FGgVAlOq2IU3LkdFzjPW-Uxbn5eqsb9hSJi4ZklVbZI3MPAzYCot_zRmAfpZVJpmo';

const client_id = '90f0afe3811b4a0184f92d2530a89f66';
const client_secret = 'd920941478344d9a9844ab61d5fe8359';

export default async function categories() {
	const response = await fetch(`https://api.spotify.com/v1/browse/categories`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Basic ' + new Buffer(client_id + ':' + client_secret).toString('base64')
		}
	});

	if (!response.ok) {
		return {
			error: 'Error at obtain data categories'
		};
	}

	const categoriesData: string = await response.json().then((res) => res.categories.items);

	return categoriesData.map((category) => {
		console.log(category);

		return {
			href: category.href,
			// icons: category.icons,
			id: category.id,
			name: category.name
		};
	});
}
