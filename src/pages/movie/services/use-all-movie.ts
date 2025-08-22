import { useQuery } from "@tanstack/react-query";
import { api } from "../../../shared/api";

export const allMovieKey = "all-movie-key";

export const useMovie = () => {
  const getAllMovie = () =>
    useQuery({
      queryFn: () => api.get(`discover/movie`).then((res) => res.data),
      queryKey: [allMovieKey],
    });

  return { getAllMovie };
};
