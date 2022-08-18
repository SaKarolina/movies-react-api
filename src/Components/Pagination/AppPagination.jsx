import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import { yellow } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: yellow[600]
    },
  },
});

function AppPagination({ setPage}) {

    const handleChange = (event, value) => {
        setPage(value);
        window.scroll(0,0);
    }

  return (
    <ThemeProvider theme={theme}>
    <Stack spacing={2} className="pagination">
      <Pagination color="primary" variant="outlined" shape="rounded" onChange={handleChange} count={200}/>
    </Stack>
    </ThemeProvider>
  )
}

export default AppPagination;