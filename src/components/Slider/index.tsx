import React from 'react';
import Slider from 'react-slick';

import './styles.scss';

type Props = {};

const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <button className={className} onClick={onClick} data-role='none' type='button' style={{ ...style }}>
      <i className='fa fa-chevron-right' aria-hidden='true' />
    </button>
  );
};

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <button className={className} onClick={onClick} data-role='none' type='button' style={{ ...style }}>
      <i className='fa fa-chevron-left' aria-hidden='true' />
    </button>
  );
};

const SlicSlider: React.FC<Props> = ({ children, ...orderProps }) => {
  return (
    <Slider
      {...{
        ...orderProps,
        nextArrow: <SampleNextArrow className='slick-arrow slick-next' />,
        prevArrow: <SamplePrevArrow className='slick-arrow slick-prev' />
      }}
    >
      {children}
    </Slider>
  );
};

export default SlicSlider;
