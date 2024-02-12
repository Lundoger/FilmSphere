type CatalogParams = {
	genre?: string;
	rating?: string;
	year?: string;
	sort?: string;
}

type Id = number | null | undefined;

export const paths = {
	home: '/',
	band: '#',
	movies: '/films',
	series: '/series',
	profile: '/profile',
	cartoons: '/cartoons',
	anime: '/anime',

	// Get the URL for the movie catalog page
	catalog: (params: CatalogParams): string => {
		const searchParams = new URLSearchParams({ ...params });
		const url = `/films?${searchParams}`;

		return url;
	},

	// Get the URL for the movie page
	movie: (id: Id): string => `/film/${id}`,

	// Get the URL for the person page
	person: (id: Id): string => `/name/${id}`,
}