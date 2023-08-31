'use client';
import { ChangeEvent, FC } from 'react';

interface InputProps {
  type: string;
  value: string;
  background: 'fill' | 'transparent';
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  blocked?: boolean;
}

const Input: FC<InputProps> = ({
  type,
  value,
  onChange,
  blocked = false,
  background,
}) => {
  return (
    <input
      className={`${
        background === 'fill' ? 'bg-zinc-600 shadow-md' : 'bg-transparent'
      } text-white border-none rounded px-3 py-2 focus:outline-none w-full`}
      type={type}
      value={value}
      onChange={onChange}
      readOnly={blocked}
    />
  );
};

export default Input;
