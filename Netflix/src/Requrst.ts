const MY_SECRET_KEY = import.meta.env.VITE_TMDB_KEY;

const request = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${MY_SECRET_KEY}&language=en-US&page=1`,
  requestTopRater: `https://api.themoviedb.org/3/movie/top_rated?api_key=${MY_SECRET_KEY}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/now_playing?api_key=${MY_SECRET_KEY}&language=en-US&page=2`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${MY_SECRET_KEY}&language=en-US&page=1`,
  requestTvSeries: `https://api.themoviedb.org/3/tv/popular?api_key=${MY_SECRET_KEY}&language=en-US&page=1`,
};

export default request;
