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
		// TEST REFRESH AUTO via fonction de choix aleatoire
		const listMovies = data.results;
		// console.log(listMovies);
		function chooseRandomElement(array) {
			const interval = 5000; // 5 secondes en millisecondes
			let currentIndex = Math.floor(Math.random() * array.length);

			function getRandomElement() {
				const randomElement = array[currentIndex];
				console.log("Élément choisi aléatoirement :", randomElement);
				currentIndex = (currentIndex + 1) % array.length;
			}

			getRandomElement(); // Choisissez un élément aléatoirement immédiatement

			setInterval(getRandomElement, interval); // Choisissez un élément toutes les 5 secondes
		}
		// test de la fn
		// chooseRandomElement(listMovies);

		// const Lefilm = chooseRandomElement(listMovies);
		// console.log(Lefilm);

		const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];
		// console.log(setMovie);
		var banner = document.getElementById("banner");
		var banner_title = document.getElementById("banner_title");
		var banner_desc = document.getElementById("banner_description");

		banner.style.backgroundImage = "url(" + banner_url + setMovie.backdrop_path + ")";
		banner_desc.innerText = truncate(setMovie.overview, 150);
		banner_title.innerText = setMovie.name;

		// movie row
		const headrow = document.getElementById("headrow");
		// creation section
		const row = document.createElement("div");
		row.className = "row";
		row.classList.add("netflixrow");
		headrow.appendChild(row);

		// title section
		const title = document.createElement("h2");
		title.className = "row_title";
		title.innerText = "NETFLIX ORIGINALS";

		row.appendChild(title);

		// add poster section
		const row_posters = document.createElement("div");
		row_posters.className = "row_posters";
		row.appendChild(row_posters);

		data.results.forEach((movie) => {
			const poster = document.createElement("img");
			poster.className = "row_posterLarge";

			var s = movie.name.replace(/\s+/g, "");
			poster.id = s;

			poster.src = img_url + movie.poster_path;
			poster.alt = movie.title ? movie.title : movie.name;
			poster.title = movie.title ? movie.title : movie.name;
			row_posters.appendChild(poster);
		});
	});

// Trending

// Top Rated

fetch(requests.fetchTrending)
	.then((res) => res.json())
	.then((data) => {
		const headrow = document.getElementById("headrow");
		// creation section
		const row = document.createElement("div");
		row.className = "row";
		row.classList.add("popularrow");
		headrow.appendChild(row);

		// title section
		const title = document.createElement("h2");
		title.className = "row_title";
		title.innerText = "Top Rated";

		row.appendChild(title);

		// add poster section
		const row_posters = document.createElement("div");
		row_posters.className = "row_posters";
		row.appendChild(row_posters);

		data.results.forEach((movie) => {
			// console.log(movie);
			const poster = document.createElement("img");
			poster.className = "row_posterLarge";

			var s2 = movie.id;
			poster.id = s2;

			poster.src = img_url + movie.poster_path;
			poster.alt = movie.title ? movie.title : movie.name;
			poster.title = movie.title ? movie.title : movie.name;
			// TEST
			const overview = document.createElement("h3");
			overview.innerText = truncate(movie.overview, 150);

			// TEST
			row_posters.appendChild(poster);
			// console.log(poster);
		});
	});

// Actions movies

fetch(requests.fetchActionMovies)
	.then((res) => res.json())
	.then((data) => {
		const headrow = document.getElementById("headrow");
		// creation section
		const row = document.createElement("div");
		row.className = "row";
		row.classList.add("actionrow");
		headrow.appendChild(row);

		// title section
		const title = document.createElement("h2");
		title.className = "row_title";
		title.innerText = "Action Movies";

		row.appendChild(title);

		// add poster section
		const row_posters = document.createElement("div");
		row_posters.className = "row_posters";
		row.appendChild(row_posters);

		data.results.forEach((movie) => {
			// console.log(movie);
			const poster = document.createElement("img");
			poster.className = "row_posterLarge";

			var s2 = movie.id;
			poster.id = s2;

			poster.src = img_url + movie.poster_path;

			poster.alt = movie.title ? movie.title : movie.name;
			poster.title = movie.title ? movie.title : movie.name;
			row_posters.appendChild(poster);
		});
	});

// Fantasy Movies
fetch(requests.fetchFantasyMovies)
	.then((res) => res.json())
	.then((data) => {
		const headrow = document.getElementById("headrow");
		// creation section
		const row = document.createElement("div");
		row.className = "row";
		row.classList.add("fantasyrow");
		headrow.appendChild(row);

		// title section
		const title = document.createElement("h2");
		title.className = "row_title";
		title.innerText = "Fantasy Movies";

		row.appendChild(title);

		// add poster section
		const row_posters = document.createElement("div");
		row_posters.className = "row_posters";
		row.appendChild(row_posters);

		data.results.forEach((movie) => {
			// console.log(movie);
			const poster = document.createElement("img");
			poster.className = "row_posterLarge";

			var s2 = movie.id;
			poster.id = s2;

			poster.src = img_url + movie.poster_path;
			poster.alt = movie.title ? movie.title : movie.name;
			poster.title = movie.title ? movie.title : movie.name;
			row_posters.appendChild(poster);
		});
	});

// Animation Movies
fetch(requests.fetchAnimationMovies)
	.then((res) => res.json())
	.then((data) => {
		const headrow = document.getElementById("headrow");
		// creation section
		const row = document.createElement("div");
		row.className = "row";
		row.classList.add("animationrow");
		headrow.appendChild(row);

		// title section
		const title = document.createElement("h2");
		title.className = "row_title";
		title.innerText = "Animation Movies";

		row.appendChild(title);

		// add poster section
		const row_posters = document.createElement("div");
		row_posters.className = "row_posters";
		row.appendChild(row_posters);

		data.results.forEach((movie) => {
			// console.log(movie);
			const poster = document.createElement("img");
			poster.className = "row_posterLarge";

			var s2 = movie.id;
			poster.id = s2;

			poster.src = img_url + movie.poster_path;
			poster.alt = movie.title ? movie.title : movie.name;
			poster.title = movie.title ? movie.title : movie.name;
			row_posters.appendChild(poster);
		});
	});

// Comedy Movies
fetch(requests.fetchComedyMovies)
	.then((res) => res.json())
	.then((data) => {
		const headrow = document.getElementById("headrow");
		// creation section
		const row = document.createElement("div");
		row.className = "row";
		row.classList.add("comedyrow");
		headrow.appendChild(row);

		// title section
		const title = document.createElement("h2");
		title.className = "row_title";
		title.innerText = "Comedy Movies";

		row.appendChild(title);

		// add poster section
		const row_posters = document.createElement("div");
		row_posters.className = "row_posters";
		row.appendChild(row_posters);

		data.results.forEach((movie) => {
			// console.log(movie);
			const poster = document.createElement("img");
			poster.className = "row_posterLarge";

			var s2 = movie.id;
			poster.id = s2;

			poster.src = img_url + movie.poster_path;
			poster.alt = movie.title ? movie.title : movie.name;
			poster.title = movie.title ? movie.title : movie.name;
			row_posters.appendChild(poster);
		});
	});

// Horror Movies
fetch(requests.fetchHorrorMovies)
	.then((res) => res.json())
	.then((data) => {
		const headrow = document.getElementById("headrow");
		// creation section
		const row = document.createElement("div");
		row.className = "row";
		row.classList.add("horrorrow");
		headrow.appendChild(row);

		// title section
		const title = document.createElement("h2");
		title.className = "row_title";
		title.innerText = "Horror Movies";

		row.appendChild(title);

		// add poster section
		const row_posters = document.createElement("div");
		row_posters.className = "row_posters";
		row.appendChild(row_posters);

		data.results.forEach((movie) => {
			// console.log(movie);
			const poster = document.createElement("img");
			poster.className = "row_posterLarge";

			var s2 = movie.id;
			poster.id = s2;

			poster.src = img_url + movie.poster_path;
			poster.alt = movie.title ? movie.title : movie.name;
			poster.title = movie.title ? movie.title : movie.name;
			row_posters.appendChild(poster);
		});
	});

// Romance Movies
fetch(requests.fetchRomanceMovies)
	.then((res) => res.json())
	.then((data) => {
		const headrow = document.getElementById("headrow");
		// creation section
		const row = document.createElement("div");
		row.className = "row";
		row.classList.add("romancerow");
		headrow.appendChild(row);

		// title section
		const title = document.createElement("h2");
		title.className = "row_title";
		title.innerText = "Romance Movies";

		row.appendChild(title);

		// add poster section
		const row_posters = document.createElement("div");
		row_posters.className = "row_posters";
		row.appendChild(row_posters);

		data.results.forEach((movie) => {
			// console.log(movie);
			const poster = document.createElement("img");
			poster.className = "row_posterLarge";

			var s2 = movie.id;
			poster.id = s2;

			poster.src = img_url + movie.poster_path;
			poster.alt = movie.title ? movie.title : movie.name;
			poster.title = movie.title ? movie.title : movie.name;
			row_posters.appendChild(poster);
		});
	});

// Documentaries
fetch(requests.fetchDocumentaries)
	.then((res) => res.json())
	.then((data) => {
		const headrow = document.getElementById("headrow");
		// creation section
		const row = document.createElement("div");
		row.className = "row";
		row.classList.add("documentaryrow");
		headrow.appendChild(row);

		// title section
		const title = document.createElement("h2");
		title.className = "row_title";
		title.innerText = "Documentaries ";

		row.appendChild(title);

		// add poster section
		const row_posters = document.createElement("div");
		row_posters.className = "row_posters";
		row.appendChild(row_posters);

		data.results.forEach((movie) => {
			// console.log(movie);
			const poster = document.createElement("img");
			poster.className = "row_posterLarge";

			var s2 = movie.id;
			poster.id = s2;

			poster.src = img_url + movie.poster_path;
			poster.alt = movie.title ? movie.title : movie.name;
			poster.title = movie.title ? movie.title : movie.name;
			row_posters.appendChild(poster);
		});
	});
