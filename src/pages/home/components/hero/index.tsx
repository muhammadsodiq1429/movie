import { useState } from "react";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useMovie } from "../../../movie/services/use-all-movie";
import { IMAGE_URL } from "../../../../shared/const";
import type { IMovie } from "../../../movie/move-type";
import { useOneMovie } from "../../../movie-detail/services/use-one-movie";

export default function App() {
  const { getOneMovieById } = useOneMovie();

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { getAllMovie } = useMovie();
  const { data } = getAllMovie();
  const data2: IMovie[] = data?.results?.splice(0, 5);
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{
          "--swiper-navigation-color": "#c61f1f",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2 container rounded-xl"
      >
        {data2?.map((movie) => {
          const {
            backdrop_path,
            original_title,
            release_date,
            original_language,
            overview,
            vote_average,
            adult,
          } = movie;
          return (
            <SwiperSlide className="relative">
              <div>
                <img src={IMAGE_URL + backdrop_path} />
              </div>
              <div className="card__body w-full h-[240px] absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-end flex-col gap-4">
                <h2 className="font-medium text-[32px]">{original_title}</h2>
                <div className="information flex gap-1.5">
                  <span>{release_date.slice(0, 4)}</span>•
                  <span>{original_language.toUpperCase()}</span>•
                  <span>{vote_average}</span>
                  {adult && (
                    <>
                      •<span>18+</span>
                    </>
                  )}
                </div>
                <p className="text-gray-400">{overview}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper container mt-2"
      >
        {data2?.map((movie) => (
          <SwiperSlide className="">
            <img src={IMAGE_URL + movie.backdrop_path} className="rounded-xl" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
