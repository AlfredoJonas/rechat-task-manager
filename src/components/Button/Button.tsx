import React from 'react';
import './Button.css';

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  text: string;
  width?: string;
  icon?: React.SVGProps<SVGSVGElement>;
}

function Button({ text, width, icon, ...rest }: ButtonProps): JSX.Element {
  return (
    <button style={{ width }} {...rest}>
      <>
        {icon}
        {text}
      </>
    </button>
  );
}

export default Button;
