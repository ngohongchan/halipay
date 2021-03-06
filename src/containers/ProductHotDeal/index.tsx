import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../../actions/products.actions';

import List from '../../components/List';
import Product from '../../components/Product';
import TimerContainer from '../TimerContainer';

import './styles.scss';

type Props = {};

const ProductHotDeal: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state: any) => state.productList);
  const { loading, error, products } = productList;
  const productsSale = products?.products?.filter((item: any) => item.sale).slice(0, 5) || null;

  React.useEffect(() => {
    dispatch(listProduct());
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
        <div className='row'>{products && <List component={Product} items={productsSale} />}</div>
      </div>
    </div>
  );
};

export default ProductHotDeal;
