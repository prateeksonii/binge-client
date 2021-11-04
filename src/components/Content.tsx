import { FC, useContext } from "react";
import { GlobalContext } from "../contexts";
import Banner from "./Banner";
import List from "./List";

const Content: FC = () => {
  const { showBanner, currentList } = useContext(GlobalContext);

  return (
    <div className='px-4'>
      <div className='my-5 flex items-center'>
        <div className='font-bold text-red-600 mr-4'>Movies</div>
      </div>
      {showBanner && <Banner />}
      <div className='mt-10'>
        <List title={currentList.title} value={currentList.value} />
      </div>
    </div>
  );
};

export default Content;
