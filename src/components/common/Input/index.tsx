'use client';
import { ChangeEvent, FC } from 'react';

interface InputProps {
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  blocked?: boolean;
}

const Input: FC<InputProps> = ({ type, value, onChange, blocked = false }) => {
  return (
    <input
      className="bg-zinc-600 text-white border-none rounded shadow-md px-3 py-2 focus:outline-none w-full"
      type={type}
      value={value}
      onChange={onChange}
      readOnly={blocked}
    />
  );
};

export default Input;
