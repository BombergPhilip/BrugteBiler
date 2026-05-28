import type { Car } from '../../Server/api/cars';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/api/cars');

	if (!response.ok) {
		return { cars: [] };
	}

	return (await response.json()) as { cars: Car[] };
};
