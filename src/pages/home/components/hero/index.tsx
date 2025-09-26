import { useState } from "react";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import { useMovie } from "../../../movie/services/use-all-movie";
import { IMAGE_URL } from "../../../../shared/const";
import type { IMovie } from "../../../movie/move-type";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [thumbsSwiper] = useState<any>(undefined);
  const { getAllMovie } = useMovie();
  const { data, isPending } = getAllMovie();
  const data2: IMovie[] = data?.results?.splice(0, 5);
  const navigate = useNavigate();
  return (
    <>
      {isPending && (
        <div className="container aspect-[1.7777777778] dark:bg-gbg bg-lgbg rounded-xl animate-pulse"></div>
      )}
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // style={{
        //   width: "80%",
        // }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2 max-[640px]:m-0 rounded-xl m-0"
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
            id,
          } = movie;
          return (
            <SwiperSlide className="relative" key={id}>
              <div>
                <img
                  src={IMAGE_URL + backdrop_path}
                  onClick={() => navigate(`/movie/${id}`)}
                />
              </div>
              <div className="card__body w-full h-[240px] absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-end flex-col gap-4 max-[640px]:gap-1 text-white">
                <h2 className="font-medium text-[32px] max-[640px]:text-xl">
                  {original_title}
                </h2>
                <div className="information flex gap-1.5 max-[640px]:text-lg">
                  <span>{release_date.slice(0, 4)}</span>•
                  <span>{original_language.toUpperCase()}</span>•
                  <span>{vote_average}</span>
                  {adult && (
                    <>
                      •<span>18+</span>
                    </>
                  )}
                </div>
                <p className="text-gray-400 max-[640px]:hidden">{overview}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <Swiper
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
      </Swiper> */}
    </>
  );
};

export default Hero;
