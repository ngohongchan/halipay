import Loader from './Rolling-1s-200px.svg';
import './styles.scss';

type SpinnerProps = {};

const Loading: React.FC<SpinnerProps> = () => {
  return (
    <div className='loading'>
      <div className='spinner-loading'>
        <img src={Loader} alt='Loader' />
      </div>
    </div>
  );
};

export default Loading;
