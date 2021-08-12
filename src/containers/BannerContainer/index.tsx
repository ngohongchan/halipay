import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

import { Banners } from '../../data/Banner';

type Props = {};

const Banner: React.FC<Props> = () => {
  return (
    <div className='bannerContainer'>
      <ul className='bannerList'>
        {Banners.map((banner, idx) => (
          <li key={idx}>
            <Link to='/'>
              <img src={banner.image} alt={banner.image} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Banner;
