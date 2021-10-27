import { FC } from "react";
import Banner from "./Banner";

const Content: FC = () => {
  return (
    <div className='px-4'>
      <div className='my-5 flex items-center'>
        <div className='font-bold text-red-600 mr-4'>Movies</div>
        <div className='font-light'>TV Shows</div>
      </div>
      <Banner />
      <div className='mt-10'>
        <h2 className='text-2xl text-gray-700'>Most Popular</h2>
      </div>
    </div>
  );
};

export default Content;
