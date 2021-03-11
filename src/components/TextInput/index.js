import React from "react"
import { TouchableOpacity, TextInput, Dimensions } from "react-native"
import Block from '../Block'
import Text from '../Text'
import { colors } from '../../styles/theme';
import { Neomorph, Shadow } from 'react-native-neomorph-shadows'
import styles from "./style"


const { width, height } = Dimensions.get('window');



export const PrimaryInput = ({ shadowStyles, placeholder, inputStyles, ...rest }) => {

  return (

    <Shadow inner style={{
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.5,
      shadowColor: "grey",
      shadowRadius: 10,
      borderRadius: 20,
      backgroundColor: colors.off_white,
      width: width - 60,
      height: 35,
      paddingHorizontal:20
    }}>
      <TextInput
        style={[styles.input, inputStyles]}
        placeholder={placeholder}
        {...rest}
      />
    </Shadow>

  );
}
