import React from 'react';
import Product from '../../components/Product';
import SlicSlider from '../../components/Slider';
import Wideget from '../../components/Wideget';
import { useProductsContext } from '../../context/products';
import { ProductType } from './types';

type Props = {};

const ProuctFeatured: React.FC<Props> = () => {
  const { loading, error, productFeatured } = useProductsContext();

  if (loading) {
    return null;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  return (
    <div className='productFeatured'>
      <div className='container'>
        <div className='row'>
          <Wideget width='100%'>
            <div className='titleContainer'>
              <h2>Products Featured</h2>
            </div>
            <SlicSlider {...settings}>
              {productFeatured &&
                productFeatured.map((item: ProductType) => <Product key={`item-${item._id}`} item={item} />)}
            </SlicSlider>
          </Wideget>
        </div>
      </div>
    </div>
  );
};

export default ProuctFeatured;
