import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

import StartScreen from '../screens/StartScreen'
import welcomeScreen from '../screens/Welcome'
import LoginScreen from '../screens/Auth/Login'


const Routes = props => {

  return (
    <Router >
      <Scene key='root'>

        <Scene  key='start' component={StartScreen} hideNavBar />

        <Scene  key='welcome' component={welcomeScreen} hideNavBar />

        <Scene initial key='login' component={LoginScreen} hideNavBar />

      </Scene>
    </Router>
  );
}

export default Routes;
