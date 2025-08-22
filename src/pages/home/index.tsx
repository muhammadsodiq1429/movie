import { memo } from "react";
import Hero from "./components/hero";
import MovieView from "../../shared/components/movie-view";

const Home = () => {
  return (
    <div className="Home">
      <h2>Home</h2>
      <Hero />
      {/* <MovieView /> */}
    </div>
  );
};

export default memo(Home);
