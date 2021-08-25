import React from 'react';
import SlicSlider from '../../components/Slider';
import './styles.scss';

import { imageSlider } from '../../data/slider';
import SideBar from '../SideBarContainer';
import Banner from '../BannerContainer';
import Wideget from '../../components/Wideget';
import CustomBanner from '../../components/Banner';
import ProductPageContainer from '../ProductSliderPageContainer';
import ProductHorizontal from '../ProductHorizontal';

type Props = {};

const Main: React.FC<Props> = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <React.Fragment>
      <div className='container'>
        <Wideget width='100%'>
          <div className='Wrapper'>
            <SideBar />
            <div className='thumb-banner'>
              <SlicSlider {...settings}>
                {imageSlider &&
                  imageSlider.map((image, idx) => {
                    return (
                      <figure className='item' key={idx}>
                        <img src={image.image} className='thumb-preview' alt={image.image} />
                      </figure>
                    );
                  })}
              </SlicSlider>
            </div>
            <Banner />
          </div>
        </Wideget>
        <Wideget width='100%'>
          <div className='customBanner'>
            <CustomBanner img='./images/custombanner.png' alt='custom banner' />
          </div>
        </Wideget>
      </div>
      <ProductPageContainer />
      <Wideget width='100%'>
        <div className='customBanner'>
          <CustomBanner img='./images/banner-custom-middle-1.jpg' alt='custom banner' />
        </div>
      </Wideget>
      <ProductHorizontal />
    </React.Fragment>
  );
};

export default Main;
