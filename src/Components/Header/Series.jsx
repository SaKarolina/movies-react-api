import React, { useEffect, useState } from 'react'
import Card from '../Card';
import AppPagination from '../Pagination/AppPagination';
import Genres from './Genres';
import genresIDs from '../../utils/genresID';

function Series() {
  const [series, setSeries] = useState([]);
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState([]);
  const [choosedGenres, setChoosedGenres] = useState([]);

  const genresIds = genresIDs(choosedGenres);

  const getSeries = () => {
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0&with_genres=${genresIds}`)
      .then((res) => res.json())
      .then((data) => {
        const dataCopy = data.results;
        if (dataCopy !== null) {
          setSeries(dataCopy);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getSeries();
  }, [page, choosedGenres]);

  return (
    <>
    <Genres genres={genres} setGenres={setGenres} choosedGenres={choosedGenres} setChoosedGenres={setChoosedGenres}></Genres>
    <div>
      <h1 className="pageTitle">TV Series</h1>
      <ul className="front-list-container">
        {series &&
          series.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title || movie.name}
              date={movie.first_air_date || movie.release_date}
              media_type='Tv Series'
              vote_average={movie.vote_average}
              votes={movie.vote_count}
            />
          ))}
      </ul>
    <AppPagination setPage={setPage}></AppPagination>
    </div>
    </>
  )
}

export default Series;