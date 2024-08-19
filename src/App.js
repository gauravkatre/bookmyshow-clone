import React from "react";
import axios from "axios";
import DefaultHOC from "./HOC/default.hoc";
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/movie.page";
import Playspage from "./pages/plays.page";
import MovieHOC from "./HOC/movie.hoc";


axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    
      <>
     <DefaultHOC path="/" exact component={HomePage}/>
     <MovieHOC path="/movie/:id" exact component={MoviePage}/>
     <DefaultHOC path="/plays" exact component={Playspage} />

      </>
    
  );
}

export default App;
