import React, { useState } from 'react'
import SearchResultCard from '../SearchResultCard';
import ResultList from '../ResultList';
import logo from '../../Images/movie.svg';
import "./search.scss";

function Search() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState('');

  const findData = (e) => {
    setSearch(e.target.value);
    if(e.target.value.length >= 2) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&query=${e.target.value}`
      )
      .then(res => res.json())
      .then((data) => {
        const dataCopy = data.results;
        setResults(dataCopy);
      })
      .catch(error => console.log(error)); 
    } else {
      setResults([]);
    }
  }

  const selectedMovie = (movie) => {
    setSelected(movie);
    setSearch(movie.title);
  }

  const close = () => {
    setResults([]);
  }

  return (
    <div className='app' onClick={close}>
      <h1 className="pageTitle">Search</h1>
      
      <div className='search'>
      <img className='logo' src={logo} alt='logo'/>
        <input type='search' name='search' id='search' placeholder='Search for a movie...' value={search} onChange={findData}/>
      </div>

      <div className="front-list-container card-container">
        <div className='movies-list'>
          <ul className='results' >
            {results.length > 0 ? 
              results.slice(0, 9).map(movie => (
                <li key={movie.id}>
                  <ResultList movie={movie} selectedMovie={selectedMovie}></ResultList>
                </li>
              ))
            : ''}     
          </ul>
        </div>
      {
        selected && <SearchResultCard movie={selected}></SearchResultCard>
      }
      </div>
      
    </div>
  )
}

export default Search;