import { memo, type FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IMAGE_URL } from "../../const";
import { useMovie } from "../../../pages/movie/services/use-all-movie";
import type { IMovie } from "../../../pages/movie/move-type";
import { MdBookmarkBorder } from "react-icons/md";

interface MovieViewProps {
  count?: number;
  className?: string;
  skeleton?: number;
}

const MovieView: FC<MovieViewProps> = ({
  count = 0,
  skeleton = 4,
  className,
}) => {
  const navigate = useNavigate();
  const { getAllMovie } = useMovie();
  let { data, isPending } = getAllMovie();
  let results = data?.results;

  if (count > 0 && results) {
    results = data?.results?.slice(0, count);
  }

  return (
    <div className={`container mx-auto ${className}`}>
      <div>
        <Link to={"movie"}>See All</Link>
      </div>
      {isPending && (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
          {Array(skeleton)
            .fill(undefined)
            .map((_, i) => (
              <div className="animate-pulse" key={i}>
                <div className="aspect-[0.667] dark:bg-gbg bg-lgbg rounded-xl"></div>
                <div className="p-2">
                  <div className="h-[24px] w-[80%] dark:bg-gbg bg-lgbg mb-1.5 rounded-lg"></div>
                  <div className="h-[20px] w-[40%] dark:bg-gbg bg-lgbg rounded-lg"></div>
                </div>
              </div>
            ))}
        </div>
      )}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 ">
        {results?.map((movie: IMovie) => (
          <div key={movie.id} className="movie">
            <div
              onClick={() => navigate(`/movie/${movie.id}`)}
              className="rounded-xl overflow-hidden bg-gbg relative"
            >
              <img src={IMAGE_URL + movie.poster_path} alt="" className="" />
              <div className="absolute top-3 flex items-center px-3 justify-between w-full max-[640px]:top-1 max-[640px]:px-1">
                <span className=" bg-pyc/70 text-white px-2 rounded-md">
                  {movie.release_date.slice(0, 4)}
                </span>
                <MdBookmarkBorder
                  className=" text-4xl bg-pyc/70 rounded-[50%] p-1 text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    alert("Bookmark clicked");
                  }}
                />
              </div>
            </div>
            <div className="p-2">
              <h3
                title={movie.original_title}
                className="line-clamp-1 font-bold text-xl"
              >
                {movie.original_title} — {movie.original_language}
              </h3>
              <p>
                <span className="text-red-500">★</span> {movie.vote_average}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(MovieView);
