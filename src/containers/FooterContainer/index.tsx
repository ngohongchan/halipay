import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import map from './location_on_black_24dp.svg';
import phones from './phone_iphone_black_24dp.svg';
import mail from './email_black_24dp.svg';
import facebook from './Facebook-f_Logo-Black-Logo.wine.svg';
import twitter from './iconmonstr-twitter-1.svg';
import instagram from './iconmonstr-instagram-11.svg';
import pinterest from './iconmonstr-pinterest-1.svg';
import youtube from './iconmonstr-youtube-1.svg';
import tiktok from './tiktok_black_24dp.svg';

type Props = {};

const Footer: React.FC<Props> = () => {
    return (
        <footer>
            <div className='main-footer'>
                <div className='container'>
                    <div className='footer-title'>
                        <h3>SUBSCRIBE TO OUR NEWSLETER</h3>
                        <p>Get the laster updates on new product and upcoming sales</p>
                        <div className='footer-form'>
                            <input className='footer-form__address' type='text' placeholder='enter your mail address' />
                            <input className='footer-form__btn' type='button' value='Subscribe' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-footer'>
                            <h3 className='col-footer__title'>CATEGORIES</h3>
                            <ul>
                                <li>
                                    <Link to='/'>Appliances</Link>
                                </li>
                                <li>
                                    <Link to='/'>Computers & Laptops</Link>
                                </li>
                                <li>
                                    <Link to='/'>Cameras</Link>
                                </li>
                                <li>
                                    <Link to='/'>Mobile Phones & Tablets</Link>
                                </li>
                                <li>
                                    <Link to='/'>Televisions</Link>
                                </li>
                                <li>
                                    <Link to='/'>Video Games & Systems</Link>
                                </li>
                                <li>
                                    <Link to='/'>Weekly Deals</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-footer'>
                            <h3 className='col-footer__title'>FURTHER INFO.</h3>
                            <ul>
                                <li>
                                    <Link to='/'>About us</Link>
                                </li>
                                <li>
                                    <Link to='/'>Gift Certificates</Link>
                                </li>
                                <li>
                                    <Link to='/'>Theme Styles</Link>
                                </li>
                                <li>
                                    <Link to='/'>Contact us</Link>
                                </li>
                                <li>
                                    <Link to='/'>Blog</Link>
                                </li>
                                <li>
                                    <Link to='/'>Brands</Link>
                                </li>
                                <li>
                                    <Link to='/'>Sitemap</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-footer'>
                            <h3 className='col-footer__title'>CUSTOMER SERVICE</h3>
                            <ul>
                                <li>
                                    <Link to='/'>Help & FAQs</Link>
                                </li>
                                <li>
                                    <Link to='/'>Terms of Conditions</Link>
                                </li>
                                <li>
                                    <Link to='/'>Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to='/'>Online Returns Policy</Link>
                                </li>
                                <li>
                                    <Link to='/'>Rewards Program</Link>
                                </li>
                                <li>
                                    <Link to='/'>Rebate Center</Link>
                                </li>
                                <li>
                                    <Link to='/'>Partners</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-footer map-footer'>
                            <h3 className='col-footer__title'>
                                <Link to='/'>
                                    <img src='./images/logo-footer.png' />
                                </Link>
                            </h3>
                            <ul>
                                <li>
                                    <Link to='/'>
                                        <img src={map} />
                                        <span>685 Market Street San Francisco, CA 94105, US</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <img src={phones} alt='' />
                                        <span>Call us at (415) 555-5555</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <img src={mail} alt='' />
                                        <span>Email: example@domain.com</span>
                                    </Link>
                                </li>
                                <li>
                                    <ul className='map-footer__layzyicons'>
                                        <li>
                                            <Link className='facebook' to='/'>
                                                <img src={facebook} alt='' />
                                            </Link>
                                            <Link className='twitter' to='/'>
                                                <img src={twitter} alt='' />
                                            </Link>
                                            <Link className='instagram' to='/'>
                                                <img src={instagram} alt='' />
                                            </Link>
                                            <Link className='pinterest' to='/'>
                                                <img src={pinterest} alt='' />
                                            </Link>
                                            <Link className='youtube' to='/'>
                                                <img src={youtube} alt='' />
                                            </Link>
                                            <Link className='tiktok' to='/'>
                                                <img src={tiktok} alt='' />
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='group-block'>
                        <img src='./images/layzyload.png' alt='' />
                    </div>
                </div>

                <div className='footer-bottom'>
                    <div className='row'>
                        <div>
                            <span>
                                © 2021 Ella Demo. All Rights Reserved. Powered by Shopify.
                                <br />
                                Shopify Themes by HaloThemes.com.
                            </span>
                        </div>
                        <div className='footer-pay'>
                            <ul>
                                <li>
                                    <img src='./images/Visa_Inverted_x32.png' alt='' />
                                </li>
                                <li>
                                    <img src='./images/Sage_Inverted_x32.png' alt='' />
                                </li>
                                <li>
                                    <img src='./images/PayPal_x32.png' alt='' />
                                </li>
                                <li>
                                    <img src='./images/MasterCard_x32.png' alt='' />
                                </li>
                                <li>
                                    <img src='./images/Google_Wallet_x32.png' alt='' />
                                </li>
                                <li>
                                    <img src='./images/Discover_x32.png' alt='' />
                                </li>
                                <li>
                                    <img src='./images/American-Express_x32.png' alt='' />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
