import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

import './styles.scss';

type Props = {
  rating?: number | undefined;
};

const Rating: React.FC<Props> = ({ rating }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {rating && rating >= index + 1 ? <BsStarFill /> : rating && rating >= number ? <BsStarHalf /> : <BsStar />}
      </span>
    );
  });
  return <div className='wrapper'>{tempStars}</div>;
};

export default Rating;
