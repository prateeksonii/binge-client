import { FC, useEffect, useState } from "react";
import { useHistory } from "react-router";
import api from "../api";
import { ListType, Movie, Movies } from "../types";
import Button from "./Button";
import ListItem from "./ListItem";

const List: FC<ListType> = ({ title, value: listType }) => {
  console.log(listType);

  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    api
      .get<Movies>(`/api/v1/movies/${listType}`, {
        params: {
          page,
        },
      })
      .then((res) => {
        setMovies([...movies, ...res.data.movies]);
      });
  }, [page]);

  useEffect(() => {
    api
      .get<Movies>(`/api/v1/movies/${listType}`, {
        params: {
          page,
        },
      })
      .then((res) => {
        setMovies(res.data.movies);
      });
  }, [listType]);

  return (
    <div>
      <h2 className='text-2xl text-gray-700 mb-4'>{title}</h2>
      <div className='grid grid-cols-5 gap-8 mb-4'>
        {movies?.map((movie, i) => (
          <ListItem movie={movie} i={i} />
        ))}
      </div>
      <Button
        onClick={() => setPage(page + 1)}
        additionalClasses='flex bg-gray-600 text-white w-min-content m-auto'
      >
        Show More
      </Button>
    </div>
  );
};

export default List;
