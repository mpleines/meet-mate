'use client';
import ReactSelect, { Props } from 'react-select';

const Select = (props: Props) => {
  return (
    <ReactSelect
      {...props}
      classNames={{
        container: () => 'border rounded-md border-0',
        valueContainer: () => 'py-2 px-4 text-md p-0 text-white bg-background ',
        dropdownIndicator: () => 'bg-background',
        menuList: () =>
          'border rounded-md text-md p-0 text-white bg-background ',
        option: () =>
          'bg-background hover:text-black hover:bg-white active:bg-white active:text-black focus:bg-white focus:text-black',
      }}
    />
  );
};

export default Select;
