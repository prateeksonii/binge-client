import { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../api";

import { Movie } from "../types";

const Banner: FC = () => {
  const history = useHistory();
  const [banner, setBanner] = useState<Movie>();

  useEffect(() => {
    api.get<{ banner: Movie }>("/api/v1/movies/banner").then((res) => {
      setBanner(res.data.banner);
    });
  }, []);

  if (!banner) {
    return (
      <div className='relative w-100 h-500px bg-cover rounded-2xl bg-gray-400'></div>
    );
  }

  return (
    <div
      onClick={() => history.push(`/movie/${banner.id}`)}
      className='relative w-100 h-500px bg-cover rounded-2xl cursor-pointer'
      style={{
        backgroundImage: banner
          ? `url('https://image.tmdb.org/t/p/original${banner.backdrop_path}')`
          : undefined,
      }}
    >
      <div className='text-white absolute bottom-6 left-6'>
        <div className='font-bold text-5xl mb-3'>{banner.title}</div>
        <div className='font-light text-md mb-10'>
          {banner.genres.map(({ name }) => name).join(", ")}
        </div>
      </div>
    </div>
  );
};

export default Banner;
