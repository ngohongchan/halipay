import './App.scss';
import { Fragment } from 'react';
import Header from './containers/HeaderContainer';
import Main from './containers/MainContainer/';
import Footer from './containers/FooterContainer';

function App() {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
