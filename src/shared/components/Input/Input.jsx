import clsx from 'clsx';
import s from './Input.module.scss';

const Input = ({ type, name, className, placeholder, value }) => {
  return (
    <input
      type={type}
      name={name}
      className={clsx(s.input, className && className)}
      placeholder={placeholder}
      defaultValue={value}
    />
  );
};

export default Input;
