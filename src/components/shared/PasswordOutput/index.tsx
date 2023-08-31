'use client';
import { FC, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Input from '@/components/common/Input';
import { usePassword } from '@/store';
import { GoCopy } from 'react-icons/go';

const PasswordOutput: FC = () => {
  const password = usePassword(state => state.password);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  };

  return (
    <section className="flex items-center bg-zinc-600 shadow-md">
      <Input
        type="text"
        value={password}
        background={'transparent'}
        blocked={true}
      />
      <div className="flex gap-2">
        {isCopied && <span className="text-white">Copied!</span>}
        <CopyToClipboard text={password} onCopy={handleCopy}>
          <GoCopy className="mr-2 cursor-pointer" color="white" size={30} />
        </CopyToClipboard>
      </div>
    </section>
  );
};

export default PasswordOutput;
