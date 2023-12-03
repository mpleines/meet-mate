import React, { FunctionComponent, ReactNode } from 'react';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

const Form: FunctionComponent<FormProps> = ({ children, ...props }) => {
  return (
    <form className="px-4 py-2 flex flex-col gap-2" {...props}>
      {children}
    </form>
  );
};

interface FormFieldProps {
  name: string;
  label: ReactNode;
  children: ReactNode;
}

const FormField: FunctionComponent<FormFieldProps> = ({
  name,
  label,
  children,
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      {React.cloneElement(children as React.ReactElement<any>, {
        id: name,
        name: name,
      })}
    </>
  );
};

export { Form, FormField };
