import cars from '../data/cars.json';

export type Car = {
	id: number;
	make: string;
	model: string;
	year: number;
	mileageKm: number;
	priceDkk: number;
	NumberOfOwners: number;
};

export function listCars(): Car[] {
	return cars;
}
