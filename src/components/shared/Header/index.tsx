'use client';
import { PiPassword } from 'react-icons/pi';

const Header = () => {
  return (
    <header className="flex items-end gap-2 p-3 text-amber-300 font-semibold text-3xl">
      GPass
      <PiPassword />
    </header>
  );
};

export default Header;
