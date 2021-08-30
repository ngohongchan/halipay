import { type } from "os";
import React from "react";
import { Link } from 'react-router-dom';
import './style.scss';

import star from './icons-star.svg';
import fire from './icons-fire.svg';
import heart from './icons-heart.svg';
import share from './icons-share.svg';
import eye from './icons-eye.svg';


type Props = {};


const ProAjax: React.FC<Props> = () => {
    return (
        <div className="pro-ajax">
            <span>X</span>
            <div className="pro-ajax-body">
                <div className="modal-img">
                    <div className='modal-img__dex'>
                        <img src="./images/pro-list-1.jpg" alt="" />
                    </div>
                    <div className='modal-img__list'>
                        <img src="./images/pro-list-1.jpg" alt="" />
                        <img src="./images/pro-list-2.jpg" alt="" />
                        <img src="./images/pro-list-3.jpg" alt="" />
                        <img src="./images/pro-list-4.jpg" alt="" />
                    </div>

                </div>

                <div className="modal-content">
                    <h2 className='modal-content__headertext'>Laptop Unde Tele Ona pharetras praneu homuir</h2>
                    <div className='modal-content__vote'>
                        <span>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <span>No reviews</span>
                        </span>
                        <span>
                            <img src={fire} alt="" />
                            <span>7 sold in last 16 hours</span>
                        </span>
                    </div>
                    <div className='modal-content__type'>
                        <dl>
                            <dt>Brand: </dt>
                            <dd>Ella - Halothemes</dd>
                        </dl>
                        <dl>
                            <dt>Product Code: </dt>
                            <dd>KJSU-58436</dd>
                        </dl>
                        <dl>
                            <dt>Avaliable: </dt>
                            <dd>10 In stock</dd>
                        </dl>
                    </div>
                    <div className='modal-content__price'>
                        <span>$59.00</span>
                    </div>
                    <div className='modal-content__deception'>
                        <p>At vero eos et accusamus et iusto
                            odio dignissimos ducimus qui blanditiis
                            praesentium voluptatum deleniti atque co...</p>
                    </div>
                    <div className='modal-content__size'>
                        <div>
                            <span>Size : XS</span>
                            <span>SIZE GUIDER</span>
                        </div>
                        <div className='size-mini'>
                            <div>
                                <label htmlFor="">XS</label>
                            </div>
                            <div>
                                <label htmlFor="">S</label>
                            </div>
                            <div>
                                <label htmlFor="">M</label>
                            </div>
                            <div>
                                <label htmlFor="">L</label>
                            </div>
                            <div>
                                <label htmlFor="">XL</label>
                            </div>
                        </div>
                    </div>
                    <div className='modal-content__quantity'>
                        <div className='quantity-box'>
                            <span>QUANTITY: </span>
                            <div>
                                <span> - </span>
                                <span className='quantity-number'> 1 </span>
                                <span> + </span>
                            </div>
                        </div>
                    </div>
                    <div className='modal-content__addcart'>
                        <input type="submit" value='Add To Cart' />
                        <Link to='/'>
                            <img src={heart} alt="" />
                        </Link>
                        <Link to='/'>
                            <img src={share} alt="" />
                        </Link>
                    </div>
                    <div className='modal-content__notes'>
                        <img src={eye} alt="" />
                        <span>customers are viewing this product</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProAjax;