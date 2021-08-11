import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

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
                    <i className='fa fa-heart-o' aria-hidden='true'></i>
                    <span>Wish Lists</span>
                  </Link>
                </div>
                <div className='customer-link'>
                  <Link to='/'>
                    <span>
                      <i className='fa fa-user-o' aria-hidden='true'></i>
                    </span>
                    <span>Sign In</span>
                  </Link>
                </div>
                <div className='header-cart'>
                  <Link to='/'>
                    <span className='cart-list'>
                      <span>
                        <i className='fa fa-cart-plus' aria-hidden='true'></i>
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
                      <i className='fa fa-user-circle-o' aria-hidden='true'></i>
                      <span>Help</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <span>EN / USD</span>
                  <i className='fa fa-angle-down' aria-hidden='true'></i>
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
