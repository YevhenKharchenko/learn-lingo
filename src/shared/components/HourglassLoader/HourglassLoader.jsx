import { Hourglass } from 'react-loader-spinner';
import s from './HourglassLoader.module.scss';

const HourglassLoader = () => {
  return (
    <div className={s.loader}>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{ marginBottom: '30px' }}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
      />
      <p className={s.loaderText}>Loading data. Please wait a moment...</p>
    </div>
  );
};

export default HourglassLoader;
