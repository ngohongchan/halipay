import './App.scss';
import { Fragment } from 'react';
import Main from './containers/MainContainer/';
import Footer from './containers/FooterContainer';
import ProductDetail from './containers/ProductDetail';
import { Route, Switch } from 'react-router-dom';
import ProductHorizontal from './containers/ProductHorizontal';
import ProductPageContainer from './containers/ProductSliderPageContainer';
import NavBarContainer from './containers/NavBarContainer';
import About from './containers/AboutContainer';
import ProAjax from './containers/ProductAjaxContainer';

function App() {
  return (
    <Fragment>
      <NavBarContainer />
      <Switch>
        <Route exact path='/'>
          <Main />
          <ProductPageContainer />
          <ProductHorizontal />
        </Route>
        <Route exact path='/product/:id' component={ProductDetail} />
      </Switch>
      <ProAjax />
      <About />
      <Footer />
    </Fragment>
  );
}

export default App;
