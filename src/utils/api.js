// MOVIES
let movies_api = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

//GENRES
let genres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`;

//TV SERIES
let tvSeries = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`;

//VIDEO
let video_api = `https://api.themoviedb.org/3/movie/451048/videos?api_key=${process.env.REACT_APP_MOVIE_KEY}`;