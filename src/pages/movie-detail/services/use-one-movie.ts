import { useQuery } from "@tanstack/react-query";
import { api } from "../../../shared/api";

export const oneMovieKey = "one-movie-key";

export const useOneMovie = () => {
  const getOneMovieById = (id: string) =>
    useQuery({
      queryKey: [oneMovieKey, id],
      queryFn: () => api.get(`movie/${id}`).then((res) => res.data),
    });
  const getMovieByIdAndPath = (id: string, path: string) =>
    useQuery({
      queryKey: [oneMovieKey, id, path],
      queryFn: () => api.get(`movie/${id}/${path}`).then((res) => res.data),
    });
  return { getOneMovieById, getMovieByIdAndPath };
};
