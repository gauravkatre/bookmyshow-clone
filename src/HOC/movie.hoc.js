//transform one component to another component
//adding additional functionality

import React from "react";
import {Route} from "react-router-dom";

import MovieLayout from "../layouts/movie.layout";

const MovieHOC = ({ component:Component ,...rest}) => {
   return (
    <>
    <Route
    {...rest}

    component = {(props) => (
        <MovieLayout>
            <Component {...props} />
        </MovieLayout>
    )

    }
    />
    </>
   );
};

export default MovieHOC;