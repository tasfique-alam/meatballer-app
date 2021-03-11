import React from "react"
import { TouchableOpacity, TextInput, Dimensions } from "react-native"
import Block from '../Block'
import Text from '../Text'
import { colors } from '../../styles/theme'
import Ionicons from 'react-native-vector-icons/Ionicons'
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
      width: 300,
      height: 35,
      flexDirection: 'row',
      alignItems:'center',
      paddingHorizontal: 24
    }}>
      <Ionicons color="#97A7C3" size={12} name="md-mail-open" />
      <TextInput
        style={[styles.input, inputStyles]}
        placeholder={placeholder}
        {...rest}
      />
    </Shadow>

  );
}
