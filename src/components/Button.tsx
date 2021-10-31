import { FC } from "react";

type ButtonProps = {
  onClick?: () => void;
  additionalClasses?: string;
};

const Button: FC<ButtonProps> = ({ onClick, additionalClasses, children }) => {
  let classString =
    "mb-3 cursor-pointer px-4 py-3 rounded-lg text-black text-sm hover:bg-red-600 hover:text-white transition-all ";

  if (additionalClasses) {
    classString += additionalClasses;
  }

  return (
    <button onClick={onClick} className={classString}>
      {children}
    </button>
  );
};

export default Button;
