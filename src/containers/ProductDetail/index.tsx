import { type } from 'os';
import React from 'react';
import { Link } from 'react-router-dom';

import search from './search.svg';
import star from './icons-star.svg';
import fire from './icons-fire.svg';
import heart from './icons-heart.svg';
import share from './icons-share.svg';
import eye from './icons-eye.svg';



import './style.scss';

type Props = {};

const ProductDetail: React.FC<Props> = () => {
    return (
        <main>
            <div className="container">
                <div className="breadcrumb">
                    <Link to='/'>Home</Link>
                    <span> / </span>
                    <span>
                        <Link to='/'>Collection Skin Suppermarket 1</Link>
                    </span>
                    <span> / </span>
                    <span>Hentum Tosmois De Laptop Hamo Dincidunts</span>
                </div>
                <div className="product-defaul">
                    <div className="row">
                        <div className="product-photo">
                            <div className='product-photo__img'>
                                <div className='sale'>
                                    <span>Sale</span>
                                </div>
                                <img src="./images/product-1.jpg" alt="" />
                            </div>
                            <div className='product-photo__zoom'>
                                <span>
                                    <img src={search} alt="search" />
                                </span>
                                <span>Zoom the images with mouse</span>
                            </div>
                            <div className="product-photo__list">
                                <ul>
                                    <li className='active'>
                                        <Link to='/'>
                                            <img src="./images/pro-list-1.jpg" alt="" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/'>
                                            <img src="./images/pro-list-2.jpg" alt="" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/'>
                                            <img src="./images/pro-list-3.jpg" alt="" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/'>
                                            <img src="./images/pro-list-4.jpg" alt="" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/'>
                                            <img src="./images/pro-list-5.jpg" alt="" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="product-photo__ask">
                                <img src="./images/online-support.png" alt="" />
                                <div>
                                    <b>ASK US ANYTHING</b>
                                    <span>Avaliable 24/7 at(+84)09 12354</span>
                                </div>
                                <Link to='/'>ASK EXPERT</Link>
                            </div>
                        </div>
                        <div className="pro-contents">
                            <h2 className='pro-contents__title'>Hentum Tosmois de Laptop Hamo Dincidunts</h2>
                            <div className='pro-contents__vote'>
                                <span>
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <span>2 Reviews</span>
                                </span>
                                <div>
                                    <img src={fire} alt="fire" />
                                    <span>7 sold in last 15 hours</span>
                                </div>
                            </div>
                            <div className="pro-contents__type">
                                <span>Vendor: 
                                    <Link to='/'> Ella - Halothemes</Link>
                                </span>
                                <span>SKU: 
                                    <Link to='/'> KJSU-58636</Link>
                                </span>
                                <span>Availability: 
                                    <Link to='/'> 10 in stock</Link>
                                </span>
                                <span>Product Type: 
                                    <Link to='/'> none</Link>
                                </span>
                            </div>
                            <div className="pro-contents__price">
                                <span className='price'>$69.00</span>
                                <span className='price-sale'>$99.00</span>
                            </div>
                            <div className="pro-contents__text">
                                <p>At vero eos et accusamus et iusto odio dignissimos
                                    ducimus qui blanditiis praesentium voluptatum deleniti
                                    atque corrupti quos dolores et quas molestias
                                    excepturi sint occaecati del cupiditate non provident,
                                    similique sunt in culpa qui officia deserunt mollitia
                                    animi, id est laborum et dolorum fuga. Et harum quidem
                                    rerum facilis est...</p>
                            </div>
                            <div className="pro-contents__quantity">
                                <span>Quantity: </span>
                                <div>
                                    <input type="number" />
                                    <input type="submit" value='Add Cart' />
                                    <Link to='/'>
                                        <img src={heart} alt="heart" />
                                    </Link>
                                    <Link to='/'>
                                        <img src={share} alt="share" />
                                    </Link>
                                </div>
                            </div>
                            <div className="pro-contents__cdt">
                                <input type="radio" />
                                <span>I agree with the <Link to='/'>Term & condition</Link></span>
                            </div>
                            <div className="pro-contents__buy">
                                <input type="submit" value='Buy It Now' />
                            </div>
                            <div className="pro-contents__eye">
                                <img src={eye} alt="eye" />
                                <span>200 customer are viewing this product</span>
                            </div>
                            <div className="pro-contents__secure">
                                <img src="./images/secure.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-bottom">
                    <div className="pro-tabs">
                        <ul>
                            <li>

                                <Link to='/'>Description</Link>
                            </li>
                            <li>
                                <Link to='/'>Shipping & Resturn</Link>
                            </li>
                            <li>
                                <Link to='/'>Custom Product Tab</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="pro-tabs__1">
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus
                            qui blanditiis praesentium voluptatum deleniti atque corrupti
                            quos dolores et quas molestias excepturi sint occaecati del
                            cupiditate non provident, similique sunt in culpa qui officia
                            deserunt mollitia animi, id est laborum et dolorum fuga.
                            Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque
                            nihil impedit quo minus id quod maxime placeat facere
                            possimus.</p>
                        <div>
                            <img src="./images/description-1.jpg" alt="" />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Vel, optio! Ratione animi quis minus at reprehenderit
                                dolor, doloribus unde illum tenetur deleniti quos
                                officia amet voluptate culpa numquam nesciunt enim?</p>
                        </div>
                    </div>
                    <div className="pro-tabs__2">
                        <h4>RETURNS POLICY</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Inventore illo laudantium fuga esse, id explicabo eligendi
                            quae, consequuntur dolorem vero quisquam nam aliquid
                            cumque omnis ad soluta molestias sint! Eligendi!</p>
                        <p>Donec ullamcorper magna enim, vitae fermentum turpis
                            elementum quis. Interdum et malesuada fames ac ante
                            ipsum primis in faucibus.</p>
                        <p>Curabitur vel sem mi. Proin in lobortis ipsum. Aliquam
                            rutrum tempor ex ac rutrum. Maecenas nunc nulla,
                            placerat at eleifend in, viverra etos sem. Nam sagittis
                            lacus metus, dignissim blandit magna euismod eget.
                            Suspendisse a nisl lacus. Phasellus eget augue tincidunt,
                            sollicitudin lectus sed, convallis desto. Pellentesque
                            vitae dui lacinia, venenatis erat sit amet, fringilla
                            felis. Nullam maximus nisi nec mi facilisis.</p>
                        <h4>SHIPPING</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Placeat, atque provident? Odit eum sequi libero
                            perspiciatis, deleniti incidunt sint maiores reiciendis
                            at quaerat officia explicabo. Expedita blanditiis ipsa
                            perferendis id!</p>
                        <p>Donec ullamcorper magna enim, vitae fermentum turpis
                            elementum quis. Interdum et malesuada fames ac ante
                            ipsum primis in faucibus.</p>
                        <p>Curabitur vel sem mi. Proin in lobortis ipsum. Aliquam
                            rutrum tempor ex ac rutrum. Maecenas nunc nulla,
                            placerat at eleifend in, viverra etos sem. Nam sagittis
                            lacus metus, dignissim blandit magna euismod eget.
                            Suspendisse a nisl lacus. Phasellus eget augue tincidunt,
                            sollicitudin lectus sed, convallis desto. Pellentesque
                            vitae dui lacinia, venenatis erat sit amet, fringilla
                            felis. Nullam maximus nisi nec mi facilisis.</p>
                    </div>
                    <div className="pro-tabs__3">
                        <p>Nam tempus turpis at metus scelerisque placerat nulla
                            deumantos solicitud felis. Pellentesque diam dolor,
                            elementum etos lobortis des mollis ut risus. Sedcus
                            faucibus an sullamcorper mattis drostique des commodo
                            pharetras loremos.Donec pretium egestas sapien et
                            mollis. Pellentesque diam dolor cosmopolis etos lobortis.</p>
                        <dl>
                            <dt>Comodous: </dt>
                            <dd>Comodous in tempor ullamcorper miaculis</dd>
                        </dl>
                        <dl>
                            <dt>Mattis laoreet: </dt>
                            <dd>Pellentesque vitae neque mollis urna mattis laoreet.</dd>
                        </dl>
                        <dl>
                            <dt>Divamus de ametos: </dt>
                            <dd>Divamus sit amet purus justo.</dd>
                        </dl>
                        <dl>
                            <dt>Molestie: </dt>
                            <dd>Proin molestie egestas orci ac suscipit risus posuere loremous</dd>
                        </dl>
                    </div>
                </div>
                <div className="pro-reviews">
                    <div className="pro-reviews__header">
                        <h2>Customer Reviews</h2>
                        <div className="summary">
                            <span>
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                            </span>
                            <span>Based on 2 reviews</span>
                            <span>
                                <Link to='/'>Write a reviews</Link>
                            </span>
                        </div>
                    </div>
                    <div className="pro-reviews__user">
                        <div>
                            <span>
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                            </span>
                            <h3>Previews test</h3>
                            <span>test on May 31, 2021</span>
                        </div>
                        <p>Testing multiple lines powrjpwrj rj pworj
                            powrj powrj powrj pow rjpowrj p rjpow rjpow
                            rjpwo rjpow rjpwor jpwor jpw rjpw rjpw rjpwo rjpew
                            rjprjw rwe rwe rwer wer we rewro pjewrpojewporjewpor
                            jewpr jpowr jpew rp r jpo rjprjrpowrj po jepojew
                            rpojew rporjew p rjewr ew r</p>
                        <Link to='/'>Report as Inappropriate</Link>
                    </div>
                    <div className="pro-reviews__user">
                        <div>
                            <span>
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                            </span>
                            <h3>Love it</h3>
                            <span>test on May 31, 2021</span>
                        </div>
                        <p>Testing multiple lines powrjpwrj rj pworj
                            powrj powrj powrj pow rjpowrj p rjpow rjpow
                            rjpwo rjpow rjpwor jpwor jpw rjpw rjpw rjpwo rjpew
                            rjprjw rwe rwe rwer wer we rewro pjewrpojewporjewpor
                            jewpr jpowr jpew rp r jpo rjprjrpowrj po jepojew
                            rpojew rporjew p rjewr ew r</p>
                        <Link to='/'>Report as Inappropriate</Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProductDetail;
