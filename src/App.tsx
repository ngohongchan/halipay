import './App.scss';
import { Fragment } from 'react';
import Header from './containers/HeaderContainer';
import SideBar from './containers/SideBarContainer';
import MainContainer from './components/MainComponent';

function App() {
  return (
    <Fragment>
      <Header />
      <MainContainer>
        <SideBar />
      </MainContainer>
    </Fragment>
  );
}

export default App;
