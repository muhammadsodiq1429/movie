import { useQuery } from "@tanstack/react-query";
import { api } from "../../../shared/api";

export const useGenre = (id: number) =>
  useQuery({
    queryKey: ["genre-key"],
    queryFn: () => api.get(`genre/movie/${id}`).then((res) => res["data"]),
  });
