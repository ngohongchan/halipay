import './App.scss';
import { Fragment } from 'react';
import Header from './containers/HeaderContainer';
import Main from './containers/MainContainer/';
import Footer from './containers/FooterContainer';
import ProductDetail from './containers/ProductDetail';
import { Route, Switch } from 'react-router-dom';
import ProductHorizontal from './containers/ProductHorizontal';
import ProductPageContainer from './containers/ProductSliderPageContainer';
import MyCart from './containers/MyCartContainer';

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Main />
          <ProductPageContainer />
          <ProductHorizontal />
        </Route>
        <Route exact path='/product/:id' component={ProductDetail} />
      </Switch>
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
