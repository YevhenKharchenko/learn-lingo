import clsx from 'clsx';
import s from './Button.module.scss';

const Button = ({ type = 'button', title, className, onClick, ...rest }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(s.button, className && className)}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
