import { memo } from "react";
import { useOneMovie } from "./services/use-one-movie";
import { useParams } from "react-router-dom";
import { IMAGE_URL } from "../../shared/const";

const MovieDetail = () => {
  const { id = "" } = useParams();
  const { getOneMovieById, getMovieByIdAndPath } = useOneMovie();
  const { data } = getOneMovieById(id);
  const { data: images } = getMovieByIdAndPath(id, "images");
  const { data: similar } = getMovieByIdAndPath(id, "similar");
  console.log(similar);
  return (
    <div className="MovieDetail container mx-auto">
      <div className="card">
        <div>
          <img src={IMAGE_URL + data?.backdrop_path} alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-medium">{data?.title}</h1>
          <strong>{(data?.budget * 12500).toLocaleString()} UZS </strong>
        </div>
      </div>
      <div className="images flex flex-wrap">
        {images?.backdrops?.map((img: any, i: number) => {
          return (
            <div key={i}>
              <img src={IMAGE_URL + img.file_path} width={200} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(MovieDetail);
