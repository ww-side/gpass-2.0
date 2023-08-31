'use client';
import { ChangeEvent, useState } from 'react';
import Input from '@/components/common/Input';

const PasswordOutput = () => {
  const [password, setPassword] = useState('Password');

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Input
      type="text"
      value={password}
      onChange={handleChangePassword}
      blocked={true}
    />
  );
};

export default PasswordOutput;
