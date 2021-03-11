import React, { useState } from "react"
import { Image, TouchableOpacity, CheckBox } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'
import Block from '../../../components/Block'
import Text from '../../../components/Text'
import { PrimaryButton } from '../../../components/Buttons'
import { PrimaryInput } from '../../../components/TextInput'
import styles from "./style"




export default LoginScreen = props => {
  const [isSelected, setIsSelected] = useState(false)



  return (

    <Block center block padding={[25]}>
      <Image style={styles.logo} source={require('../../../assets/images/logo_red.png')} />
      <Block style={styles.loginContainer} margin={[26, 0, 0]}>
        <Text style={styles.loginText}>login</Text>
        <Block margin={[26, 0, 0]} center>
          <PrimaryInput
            placeholder="Email Address"
            placeholderTextColor="#97A7C3"
          />
          <Block margin={[30.57, 0, 0]}>
            <PrimaryInput
              placeholder="Email Address"
              placeholderTextColor="#97A7C3"
            />
          </Block>
        </Block>

        <Block row spaceBetween margin={[10, 20, 20]}>
          <Block row center middle>
            <CheckBox
              value={isSelected}
              onValueChange={setIsSelected}
            />
            <Text small>Stay logged in</Text>
          </Block>

          <TouchableOpacity>
            <Text small style={{
              position: 'relative',
              top: 4,
            }}>Forgot password</Text>
          </TouchableOpacity>
        </Block>

        <Block center>
          <PrimaryButton btnText="LOGIN" />
        </Block>

        <Block row middle center margin={[20, 0]}>
          <Text style={{
            height: 2,
            width: 100,
            backgroundColor: 'red'
          }}></Text>
          <Text style={{
            marginHorizontal: 10
          }}>Or</Text>
          <Text style={{
            height: 2,
            width: 100,
            backgroundColor: 'red'
          }}></Text>
        </Block>

        <Block row center middle>
          <TouchableOpacity style={{
            marginHorizontal: 30,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            width: 40,
            borderRadius: 30,
          }}>
            <Ionicons color="#97A7C3" size={20} name="md-mail-open" />
          </TouchableOpacity>
          <TouchableOpacity style={{
            marginHorizontal: 30,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            width: 40,
            borderRadius: 30,
          }}>
            <Ionicons color="#97A7C3" size={20} name="md-mail-open" />
          </TouchableOpacity>
          <TouchableOpacity style={{
            marginHorizontal: 30,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            width: 40,
            borderRadius: 30,
          }}>
            <Ionicons color="#97A7C3" size={20} name="md-mail-open" />
          </TouchableOpacity>
        </Block>
      </Block>

      <Block width center padding={[20]} style={{
        backgroundColor: 'red',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
      }}>
        <Text white>Don't have an account?
          <TouchableOpacity>
            <Text style={{
              position: 'relative',
              top: 4,
              marginLeft: 10
            }}>Sign In</Text>
          </TouchableOpacity>
        </Text>
      </Block>
    </Block>

  );
}