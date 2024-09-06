import { RotatingLines } from 'react-loader-spinner';
import s from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={s.loader}>
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
      />
    </div>
  );
};

export default Loader;
