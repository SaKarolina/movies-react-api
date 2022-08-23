import { Button } from '@mui/material';
import star from '../Images/star.svg';
import "./searchResultCard.scss";

function SearchResultCard ({movie}) {

  return (
    <div className="front-list-container card-container">
      <div className="result-card">
        <div className="poster-wrapper">
          {movie.poster_path ? (
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`}></img>
          ) : (
            <div className="filler-poster"></div>
          )}
        </div>

        <div className="info-SearchCard">
          <h3 className="title-SearchCard">{movie.title} ({movie.release_date ? movie.release_date.substring(0, 4) : '-'})</h3>
          <p className="language-SearchCard">Original language: {movie.original_language.toUpperCase()}</p>
          <div className="vote-SearchCard">
            <img className='starImg-SearchCard' src={star} alt='star'></img>
              <div>
                <p style={{fontWeight: '700'}}>{movie.vote_average}/10</p>
                <p style={{fontSize: '10px', color: '#a4a4a4'}}>{movie.vote_count} votes</p>
              </div>
          </div>
          <p className='overview-SearchCard'>{movie.overview ? movie.overview : 'No description'}</p>
          <Button className="watchBtn watchBtn-SearchCard" variant="outlined" color="success" size="small">Watch Trailer</Button>
        </div>
      </div>

    </div>
  )
}
export default SearchResultCard;