'use client';

import {
  Select as ShadcnSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ReactNode } from 'react';

type Props = {
  name: string;
  options: { label: ReactNode; value: string }[];
  placeholder?: string;
  onChange?: (value: string) => void;
  required?: boolean;
};

const Select = ({ name, placeholder, options, onChange, required }: Props) => {
  return (
    <ShadcnSelect name={name} onValueChange={onChange} required={required}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map(({ value, label }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </ShadcnSelect>
  );
};

export default Select;
