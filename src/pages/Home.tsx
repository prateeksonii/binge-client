import { FC } from "react";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";

const HomePage: FC = () => {
  return (
    <div className='mt-4 grid grid-cols-layout'>
      <Sidebar />
      <Content />
      <div>filter</div>
    </div>
  );
};

export default HomePage;
