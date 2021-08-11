import React from 'react';
import './styles.scss';

type Props = {};

const MainContainer: React.FC<Props> = ({ children }) => {
  return <div className='mainContainer'>{children}</div>;
};

export default MainContainer;
