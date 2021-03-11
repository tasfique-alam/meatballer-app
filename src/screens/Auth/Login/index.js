import React, { useState } from "react"
import { ImageBackground, Image, TouchableOpacity } from "react-native"
import Block from '../../../components/Block'
import Text from '../../../components/Text'
import { PrimaryButton } from '../../../components/Buttons'
import styles from "./style"




export default LoginScreen = props => {



  return (

    <Block center middle block>

      <Text center style={styles.title}>Welcome To</Text>
      <Image source={require('../../../assets/images/logo_red.png')} />
      <Block center>
        <PrimaryButton btnText="login" />
      </Block>
    </Block>

  );
}