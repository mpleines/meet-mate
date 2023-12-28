import React, { FunctionComponent } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: FunctionComponent<InputProps> = (props) => {
  return (
    <input
      {...props}
      className="border rounded-md py-2 px-4 inline-flex focus:outline text-md p-0  text-white bg-background focus:outline-none "
    />
  );
};

export default Input;
