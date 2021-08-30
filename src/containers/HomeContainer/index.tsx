import React from 'react';
import SlicSlider from '../../components/Slider';

import { imageSlider } from '../../data/slider';
import SideBar from '../SideBarContainer';
import Banner from '../BannerContainer';

import './styles.scss';

type Props = {};

const HomeContainer: React.FC<Props> = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
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
  );
};

export default HomeContainer;
