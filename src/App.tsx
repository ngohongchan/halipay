import './App.scss';
import { Fragment } from 'react';
import Main from './containers/MainContainer/';
import Footer from './containers/FooterContainer';
import ProductDetail from './containers/ProductDetail';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './containers/NavBarContainer';
// import About from './containers/AboutContainer';
import ProductsList from './containers/ProductListContainer';

function App() {
  return (
    <Fragment>
      <NavBarContainer />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/product/:id' component={ProductDetail} />
        <Route exact path='/products' component={ProductsList} />
      </Switch>
      {/* <About /> */}
      <Footer />
    </Fragment>
  );
}

export default App;
