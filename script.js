// API key from TMBD

// import api from "./.gitignore ";

const api = "api_key=8d567a8d883eaafa5ad118f2c802b560";

// base url of the site
const base_url = "https://api.themoviedb.org/3";
const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w300";

// request for movies data

const requests = {
	fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
	fetchNetflixOriginals: `${base_url}/discover/tv?${api}&with_networks=213`,
	fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
	fetchFantasyMovies: `${base_url}/discover/movie?${api}&with_genres=14`,
	fetchAnimationMovies: `${base_url}/discover/movie?${api}&with_genres=16`,
	fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
	fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
	fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
	fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};

// used truncate the string
function truncate(str, n) {
	return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

// banner
fetch(requests.fetchNetflixOriginals)
	.then((res) => res.json())
	.then((data) => {
		// console.log(data.results);
		// change movie on every refresh

		const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];
		console.log(setMovie);
		var banner = document.getElementById("banner");
		var banner_title = document.getElementById("banner_title");
		var banner_desc = document.getElementById("banner_description");

		banner.style.backgroundImage = "url(" + banner_url + setMovie.backdrop_path + ")";
		banner_desc.style.innerText = truncate(setMovie.overview, 150);
		banner_title.innerText = setMovie.name;
	});

// movie row
