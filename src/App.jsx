import "./app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Trending from "./Components/Header/Trending";
import Movies from "./Components/Header/Movies";
import Series from "./Components/Header/Series";
import Search from "./Components/Header/Search";
import Favorites from "./Components/Header/Favorites";
import NotFound from "./Components/NotFound";
// import { Container } from '@mui/material';


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        {/* <Container> */}
            <Routes>
                <Route path="/movies-react-api" element={<Trending></Trending>} />
                <Route path="/movies" element={<Movies></Movies>} />
                <Route path="/series" element={<Series></Series>} />
                <Route path="/favorites" element={<Favorites></Favorites>} />
                <Route path="/search" element={<Search></Search>} />
                <Route path='*' element={<NotFound></NotFound>}/>
            </Routes>
        {/* </Container> */}

        
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
