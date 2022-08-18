import Chip from '@mui/material/Chip';
import axios from 'axios';
import { useEffect } from 'react';

function Genres({genres, setGenres}) {
  
    const getGenres = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`);
        setGenres(data?.genres);
    };

    useEffect(() => {
      getGenres();
    }, []);
    

  return (
    <div style={{padding: "10px"}}>
      {genres.map(genre => (
        <Chip 
        key={genre.id} 
        clickable
        style={{fontSize: '1em', margin: '3px'}}
        label={genre.name} 
        color='warning'
        ></Chip>
      ))}
    </div>
  )
}

export default Genres;