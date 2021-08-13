import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductList } from '../../actions/products.actions';

type Props = {};

const ProductPageContainer: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state: any) => state.productList);
  console.log(productList);

  React.useEffect(() => {
    dispatch(ProductList());
  }, [dispatch]);

  return (
    <section className='ProductPageContainer'>
      <div className='container-fluid'></div>
    </section>
  );
};

export default ProductPageContainer;
