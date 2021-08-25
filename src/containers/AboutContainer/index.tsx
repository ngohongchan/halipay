import { type } from 'os';
import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

import star from './icons-star.svg';
import house from './icons-house.svg';
import ship from './icons-ship.svg';
import shield from './icons-shield.svg';
import question from './icons-question.svg';

type Props = {};

const About: React.FC<Props> = () => {
  return (
    <div className='about'>
      <div className='container'>
        <div className='row'>
          <h4>Why shop with us ?</h4>
        </div>

        <div className='list-item'>
          <div className='item'>
            <div>
              <img src={star} alt='' />
            </div>
            <div>
              <p>QUANTITY AND SAVING</p>
            </div>
            <div>
              <span>Comprehensive quantity control and affordable prices</span>
            </div>
          </div>

          <div className='item'>
            <div>
              <img src={house} alt='' />
            </div>
            <div>
              <p>GOLBAL WAREHOUSE</p>
            </div>
            <div>
              <span>37 overseas warehouse</span>
            </div>
          </div>

          <div className='item'>
            <div>
              <img src={ship} alt='' />
            </div>
            <div>
              <p>FAST SHIPPING</p>
            </div>
            <div>
              <span>Fast and convenient door to door delivery</span>
            </div>
          </div>

          <div className='item'>
            <div>
              <img src={shield} alt='' />
            </div>
            <div>
              <p>PAYMENT SECURITY</p>
            </div>
            <div>
              <span>More than 10 different secure paument methods</span>
            </div>
          </div>

          <div className='item'>
            <div>
              <img src={question} alt='' />
            </div>
            <div>
              <p>HAVE QUESTION ?</p>
            </div>
            <div>
              <span>24/7 Customer Service - We're here and happy to help!</span>
            </div>
          </div>
        </div>

        <div className='des-bottom'>
          <span>Vivamus dapibus odio metus, ac scelerisque urna condimentum id.</span>
          <Link to='/'>Start your order now</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
