'use client';

type ButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  type?: 'submit';
};

const Button: React.FunctionComponent<ButtonProps> = ({
  onClick,
  children,
  type,
}) => {
  return (
    <button
      className={
        'px-4 py-2 text-sm bg-white text-background-color rounded-md hover:bg-background-color-lightest hover:text-white inline'
      }
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
