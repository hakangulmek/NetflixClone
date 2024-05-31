import { useEffect, useState } from "react";
import requests from "../Requrst";
import axios from "axios";
import Slider from "react-slick";

function Row() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 5,
    arrows: false,
  };
  interface movie {
    title: string;
    backdrop_path?: string;
  }
  const [movies, setMovies] = useState<movie[]>([]);

  useEffect(() => {
    axios.get(requests.requestTopRater).then((response) => {
      setMovies(response.data.results);
    });
  }, [requests.requestPopular]);
  const topFiveMovies = movies.slice(0, 20);
  useEffect(() => {
    axios.get(requests.requestTrending).then((response) => {
      setMovies(response.data.results);
    });
  }, [requests.requestPopular]);
  const topTenMovies = movies.slice(0, 20);

  return (
    <div className="absolute bg-black w-full">
      <div>
        <h3 className="text-white font-bold p-4 ">Trending</h3>
        <div>
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
      <div>
        <h3 className="text-white  font-bold p-4">Upcoming</h3>
        <div>
          <Slider {...settings} className="slick-list ">
            {topTenMovies.map((item, index) => (
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
      <div>
        <h3 className="text-white  font-bold p-4">Toprater</h3>
        <div>
          <Slider {...settings} className="slick-list ">
            {topTenMovies.map((item, index) => (
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
      <div>
        <h3 className="text-white  font-bold p-4">Tv Series</h3>
        <div>
          <Slider {...settings} className="slick-list ">
            {topTenMovies.map((item, index) => (
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
    </div>
  );
}

export default Row;
