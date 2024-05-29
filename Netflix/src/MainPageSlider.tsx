import axios from "axios";
import { useEffect, useState } from "react";
import requests from "./Requrst";
import MainPageTrend from "./Components/MainPageTrend";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const randomNumber = Math.floor(Math.random() * movies.length);

  const movie: {
    title: string;
    release_date: string;
    backdrop_path?: string;
    overview?: string;
  } = movies[randomNumber];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <div className="w-full h-[600px] text-white relative">
      <div className="w-full h-full">
        <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute top-[20%] p-10 md:p-8">
          <h1 className="text-3xl font-sans ">{movie?.title}</h1>
          <div className="my-4">
            <button className="rounded bg-white text-black bg-opacity-90 w-28 h-9 mr-6 px-5 py-2">
              <span>Oynat</span>
            </button>
            <button className="bg-white bg-opacity-40 w-44 h-9 rounded mr-6 px-5 py-2 ml-4">
              <span>Daha Fazla Bilgi</span>
            </button>
            <p className="text-gray-400 text-sm">
              Çıkış Tarihi: {movie?.release_date}
            </p>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
              {movie?.overview}
            </p>
          </div>
        </div>
        <div className="absolute bottom-44 pl-12 ">
          <h1 className="font-sans text-xl text-white text-opacity-80">
            Sıradaki Önerimiz
          </h1>
        </div>
        <div className="absolute top-[70%] w-full h-[166px] pl-8 overflow-hidden">
          <MainPageTrend />
        </div>
      </div>
    </div>
  );
};

export default Main;
