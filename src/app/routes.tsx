import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";
const MovieDetail = lazy(() => import("../pages/movie-detail"));
const Home = lazy(() => import("../pages/home"));
const Movie = lazy(() => import("../pages/movie"));
const MainLayout = lazy(() => import("../layout/main/main-layout"));

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "movie", element: <Movie /> },
        { path: "movie/:id", element: <MovieDetail /> },
      ],
    },
  ]);
};

export default memo(AppRoutes);
