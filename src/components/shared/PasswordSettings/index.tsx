'use client';
import { ChangeEvent, FC } from 'react';
import Input from '@/components/common/Input';
import CheckboxList from '@/components/shared/CheckboxList';
import { usePassword } from '@/store';

const PasswordSettings: FC = () => {
  const passwordStore = usePassword();
  const [passwordLength, checkboxes] = usePassword(state => [
    state.passwordLength,
    [
      {
        propertyKey: 'isUppercase',
        label: 'Uppercase',
        checked: state.isUppercase,
      },
      {
        propertyKey: 'isLowercase',
        label: 'Lowercase',
        checked: state.isLowercase,
      },
      { propertyKey: 'isNumbers', label: 'Numbers', checked: state.isNumbers },
      { propertyKey: 'isSymbols', label: 'Symbols', checked: state.isSymbols },
    ],
  ]);

  const handleChangePasswordLength = (e: ChangeEvent<HTMLInputElement>) => {
    passwordStore.set({ passwordLength: e.target.value });
  };

  const handleSetState = (
    state: 'isUppercase' | 'isLowercase' | 'isNumbers' | 'isSymbols'
  ) => {
    passwordStore.set({ [state]: !passwordStore[state] });
  };

  return (
    <section className="p-4 bg-zinc-700 rounded text-white">
      <h2 className="text-center mb-5 font-semibold text-2xl">
        Customize your password
      </h2>
      <section className="flex gap-40 justify-center max-md:flex-col max-md:gap-3">
        <div>
          <h3>Password Length</h3>
          <Input
            type="number"
            value={passwordLength}
            background={'fill'}
            onChange={handleChangePasswordLength}
          />
        </div>
        <CheckboxList checkboxes={checkboxes} onToggle={handleSetState} />
      </section>
    </section>
  );
};

export default PasswordSettings;
