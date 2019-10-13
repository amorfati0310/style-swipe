import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle'

import Login from './pages/Login';
import Board from './pages/Board';
import Signup from './pages/Signup';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
          <Route path="/board" component={Board} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
        <GlobalStyle/>
    </Router>
  );
}

export default App;
