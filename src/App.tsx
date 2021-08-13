import './App.scss';
import { Fragment } from 'react';
import Header from './containers/HeaderContainer';
import Main from './containers/MainContainer/';
import ProductPageContainer from './containers/ProductPageContainer';

function App() {
  return (
    <Fragment>
      <Header />
      <Main />
      <ProductPageContainer />
    </Fragment>
  );
}

export default App;
