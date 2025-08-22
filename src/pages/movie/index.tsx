import { memo } from "react";
import { useMovie } from "./services/use-all-movie";
import MovieView from "../../shared/components/movie-view";

const Movie = () => {
  const { getAllMovie } = useMovie();
  const { data } = getAllMovie();

  return (
    <div className="Movie">
      <h2>Movie</h2>
      <MovieView data={data?.results} />
    </div>
  );
};

export default memo(Movie);
