import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

import { Categories } from './data';

type Category = {
  icon: string;
  text: string;
};

type Props = {};

const SideBar: React.FC<Props> = () => {
  return (
    <div className='sidebarContainer'>
      <div className='sidebar'>
        <div className='sidebar-header'>
          <p>shop by categories</p>
        </div>
        <ul className='sidebar-body'>
          {Categories.map((category: Category, idx: number) => (
            <li key={idx}>
              <img src={category.icon} alt={category.text} />
              <Link to='/'>{category.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
