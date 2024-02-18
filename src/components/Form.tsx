import React, { FunctionComponent, ReactNode } from 'react';
import { Label } from './ui/label';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

const Form: FunctionComponent<FormProps> = ({ children, ...props }) => {
  return (
    <form className="flex flex-col gap-2" {...props}>
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
      <Label htmlFor={name}>{label}</Label>
      {React.cloneElement(children as React.ReactElement<any>, {
        id: name,
        name: name,
      })}
    </>
  );
};

export { Form, FormField };
