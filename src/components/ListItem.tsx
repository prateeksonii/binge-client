import { FC, useState } from "react";
import { useHistory } from "react-router";
import { Movie } from "../types";

const ListItem: FC<{ movie: Movie; i: number }> = ({ movie, i }) => {
  const history = useHistory();
  const [index, setIndex] = useState<number | null>();

  const handleShowDetails = (index: number | null) => {
    setIndex(index);
  };

  return (
    <div
      className='rounded-xl shadow-sm h-96 bg-bottom bg-cover select-none cursor-pointer'
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
            <p className='text-lg font-light text-red-300'>{movie.title}</p>
            <p className='text-sm mt-4'>{movie.overview.substr(0, 80)}...</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ListItem;
