import React, { useState } from "react"
import { ImageBackground, Image, TouchableOpacity } from "react-native"
import Block from '../../components/Block'
import Text from '../../components/Text'
import { PrimaryButton, PrimaryOutlineButton } from '../../components/Buttons'
import styles from "./style"




export default WelcomeScreen = props => {



  return (

    <Block center middle block>
      <Text center style={styles.title}>Welcome To</Text>
      <Image source={require('../../assets/images/logo_red.png')} />
      <Block center margin={[63.64, 0, 0]}>
        <PrimaryButton btnText="login" />
        <PrimaryOutlineButton outlineShadowStyles={styles.btn} btnText="sign up" />
      </Block>
    </Block>

  );
}