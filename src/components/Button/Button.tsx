import React from 'react';
import './Button.css';

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  text: string;
  style: {[key: string]: string};
  width?: string;
  backgroundColor?: string;
  icon?: React.SVGProps<SVGSVGElement>;
};

function Button({ text, style, icon, ...rest }: ButtonProps): JSX.Element {
  return (
    <button style={style} {...rest} className='primary-bg-color'>
      <>
        {icon}
        {text}
      </>
    </button>
  );
}

export default Button;
