import { useEffect, useState } from 'react';
import Card from '../Card';
import Genres from './Genres';
import '../../app.scss';

function Movies() {

  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
      .then((res) => res.json())
      .then((data) => {
        const dataCopy = data.results;
        if (dataCopy !== null) {
          setMovies(dataCopy);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
    <Genres></Genres>
    <div>
      <h1 className="pageTitle">Movies</h1>
      <ul className="front-list-container">
        {movies &&
          movies.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title || movie.name}
              date={movie.first_air_date || movie.release_date}
              media_type='Movie'
              vote_average={movie.vote_average}
              votes={movie.vote_count}
            />
          ))}
      </ul>
    </div>
    </>
  )
}

export default Movies;