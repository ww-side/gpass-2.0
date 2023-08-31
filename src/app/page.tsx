import PasswordOutput from '@/components/shared/PasswordOutput';
import PasswordSettings from '@/components/shared/PasswordSettings';
import PasswordGenerateBtn from '@/components/shared/PasswordGenerateBtn';

export default function Home() {
  return (
    <main className="flex flex-col gap-4 w-8/12 mt-10 mx-auto text-lg max-md:w-10/12">
      <PasswordOutput />
      <PasswordGenerateBtn />
      <PasswordSettings />
    </main>
  );
}
