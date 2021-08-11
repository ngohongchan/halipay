import React from 'react';
import './index.scss';
// import 'antd/dist/antd.css';

const Header = () => {
    return <header>
        <div className='header-top'>
            <div className='container'>
                <div className='row'>
                    <div>
                        <div className='header-logo'>
                            <img src='./images/ellamart.png' />
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
                                <a href='#' >
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='append'>
                            <div className='number-phone'>
                                <a href='#'>
                                    <span>
                                        Availiable 24/7 at
                                        <br />
                                        <a href='#'>(+84) 123 123 45</a>
                                    </span>
                                </a>
                            </div>
                            <div className='header-wishlist'>
                                <a href='#'>
                                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                                    <span>Wish Lists</span>
                                </a>
                            </div>
                            <div className='customer-link'>
                                <a href='#'>
                                    <span>
                                        <i class="fa fa-user-o" aria-hidden="true"></i>
                                    </span>
                                    <span>Sign In</span>
                                </a>
                            </div>
                            <div className='header-cart'>
                                <a href='#'>
                                    <span className='cart-list'>
                                        <span>
                                            <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        </span>
                                        <span className='cart-item'>
                                            <span className='cart-count'>0</span>
                                            <span className='cart-text'>Cart</span>
                                        </span>
                                    </span>
                                </a>
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
                                <a href='#'>New In</a>
                            </li>
                            <li className='max-left'>
                                <a href='#'>Must Have</a>
                            </li>
                            <li className='max-left'>
                                <a href='#'>Trend</a>
                            </li>
                            <li className='max-left'>
                                <a href='#'>Themes Demos</a>
                            </li>
                            <li className='max-left'>
                                <a href='#'>Child Themes</a>
                            </li>
                            <li className='max-left'>
                                <a href='#'>Pages</a>
                            </li>
                            <li className='max-left'>
                                <a href='#'>BuyTheme</a>
                            </li>
                        </ul>
                    </div>
                    <div className='menu-right'>
                        <ul>
                            <li className='max-right'>
                                <a href='#'>
                                    <span>
                                        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                                        <span>Help</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <span>EN / USD</span>
                                <i class="fa fa-angle-down" aria-hidden="true"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
};

export default Header;
