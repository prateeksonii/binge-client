import { FC } from "react";

import logo from "../assets/logo.png";

const Sidebar: FC = () => {
  return (
    <div className='px-4'>
      <img src={logo} alt='Logo' className='h-14' />
    </div>
  );
};

export default Sidebar;
