import React, { useEffect, useState } from 'react'
import Card from '../Card';
import Genres from './Genres';

function Series() {
  const [series, setSeries] = useState([]);

  const getSeries = () => {
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`)
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
  }, []);
  return (
    <>
    <Genres></Genres>
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
    </div>
    </>
  )
}

export default Series;