import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const Product: React.FC<Props> = () => {
  return (
    <div className='column'>
      <div className='box'>
        <div className='productImage'>
          <Link to='/'>
            <img src='./images/product-laptop-1_8ba38545-e982-4cc5-a601-9f7adb782d6f.jpg' alt='product' />
          </Link>
          <div className='sale'>sale</div>
        </div>
        <div className='content'>
          <div className='rating'></div>
          <div className='title'>Hentum Tosmois de Laptop Hamo Dincidunts</div>
          <div className='priceContainer'>
            <span className='price'>$56.00</span>
            <span className='priceSale'>$49.00</span>
          </div>
          <p className='buttonContainer'>
            <Link to='/' className='select-option'>
              Slelect Option
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
