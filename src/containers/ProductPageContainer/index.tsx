import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductList } from '../../actions/products.actions';
import Product from '../../components/Product';
import SlicSlider from '../../components/Slider';
import Wideget from '../../components/Wideget';

import './styles.scss';

type Props = {};

const ProductPageContainer: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state: any) => state.productList);
  const { products, loading, error } = productList;

  React.useEffect(() => {
    dispatch(ProductList());
  }, [dispatch]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  if (loading) {
    return <h1>...loading</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <section className='ProductPageContainer'>
      <div className='container'>
        <div className='row'>
          <Wideget width='50%'>
            <SlicSlider {...settings}>
              {products && products.map((item: any) => <Product key={`item-${item._id}`} item={item} />)}
            </SlicSlider>
          </Wideget>

          <Wideget width='50%'>
            <SlicSlider {...settings}>
              {products && products.map((item: any) => <Product key={`item-${item._id}`} item={item} />)}
            </SlicSlider>
          </Wideget>
        </div>
      </div>
    </section>
  );
};

export default ProductPageContainer;
