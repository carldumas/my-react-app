import './App.css';
import Home from './Home';
import About from './About';
import Header from './Header';
import styled from 'styled-components';

import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <HashRouter basename='/'>
        <div>
          <Header />
          <Main />
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about' component={About} />
        </div>
      </HashRouter>
    </div>
  );
}

const Main = styled.div`
  flex: 1;
  width: 97%;
  padding-top: 60px;
`;

export default App;
