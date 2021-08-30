import React from 'react';
import './styles.scss';

import Wideget from '../../components/Wideget';
import CustomBanner from '../../components/Banner';
import ProductPageContainer from '../ProductSliderPageContainer';
import ProuctFeatured from '../ProductFeatured';
import HomeContainer from '../HomeContainer';
import ProductHotDeal from '../ProductHotDeal';

type Props = {};

const Main: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <div className='container'>
        <Wideget width='100%'>
          <HomeContainer />
        </Wideget>
        <Wideget width='100%'>
          <div className='customBanner'>
            <CustomBanner img='./images/custombanner.png' alt='custom banner' />
          </div>
        </Wideget>
      </div>
      <ProductPageContainer />
      <ProuctFeatured />
      <Wideget width='100%'>
        <div className='customBanner'>
          <CustomBanner img='./images/banner-custom-middle-1.jpg' alt='custom banner' />
        </div>
      </Wideget>
      <ProductHotDeal />
    </React.Fragment>
  );
};

export default Main;
