

export const  NETFLIX_LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const RecentlyAddedMovies_Options = {


	method: 'GET',
	headers: {
		'x-rapidapi-key': '79ea382de8msh52b739c87a17cf6p1f24c7jsna617248742a8',
		'x-rapidapi-host': 'movies-tv-shows-database.p.rapidapi.com',
		Type: 'get-recently-added-movies'
	}
	
};

export const RecentlyAddedMovies =    'https://movies-tv-shows-database.p.rapidapi.com/?page=1';

 export const AdvanceMovieAPI_options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '79ea382de8msh52b739c87a17cf6p1f24c7jsna617248742a8',
		'x-rapidapi-host': 'advanced-movie-search.p.rapidapi.com'
	}
};



export const PopularMovies_URL = 'https://imdb8.p.rapidapi.com/title/v2/get-popular?first=20&country=US&language=en-US';
export const PopularMovies_Options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '79ea382de8msh52b739c87a17cf6p1f24c7jsna617248742a8',
		'x-rapidapi-host': 'imdb8.p.rapidapi.com'
	}
};





