import './App.scss';
import { Fragment } from 'react';
import Header from './containers/HeaderContainer';
import Main from './containers/MainContainer/';

function App() {
  return (
    <Fragment>
      <Header />
      <Main />
    </Fragment>
  );
}

export default App;
