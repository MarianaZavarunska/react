const movieURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b1a5f167c9d1cbda7ab4372e15e4d19c&page=1';

const genreURL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=b1a5f167c9d1cbda7ab4372e15e4d19c'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const SEARCH_API_BY_NAME = 'https://api.themoviedb.org/3/search/movie?api_key=b1a5f167c9d1cbda7ab4372e15e4d19c&query=';

const SEARCH_API_BY_GENRE = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc?api_key=b1a5f167c9d1cbda7ab4372e15e4d19c&with_genres=12,13&page=1'

export default movieURL;
export {IMG_PATH, SEARCH_API_BY_NAME, SEARCH_API_BY_GENRE, genreURL};