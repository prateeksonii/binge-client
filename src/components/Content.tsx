import { FC } from "react";
import Banner from "./Banner";
import MostPopularList from "./MostPopularList";

const Content: FC = () => {
  return (
    <div className='px-4'>
      <div className='my-5 flex items-center'>
        <div className='font-bold text-red-600 mr-4'>Movies</div>
        <div className='font-light'>TV Shows</div>
      </div>
      <Banner />
      <div className='mt-10'>
        <MostPopularList />
      </div>
    </div>
  );
};

export default Content;
