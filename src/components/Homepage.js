import React from "react";
import MovieList from "./MovieList";
import MovieForm from "./MovieForm";

const Homepage = () => {
  return (
    <div>

      <section>
        <h2>Add a Movie</h2>
        <MovieForm/>
      </section>
    </div>
  );
};

export default Homepage;