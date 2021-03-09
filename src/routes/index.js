import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

import welcomeScreen from '../screens/Welcome'


const Routes = props => {

  return (
    <Router >
      <Scene key='root'>

        <Scene key='welcome' component={welcomeScreen} hideNavBar />

      </Scene>
    </Router>
  );
}

export default Routes;
