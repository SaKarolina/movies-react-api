import { useEffect, useState } from "react";
import Card from "../Card";
import '../../app.scss';
import AppPagination from "../Pagination/AppPagination";


function Trending() {

  const [weekTrends, setWeekTrends] = useState([]);

  const getTrending = () => {
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const dataCopy = data.results;
        if (dataCopy !== null) {
          setWeekTrends(dataCopy);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getTrending();
  }, []);


  return (
    <div>
      <h1 className="pageTitle">Trending Today</h1>
      <ul className="front-list-container" style={{paddingBottom: "7rem"}}>
        {weekTrends &&
          weekTrends.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title || movie.name}
              date={movie.first_air_date || movie.release_date}
              media_type={movie.media_type}
              vote_average={movie.vote_average}
              votes={movie.vote_count}
            />
          ))}
      </ul>
    </div>
  )
}

export default Trending;