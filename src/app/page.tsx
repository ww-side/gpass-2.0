import PasswordOutput from '@/components/shared/PasswordOutput';
import PasswordSettings from '@/components/shared/PasswordSettings';
import Button from '@/components/common/Button';
import React from 'react';

export default function Home() {
  return (
    <main className="flex flex-col gap-4 w-8/12 mt-10 mx-auto text-lg">
      <PasswordOutput />
      <section className="mx-auto">
        <Button color="blue">Generate password</Button>
      </section>
      <PasswordSettings />
    </main>
  );
}
