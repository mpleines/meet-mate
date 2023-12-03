import React, { FunctionComponent } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: FunctionComponent<InputProps> = (props) => {
  return (
    <input
      {...props}
      className="border rounded-md py-2 px-4 inline-flex focus:outline text-md p-0 border-none text-white bg-background-color-lighter focus:border-none focus:outline-none"
    />
  );
};

export default Input;
