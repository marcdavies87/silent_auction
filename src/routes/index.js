
import React from 'react';
import { Scene, Router} from 'react-native-router-flux';

import Login from './Login';
import Signup from './Signup';
//import { Provider } from 'react-redux';

//import store from './store';
//import Routes from './routes';

export default () => (
  <Router>
    <Scene key="root">
      <Scene key="login" component={Login} hideNavBar/>
      <Scene key="signup" component={Signup} initial hideNavBar/>
    </Scene>
  </Router>
);
