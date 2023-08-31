'use client';
import React, { ChangeEvent, useState } from 'react';
import Input from '@/components/common/Input';
import Checkbox from '@/components/common/Checkbox';

const PasswordSettings = () => {
  const [passwordLength, setPasswordLength] = useState('');
  const [isUppercase, setIsUppercase] = useState(true);
  const [isLowercase, setIsLowercase] = useState(true);
  const [isNumbers, setIsNumbers] = useState(true);
  const [isSymbols, setIsSymbols] = useState(true);

  const handleSwitchCheckbox = (
    value: boolean,
    setValue: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setValue(!value);
  };

  const handleChangePasswordLength = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordLength(e.target.value);
  };

  return (
    <section className="p-4 bg-zinc-700 rounded text-white">
      <h2 className="text-center mb-5 font-semibold text-2xl">
        Customize your password
      </h2>
      <section className="flex gap-40 justify-center">
        <div>
          <h3>Password Length</h3>
          <Input
            type="number"
            value={passwordLength}
            onChange={handleChangePasswordLength}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Checkbox
            label="Uppercase"
            checked={isUppercase}
            onChange={() => handleSwitchCheckbox(isUppercase, setIsUppercase)}
          />
          <Checkbox
            label="Lowercase"
            checked={isLowercase}
            onChange={() => handleSwitchCheckbox(isLowercase, setIsLowercase)}
          />
          <Checkbox
            label="Numbers"
            checked={isNumbers}
            onChange={() => handleSwitchCheckbox(isNumbers, setIsNumbers)}
          />
          <Checkbox
            label="Symbols"
            checked={isSymbols}
            onChange={() => handleSwitchCheckbox(isSymbols, setIsSymbols)}
          />
        </div>
      </section>
    </section>
  );
};

export default PasswordSettings;
