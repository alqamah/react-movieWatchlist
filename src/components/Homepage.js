import React from "react";
import MovieForm from "./MovieForm";

const Homepage = () => {
  return (
    <div>
      <section>
        <h2>Add a Movie</h2>
        <h3>Enter details of the movie to add to the watchlist</h3>
        <MovieForm/>
      </section>
    </div>
  );
};

export default Homepage;