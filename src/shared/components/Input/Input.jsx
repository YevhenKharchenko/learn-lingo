import clsx from 'clsx';
import s from './Input.module.scss';
import { forwardRef } from 'react';

const Input = forwardRef(({ type, className, placeholder, ...rest }, ref) => {
  return (
    <input
      type={type}
      className={clsx(s.input, className)}
      placeholder={placeholder}
      ref={ref}
      {...rest}
    />
  );
});

Input.displayName = 'Input';

export default Input;
