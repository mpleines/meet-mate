'use client';
import ReactSelect, { Options } from 'react-select';

interface SelectProps<T> {
  id: string;
  name: string;
  options: Options<T>;
  required?: boolean;
}

const Select = <T,>(props: SelectProps<T>) => {
  return (
    <ReactSelect
      options={props.options}
      id={props.id}
      name={props.name}
      required={props.required}
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
