import { FC, ReactNode, MouseEvent } from 'react';

export interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  color: string;
  size?: string;
}

enum Colors {
  WHITE = 'bg-amber-300 hover:bg-amber-400 text-black',
  YELLOW = 'bg-sky-500 hover:bg-sky-600 text-white',
}

const Button: FC<ButtonProps> = ({ onClick, children, color, size }) => {
  const YELLOW_COLOR = 'YELLOW';
  const WHITE_COLOR = 'white';

  const getColor = (color: string) => {
    switch (color) {
      case YELLOW_COLOR:
        return Colors.YELLOW;
      case WHITE_COLOR:
        return Colors.WHITE;
      default:
        return Colors.WHITE;
    }
  };

  return (
    <button
      className={`flex items-center justify-center gap-1 ${size} font-normal ${getColor(
        color
      )} py-3 px-5 rounded-md shadow-2xl transition duration-300 ease-in-out mb-3`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
