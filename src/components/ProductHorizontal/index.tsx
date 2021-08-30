import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating';

import './styles.scss';

type Props = {
  item?: {
    _id: string;
    image: string;
    name: string;
    price: number;
    rating?: number;
    new: boolean;
    sale: boolean;
    description: string;
  };
};

const ProductHorizotal: React.FC<Props> = ({ item }) => {
  return (
    <div className='productHorizontal'>
      <div className='box'>
        <div className='productTop'>
          <Link to={`product/${item?._id}`} className='productImage'>
            <img src={item?.image} alt={item?.name} />
          </Link>
        </div>
        <div className='content'>
          <h2 className='title'>
            <Link to={`product/${item?._id}`}>{item?.name}</Link>
          </h2>
          <Rating rating={item?.rating} />
          <p className='description'>{item?.description}</p>
          <p className='price'>from {item?.price}</p>
          <div className='buttonContainer'>
            <Link to={`product/${item?._id}`} className='select-option'>
              Select Options
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHorizotal;
