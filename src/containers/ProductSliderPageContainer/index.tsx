import React from 'react';
import Loading from '../../components/Loading';
import Product from '../../components/Product';
import SlicSlider from '../../components/Slider';
import Wideget from '../../components/Wideget';
import { useProductsContext } from '../../context/products';

import './styles.scss';
import { ProductType } from './types';

type Props = {};

const ProductPageContainer: React.FC<Props> = () => {
  const { loading, error, productSale, productNew } = useProductsContext();
  // console.log({ productNew });

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className='ProductSliderPageContainer'>
      <div className='row'>
        <Wideget width='50%'>
          <div className='titleContainer'>
            <h2>New Products</h2>
          </div>
          <SlicSlider {...settings}>
            {productNew && productNew.map((item: ProductType) => <Product key={`item-${item._id}`} item={item} />)}
          </SlicSlider>
        </Wideget>

        <Wideget width='50%'>
          <div className='titleContainer'>
            <h2>Sale Products</h2>
          </div>
          <SlicSlider {...settings}>
            {productSale && productSale.map((item: ProductType) => <Product key={`item-${item._id}`} item={item} />)}
          </SlicSlider>
        </Wideget>
      </div>
    </div>
  );
};

export default ProductPageContainer;
