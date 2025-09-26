import { memo } from "react";
import MovieView from "../../shared/components/movie-view";

const Movie = () => {
  return (
    <div className="Movie">
      <h2>Movie</h2>
      <MovieView skeleton={20} />
    </div>
  );
};

export default memo(Movie);
