import Chip from '@mui/material/Chip';
import axios from 'axios';
import { useEffect } from 'react';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import { grey, yellow } from '@mui/material/colors';

function Genres({genres, setGenres, choosedGenres, setChoosedGenres}) {
  
    const getGenres = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`);
        setGenres(data?.genres);
    };

    useEffect(() => {
      getGenres();
    }, []);

    const handleAddGenres = genre => {
      setChoosedGenres([...choosedGenres, genre]);
      setGenres(genres.filter(g => g.id !== genre.id));
    };

    const handleDeleteGenres = genre => {
      setChoosedGenres(choosedGenres?.filter(selected => selected?.id !== genre?.id));
      setGenres([...genres, genre]);
    };
    
    const theme = createTheme({
      palette: {
        primary: {
          main: grey[800]
        },
        secondary: {
          main: yellow[600]
        },
      },
    });

  return (
    <ThemeProvider theme={theme}>
      <div className='genresContainer' style={{padding: "10px"}}>
        {choosedGenres?.map(genre => (
          <Chip 
          key={genre.id} 
          clickable
          label={genre.name}
          color='secondary'
          onDelete={() => handleDeleteGenres(genre)}
          />
        ))}
        {genres.map(genre => (
          <Chip 
          key={genre.id} 
          clickable
          style={{fontSize: '1em', margin: '3px'}}
          label={genre.name} 
          color='primary'
          onClick={() => handleAddGenres(genre)}
          ></Chip>
        ))}
      </div>
    </ThemeProvider>
  )
}

export default Genres;