import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductList } from '../../actions/products.actions';

import List from '../../components/List';
import Product from '../../components/Product';
import TimerContainer from '../TimerContainer';

import './styles.scss';

type Props = {};

const ProductHorizontal: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state: any) => state.productList);
  const { products, loading, error } = productList;
  const productsSale = products?.filter((item: any) => item.sale).slice(0, 5);

  React.useEffect(() => {
    dispatch(ProductList());
  }, [dispatch]);

  if (loading) {
    return null;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className='WrapperContainer'>
      <div className='header'>
        <div className='title'>
          <h1>Hot Deals</h1>
        </div>
        <TimerContainer />
      </div>
      <div className='body'>
        <div className='row'>
          <List component={Product} items={productsSale} />
        </div>
      </div>
    </div>
  );
};

export default ProductHorizontal;
