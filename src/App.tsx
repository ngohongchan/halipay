import './App.scss';
import { Fragment } from 'react';
import Header from './containers/HeaderContainer';
import Main from './containers/MainContainer/';
import Footer from './containers/FooterContainer';
import ProductPageContainer from './containers/ProductPageContainer';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <Fragment>
      <Header />
      {/* <Main /> */}
      {/* <ProductPageContainer /> */}
      <ProductDetail />
      <Footer />
    </Fragment>
  );
}

export default App;
