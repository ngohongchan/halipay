import React from 'react';

type Props = {
  width?: string;
};

const Wideget: React.FC<Props> = ({ children, width }) => {
  return (
    <div className='wideget' style={{ width: width }}>
      {children}
    </div>
  );
};

export default Wideget;
