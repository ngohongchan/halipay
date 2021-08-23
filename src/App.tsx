import './App.scss';
import { Fragment } from 'react';
import Header from './containers/HeaderContainer';
import Main from './containers/MainContainer/';
import Footer from './containers/FooterContainer';
import ProductPageContainer from './containers/ProductPageContainer';
import ProductDetail from './containers/ProductDetail';
import { Route, Switch } from 'react-router-dom';
import MyCart from './containers/MyCartContainer';

function App() {
  return (
    <Fragment>
      <Header />
      {/* <Main /> */}
      {/* <ProductPageContainer /> */}
      <MyCart />
      <Switch>
        <Route path='/product/:id' component={ProductDetail} />
      </Switch>
      {/* <ProductDetail /> */}
      <Footer />
    </Fragment>
  );
}

export default App;
