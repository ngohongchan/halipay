import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

import favorite from './favorite_border_black_24dp.svg';
import signin from './perm_identity_black_24dp.svg';
import cart from './shopping_cart_black_24dp.svg';
import help from './help.svg';

type Props = {};

const Header: React.FC<Props> = () => {
  return (
    <header>
      <div className='header-top'>
        <div className='container'>
          <div className='row'>
            <div>
              <div className='header-logo'>
                <img src='./images/ellamart.png' alt='header' />
              </div>
            </div>
            <div>
              <div className='nav-search'>
                <div className='search-form'>
                  <form>
                    <input type='text' placeholder='Search...'></input>
                  </form>
                </div>
                <div className='search-icon'>
                  <Link to='/'>
                    <i className='fa fa-search' aria-hidden='true'></i>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className='append'>
                <div className='number-phone'>
                  <Link to='/'>
                    <span>
                      Availiable 24/7 at
                      <br />
                      <Link to='/'>(+84) 123 123 45</Link>
                    </span>
                  </Link>
                </div>
                <div className='header-wishlist'>
                  <Link to='/'>
                    <div>
                      <img src={favorite} alt='wishlist' />
                      <span>Wish Lists</span>
                    </div>
                  </Link>
                </div>
                <div className='customer-link'>
                  <Link to='/'>
                    <span>
                      <img src={signin} alt='signin' />
                    </span>
                    <span>Sign In</span>
                  </Link>
                </div>
                <div className='header-cart'>
                  <Link to='/'>
                    <span className='cart-list'>
                      <span>
                        <img src={cart} alt='cart' />
                      </span>
                      <span className='cart-item'>
                        <span className='cart-count'>0</span>
                        <span className='cart-text'>Cart</span>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='main-menu'>
        <div className='container'>
          <div className='row'>
            <div className='menu-left'>
              <ul>
                <li>
                  <Link to='/'>New In</Link>
                </li>
                <li className='max-left'>
                  <Link to='/'>Must Have</Link>
                </li>
                <li className='max-left'>
                  <Link to='/'>Trend</Link>
                </li>
                <li className='max-left'>
                  <Link to='/'>Themes Demos</Link>
                </li>
                <li className='max-left'>
                  <Link to='/'>Child Themes</Link>
                </li>
                <li className='max-left'>
                  <Link to='/'>Pages</Link>
                </li>
                <li className='max-left'>
                  <Link to='/'>BuyTheme</Link>
                </li>
              </ul>
            </div>
            <div className='menu-right'>
              <ul>
                <li className='max-right'>
                  <Link to='/'>
                    <span>
                      <img src={help} alt='help' />
                      <span>Help</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <span>EN / USD</span>
                  <img src='./images/i-lang-1.png' alt='i-lang' />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
