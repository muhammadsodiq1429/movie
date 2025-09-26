import { memo } from "react";
import Hero from "./components/hero";
import MovieView from "../../shared/components/movie-view";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <MovieView count={4} className="mt-[50px]" />
    </div>
  );
};

export default memo(Home);
