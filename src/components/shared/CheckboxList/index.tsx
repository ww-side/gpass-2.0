'use client';
import { FC } from 'react';
import Checkbox from '@/components/common/Checkbox';

interface CheckboxItem {
  propertyKey: string;
  label: string;
  checked: boolean;
}

interface CheckboxListProps {
  checkboxes: CheckboxItem[];
  onToggle: (
    state: 'isUppercase' | 'isLowercase' | 'isNumbers' | 'isSymbols'
  ) => void;
}

const CheckboxList: FC<CheckboxListProps> = ({ checkboxes, onToggle }) => {
  return (
    <div className="flex flex-col gap-2">
      {checkboxes.map(({ propertyKey, label, checked }) => (
        <Checkbox
          key={propertyKey}
          label={label}
          checked={checked}
          onChange={() =>
            onToggle(
              propertyKey as
                | 'isUppercase'
                | 'isLowercase'
                | 'isNumbers'
                | 'isSymbols'
            )
          }
        />
      ))}
    </div>
  );
};

export default CheckboxList;
