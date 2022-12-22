// // const API_KEY = "668c8839c175c898deba568a7f574970";


// const requests = {
//   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
// };

// export default requests;

// const API_KEY = '9d00c2612fdea4a4be36193ec7112402';
const API_KEY = "668c8839c175c898deba568a7f574970";

const requests = {
			fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
			fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
			fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
			fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
			fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
			fetchWarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
			fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
			fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
			fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
			fetchDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
			fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
			fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
			fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
			fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
			fetchWesternMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
			fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
			fetchHistoryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
			fetchMusicMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
			fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
			fetchScienceFictionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
	
};

export default requests;