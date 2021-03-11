import React, { useState } from "react"
import { ImageBackground, Image, TouchableOpacity } from "react-native"
import Block from '../../../components/Block'
import Text from '../../../components/Text'
import { PrimaryButton } from '../../../components/Buttons'
import { PrimaryInput } from '../../../components/TextInput'
import styles from "./style"




export default LoginScreen = props => {



  return (

    <Block center block padding={[25]}>
      <Image style={styles.logo} source={require('../../../assets/images/logo_red.png')} />
      <Block style={styles.loginContainer}>
        <Text style={styles.loginText}>login</Text>
        <Block margin={[26,0,0]} center>
          <PrimaryInput 
            placeholder="Email Address"
            placeholderTextColor="#97A7C3"
          />
        </Block>
      </Block>
    </Block>

  );
}