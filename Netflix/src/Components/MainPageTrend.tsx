import { useEffect, useState } from "react";
import Slider from "react-slick";
import requests from "../Requrst";
import axios from "axios";

function MainPageTrend() {
  interface movie {
    title: string;
    backdrop_path?: string;
  }
  const [movies, setMovies] = useState<movie[]>([]);

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, [requests.requestPopular]);
  const topFiveMovies = movies.slice(0, 20);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 5,
    arrows: false,
  };
  return (
    <div className=" w-full h-full">
      <div className="flex items-center h-full slick-slider  ">
        <Slider {...settings} className="slick-list ">
          {topFiveMovies.map((item, index) => (
            <div key={index} className="">
              <img
                src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                alt={item?.title}
              />
              <div className="absolute top-0  w-[176px] h-[126px] hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p>{item?.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default MainPageTrend;
