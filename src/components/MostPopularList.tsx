import { FC, useEffect, useState } from "react";
import { useHistory } from "react-router";
import api from "../api";
import { Movie, Movies } from "../types";

const MostPopularList: FC = () => {
  const history = useHistory();

  const [movies, setMovies] = useState<Movie[]>();
  const [index, setIndex] = useState<number | null>();

  useEffect(() => {
    api.get<Movies>("/api/v1/movies/popular").then((res) => {
      setMovies(res.data.movies);
    });
  }, []);

  const handleShowDetails = (index: number | null) => {
    setIndex(index);
  };

  return (
    <div>
      <h2 className='text-2xl text-gray-700 mb-4'>Most Popular</h2>
      <div className='grid grid-cols-4 gap-8'>
        {movies?.map((movie, i) => (
          <div
            className='rounded-xl shadow-sm h-80 bg-bottom bg-cover select-none'
            onMouseEnter={() => handleShowDetails(i)}
            onMouseLeave={() => handleShowDetails(null)}
            onClick={() => history.push(`/movie/${movie.id}`)}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
            }}
          >
            <div
              className='text-center p-2 transition-all flex h-full w-100 text-white items-center justify-center flex-col relative'
              style={{
                backgroundColor: i === index ? "rgba(0, 0, 0, 0.7)" : "inherit",
              }}
            >
              <div className='rounded-full bg-red-600 p-2 h-12 w-12 grid place-items-center absolute top-4 right-4'>
                {movie.vote_average}
              </div>
              {i === index && (
                <>
                  <p className='text-lg font-light text-red-300'>
                    {movie.original_title}
                  </p>
                  <p className='text-sm mt-4'>
                    {movie.overview.substr(0, 80)}...
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopularList;
