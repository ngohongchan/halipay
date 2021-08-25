import { type } from 'os';
import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import heart from './icons-heart.svg';
import user from './icons-user.svg';
import gift from './icons-gift.svg';
import cart from './icons-cart.svg';
import search from './icons-search.svg';
import list from './icons-list.svg';

type Props = {};

const NavBarContainer: React.FC<Props> = () => {
  return (
    <header>
      <div className='row'>
        <div className='nav-logo'>
          <Link to='/'>
            <img src='./images/nav-logo.png' alt='' />
          </Link>
        </div>

        <div className='nav-menu'>
          <img src={list} alt='' />
        </div>

        <div className='nav-search'>
          <div className='nav-search__box'>
            <input className='box__input' type='text' placeholder='Search the store...' />
            <img className='box__img' src={search} alt='' />
          </div>
        </div>

        <div className='nav-item'>
          <div className='nav-item__box'>
            <div>
              <Link to='/'>
                <img src={heart} alt='' />
                <span>Wish Lists</span>
              </Link>
            </div>
            <div>
              <Link to='/'>
                <img src={gift} alt='' />
                <span>Gift Cards</span>
              </Link>
            </div>
            <div>
              <Link to='/'>
                <img src={user} alt='' />
                <span>Sign In</span>
              </Link>
            </div>
            <div className='nav-cart'>
              <Link to='/'>
                <img src={cart} alt='' />
                <span>1</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBarContainer;
