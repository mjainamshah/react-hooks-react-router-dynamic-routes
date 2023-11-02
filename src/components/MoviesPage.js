import React from "react";
import { Route, useRouteMatch } from "react-router-dom"; // import the custom `useRouteMatch` hook from React Router
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow"; // import the MovieShow component

function MoviesPage({ movies }) {
  const match = useRouteMatch (); // useRouteMatch returns a special object with information about the currently matched route
  

  return (
    <div>
      <MoviesList movies={movies} />
      <Route exact path = {match.url}> {/* Adding code to show a message to the user to select a movie if they haven't yet */}
        <h3> Choose a movie from the above list</h3>
      </Route> 

      <Route path = {`${match.url}`}>
        <Movieshow movies={movies}/>
      </Route>
    </div>
  );
}
export default MoviesPage;
