'use client';
import { FC } from 'react';
import Button from '@/components/common/Button';
import { generatePassword } from '@/utils/passwordUtils';
import { usePassword } from '@/store';

const PasswordGenerateBtn: FC = () => {
  const passwordStore = usePassword();
  const [
    password,
    passwordLength,
    isUppercase,
    isLowercase,
    isNumbers,
    isSymbols,
  ] = usePassword(state => [
    state.password,
    state.passwordLength,
    state.isUppercase,
    state.isLowercase,
    state.isNumbers,
    state.isSymbols,
  ]);

  const handleGeneratePassword = () => {
    passwordStore.set({
      password: generatePassword(
        passwordLength,
        isUppercase,
        isLowercase,
        isNumbers,
        isSymbols
      ),
    });
  };

  return (
    <section className="mx-auto">
      <Button color="blue" onClick={handleGeneratePassword}>
        Generate password
      </Button>
    </section>
  );
};

export default PasswordGenerateBtn;
