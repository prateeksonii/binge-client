import { FC, useContext, useState } from "react";

import logo from "../assets/logo.png";
import { GlobalContext } from "../contexts";
import Button from "./Button";

type MenuItem = {
  title: string;
  value: "popular" | "top_rated" | "now_playing" | "upcoming";
  active: boolean;
};

const Sidebar: FC = () => {
  const { showBanner, toggleBanner, setCurrentList } =
    useContext(GlobalContext);

  const [active, setActive] = useState("popular");

  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      title: "Most Popular",
      value: "popular",
      active: true,
    },
    {
      title: "Top Rated",
      value: "top_rated",
      active: false,
    },
    {
      title: "Now Playing",
      value: "now_playing",
      active: false,
    },
    {
      title: "Upcoming",
      value: "upcoming",
      active: false,
    },
  ]);

  const handleClick = (menuItem: MenuItem) => {
    if (!setCurrentList) return;

    setMenuItems(
      menuItems.map((item) => {
        const newItem = { ...item };
        if (item.value === menuItem.value) {
          newItem.active = true;
        } else {
          newItem.active = false;
        }

        return newItem;
      })
    );

    return setCurrentList({
      title: menuItem.title,
      value: menuItem.value,
    });
  };

  return (
    <div className='px-4'>
      <img src={logo} alt='Logo' className='h-14' />
      <div className='mt-2'>
        <Button
          additionalClasses='block w-full text-left'
          onClick={toggleBanner}
        >
          {showBanner ? "Hide Banner" : "Show Banner"}
        </Button>
        {menuItems.map((menuItem) => {
          let additionalClasses = "block w-full text-left ";

          if (menuItem.active) additionalClasses += "bg-red-600 text-white";

          return (
            <Button
              key={menuItem.value}
              additionalClasses={additionalClasses}
              onClick={() => handleClick(menuItem)}
            >
              {menuItem.title}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
