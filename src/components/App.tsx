import { FC } from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";

const App: FC = () => {
  return (
    <div className='mt-4 grid grid-cols-layout'>
      <Sidebar />
      <Content />
      <div>filter</div>
    </div>
  );
};

export default App;
