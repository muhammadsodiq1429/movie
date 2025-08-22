import { memo } from "react";
import Hero from "./components/hero";

const Home = () => {
  return (
    <div className="Home">
      <h2>Home</h2>
      <Hero />
    </div>
  );
};

export default memo(Home);
