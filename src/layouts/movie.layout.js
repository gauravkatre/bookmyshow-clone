import React from "react";
import MovieNavbar from "../Components/Navbar/movie.navbar";

const MovieLayout = (props) => {
    return (
        <>
       <MovieNavbar />
       {props.children}
        
        </>
    );
};

export default MovieLayout;