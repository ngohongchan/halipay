import './App.scss';
import { Fragment } from 'react';
import Main from './containers/MainContainer/';
import Footer from './containers/FooterContainer';
import ProductDetail from './containers/ProductDetail';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './containers/NavBarContainer';

function App() {
  return (
    <Fragment>
      <NavBarContainer />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route exact path='/product/:id' component={ProductDetail} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
