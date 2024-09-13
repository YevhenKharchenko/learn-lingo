import clsx from 'clsx';
import { RotatingLines } from 'react-loader-spinner';
import s from './Loader.module.scss';

const Loader = ({ className, ...rest }) => {
  return (
    <div className={clsx(s.loader, className && className)}>
      <RotatingLines
        visible={true}
        height="56"
        width="56"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
        {...rest}
      />
    </div>
  );
};

export default Loader;
