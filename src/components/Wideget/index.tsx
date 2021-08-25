import React from 'react';

import './styles.scss';

type Props = {
  width?: string;
  children: React.ReactNode;
};

const Wideget: React.FC<Props> = ({ children, width }) => {
  return (
    <div className='wideget' style={{ width: width }}>
      {children}
    </div>
  );
};

export default Wideget;
