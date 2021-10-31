import { FC } from "react";
import { useQuery } from "react-query";
import { RouteComponentProps } from "react-router";
import api from "../api";
import { MovieDetail } from "../types";

type MovieProps = {
  movieId?: string;
};

const Movie: FC<RouteComponentProps<MovieProps>> = ({ match }) => {
  const movieId = match.params.movieId && +match.params.movieId;

  const { isLoading, data: movie } = useQuery<MovieDetail>(
    "movie-detail",
    async () => (await api.get(`api/v1/movies/${movieId}`)).data.movie
  );

  if (isLoading) return <>"Loading..."</>;

  return (
    <div className='h-screen w-3/5 m-auto grid place-items-center'>
      <div className='p-8 grid grid-cols-movie'>
        <div className='h-full w-auto rounded-xl overflow-hidden mr-8'>
          <img
            src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
            alt='Movie poster'
            className='h-full w-auto object-contain rounded-xl'
          />
        </div>
        <div>
          <div className='mr-4 w-min px-4 py-2 text-xs bg-green-200 rounded-2xl mb-4'>
            {movie?.status}
          </div>
          <div className='flex items-center'>
            <h1 className='font-bold text-4xl'>{movie?.original_title}</h1>
            <div className='ml-4 text-white rounded-full bg-red-600 p-2 h-12 w-12 grid place-items-center'>
              {movie?.vote_average}
            </div>
          </div>
          <p className='mt-2 italic'>{movie?.tagline}</p>
          <div className='my-10 text-sm flex flex-wrap'>
            {movie?.genres.map(({ id, name }) => (
              <div key={id} className='mr-4 px-4 py-2 bg-green-200 rounded-md'>
                {name}
              </div>
            ))}
          </div>
          <p className='mt-8 text-justify leading-8'>{movie?.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
