import React from "react"
import { TouchableOpacity } from "react-native"
import Block from '../Block'
import Text from '../Text'
import styles from "./style"




export const PrimaryButton = ({ buttonStyles, shadowStyles, textStyles, btnText }) => {

  return (

      <TouchableOpacity style={[styles.btnWrapper, buttonStyles]}>
        <Text center size={12} white bold style={[styles.text, textStyles]}>{btnText}</Text>
      </TouchableOpacity>

  );
}

export const PrimaryOutlineButton = ({ outlineBtnStyles, outlineShadowStyles, textStyles, btnText }) => {

  return (

      <TouchableOpacity style={[styles.outlineBtnWrapper, outlineBtnStyles]}>
        <Text center size={12} white bold style={[styles.outlinetext, textStyles]}>{btnText}</Text>
      </TouchableOpacity>

  );
}