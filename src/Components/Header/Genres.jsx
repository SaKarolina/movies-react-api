import Chip from '@mui/material/Chip';
import axios from 'axios';

function Genres() {

    const fetchGenres = async () => {
        await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`)
    }

  return (
    <div style={{backgroundColor: "white", padding: "10px"}}>
        <Chip style={{fontSize: '1em', margin: '3px'}}
        label='Movies' 
        color='secondary'
        ></Chip>
    </div>
  )
}

export default Genres;