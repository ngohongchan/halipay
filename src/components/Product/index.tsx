import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating';

import './styles.scss';

type Props = {
  item?: {
    image: string;
    name: string;
    price: number;
    rating: number;
  };
};

const Product: React.FC<Props> = ({ item }) => {
  console.log({ item });
  return (
    <div className='column'>
      <div className='box'>
        <div className='productImage'>
          <Link to='/'>
            <img src={item?.image} alt='product' />
          </Link>
          <div className='product-label'>
            <span className='label label-sale'>Sale</span>
          </div>
          <button className='btn-quickview'>Quick View</button>
        </div>
        <div className='content'>
          <Rating rating={item?.rating} />
          <div className='title'>{item?.name.substring(1, 15)}...</div>
          <div className='priceContainer'>
            <span className='price'>${item?.price}</span>
            from
            <span className='priceSale'>$49.00</span>
          </div>
          <div className='buttonContainer'>
            <Link to='/' className='select-option'>
              Select Options
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
