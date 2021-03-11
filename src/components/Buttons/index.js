import React from "react"
import { TouchableOpacity } from "react-native"
import Block from '../Block'
import Text from '../Text'
import { Neomorph, Shadow } from 'react-native-neomorph-shadows'
import styles from "./style"




export const PrimaryButton = ({ buttonStyles, shadowStyles, textStyles, btnText }) => {

  return (

    <Shadow style={[styles.btnShadow, shadowStyles]}>
      <TouchableOpacity style={[styles.btnWrapper, buttonStyles]}>
        <Text center size={12} white bold style={[styles.text, textStyles]}>{btnText}</Text>
      </TouchableOpacity>
    </Shadow>

  );
}