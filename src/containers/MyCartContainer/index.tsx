import { type } from 'os';
import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

import error from './icons-error.svg';
import calendar from './icons-calendar.svg';
import remove from './icons-remove.svg';
import gift from './icons-gift.svg';

type Props = {};

const MyCart: React.FC<Props> = () => {
  return (
    <main>
      <div className='container'>
        <div className='cart-link'>
          <Link to='/'>Home</Link>
          <span> / </span>
          <Link to='/'>Shopping Cart</Link>
        </div>
        <h1>MY CART</h1>
        <div className='cart-note'>
          <img src={error} alt='' />
          <span>
            Please, hurry! Someone has placed an order on one of the items you have in the cart. We'll keep it for you
            for 14:17 minutes..
          </span>
        </div>
        <div className='row'>
          <div className='cart-lists'>
            <div className='cart-lists__header'>
              <div>PRODUCT</div>
              <div>PRICE</div>
              <div>QUANTITY</div>
              <div>TOTAL</div>
            </div>
            <div className='cart-lists__item'>
              <div>
                <img src='./images/cart-list-1.jpg' alt='' />
                <div>
                  <span>Hentum Tosmois de Laptop Hamo Dincidunts</span>
                  <small>
                    XS / Black
                    <img src={calendar} alt='' />
                  </small>
                </div>
              </div>
              <div>$69.00</div>
              <div>
                <input type='number' min='1' />
              </div>
              <div>$69.00</div>
              <div>
                <img src={remove} alt='' />
              </div>
            </div>
            <div className='cart-lists__gift'>
              <img src={gift} alt='' />
              <p>
                Do you want a gift wrap? <b>Only for $10.00</b>
              </p>
              <Link to='/'>Add</Link>
            </div>
            <div className='cart-lists__comment'>
              <span>Additional comments</span>
              <br />
              <textarea name='' id='' placeholder='Spesial instruction for seller...'></textarea>
            </div>
          </div>{' '}
          {/* cart-lists   */}
          <div className='cart-ordersummary'>
            <div className='cart-ordersummary__header'>
              <div>ORDER SUMMARY</div>
            </div>
            <div className='cart-ordersummary__total'>
              <span>Sub Total: </span>
              <span>$69.00</span>
            </div>
            <h3>Get Shipping Estimates</h3>
            <div className='cart-ordersummary__shipfrom'>
              <select name='' id='nation'>
                <option value=''>Japan</option>
                <option value=''>VietNam</option>
                <option value=''>USA</option>
                <option value=''>Canada</option>
                <option value=''>ThaiLand</option>
              </select>
              <div>
                <select name='' id='none'>
                  <option value=''>None</option>
                  <option value=''>None</option>
                  <option value=''>None</option>
                  <option value=''>None</option>
                  <option value=''>None</option>
                </select>
                <input className='none-input' type='text' />
              </div>
              <input className='calcu' type='submit' value='Calculate Shipping' />
              <hr />
              <div className='coupon'>
                <span>Coupon Code: </span>
                <input className='coupon-input' type='text' name='' id='' />
                <p>Coupon code will be applied on the checkout page</p>
              </div>
              <hr />
              <div className='total'>
                <span>Total: </span>
                <span>$69.00</span>
              </div>
              <hr />
              <div className='checkbox'>
                <input type='checkbox' />
                <p>
                  i agree with the span <Link to='./'>Terms & conditons</Link>
                </p>
              </div>
              <div className='btn'>
                <input id='checkout' type='submit' value='Proceed To Checkout' />
                <input id='shopping' type='submit' value='Continue Shopping' />
              </div>
            </div>
          </div>{' '}
          {/* cart-odersummary */}
        </div>
      </div>
    </main>
  );
};

export default MyCart;
