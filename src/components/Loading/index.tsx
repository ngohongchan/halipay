import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

import './styles.scss';

type Props = {};

const Loading: React.FC<Props> = () => {
  return (
    <div className='wrapper'>
      <Spinner animation='border' variant='dark' />
    </div>
  );
};

export default Loading;
