// @flow

const token =
	'BQApgu7iRbkvNxseOAxKSk-m8x1YvPQw1eMCcM4mM0WewFFhfPUM9gI_MBY-g9yTZer77L6B0UU7niwL7dML1IOcSxCnJKEB0OnOzugvE1npKCOIrKrDc2_lJCA9h7eOVFPVFDMWVBB3S1R7_x3zauAirpB4FEN36-klqPD54vm8Q9KTb2gpxb3NurqcV8kdVXHhbPSjP3FoMZRqZARL7D1oc5FGgVAlOq2IU3LkdFzjPW-Uxbn5eqsb9hSJi4ZklVbZI3MPAzYCot_zRmAfpZVJpmo';

export default async function categories() {
	const response = await fetch(`https://api.spotify.com/v1/browse/categories`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		}
	});

	if (!response.ok) {
		return {
			error: 'Error at obtain data categories'
		};
	}

	const categories = await response.json().then((res) => res.categories.items);

	return categories.map(({ href, id, name }) => {
		return {
			href,
			// icons,
			id,
			name
		};
	});
}
