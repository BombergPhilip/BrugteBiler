import { json } from '@sveltejs/kit';

import { listCars } from '../../../../Server/api/cars';

export function GET() {
	return json({ cars: listCars() });
}
