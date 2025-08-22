import { memo, type FC } from "react";
import { useNavigate } from "react-router-dom";
import { IMAGE_URL } from "../../const";

interface MovieViewProps {
  data: any;
}

const MovieView: FC<MovieViewProps> = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto">
      <div className="MovieView grid grid-cols-4 gap-3 ">
        {data?.map((movie: any) => (
          <div key={movie.id}>
            <div onClick={() => navigate(`/movie/${movie.id}`)}>
              <img src={IMAGE_URL + movie.poster_path} alt="" />
            </div>
            <div className="p-2">
              <h3
                title={movie.title}
                className="line-clamp-1 font-bold text-xl"
              >
                {movie.title}
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
