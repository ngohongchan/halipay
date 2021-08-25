import React from 'react';

type Props = {
  img: string;
  alt: string;
};

const CustomBanner: React.FC<Props> = ({ img, alt }) => {
  return (
    <React.Fragment>
      <img src={img} alt={alt} />
    </React.Fragment>
  );
};

export default CustomBanner;
