import { useEffect, useState } from 'react';
import Card from '../Card';
import Genres from './Genres';
import '../../app.scss';
import AppPagination from '../Pagination/AppPagination';

function Movies() {

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState([]);
  // console.log(genres);

  const getMovies = () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const dataCopy = data.results;
        if (dataCopy !== null) {
          setMovies(dataCopy);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getMovies();
  }, [page]);

  return (
    <>
    <Genres genres={genres} setGenres={setGenres}></Genres>
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
    <AppPagination setPage={setPage}></AppPagination>
    </>
  )
}

export default Movies;