import React from "react"
import { ImageBackground, Image, Dimensions, TouchableOpacity } from "react-native"
import Block from '../../components/Block'
import Text from '../../components/Text'
import { welcomeSliderShadow } from "../../constant/boxShadow"
import { BoxShadow } from "react-native-shadow"
import { Neomorph } from 'react-native-neomorph-shadows'
import Carousel, { Pagination } from 'react-native-snap-carousel'


import styles from "./style"
import { useState } from "react"


const functionsData = [
  { id: 1, des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor', title: 'Welcome' },
  {
    id: 2,
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor',
    title: 'Address',
  },
  {
    id: 3,
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor',
    title: 'Documents',
  },
  {
    id: 4,
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor',
    title: 'Gallery',
  },
]
export default WelcomeScreen = props => {

  const [entries, setEntries] = useState(functionsData);
  const [activeSlide, setActiveSlide] = useState();

  const _renderItem = ({ item, index }) => {
    return (
      <Block
        style={[
          styles.container
        ]}>
        <Text textColor style={styles.title}>
          {item.title}
        </Text>
        <Text textColor style={styles.des}>
          {item.des}
        </Text>
        <Neomorph
          swapShadows
          style={styles.btnShadow}>
          <TouchableOpacity style={styles.btn}>
            <Text center white bold>SKIP</Text>
          </TouchableOpacity>
        </Neomorph>
      </Block>
    )
  }

  return (

    <Block block>

      <Block >
        <ImageBackground style={styles.bgImg} source={require('../../assets/images/welcome.png')}>
          <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
        </ImageBackground>
      </Block>

      <Block flex={0.3} padding={[25]}>

        {/* <BoxShadow setting={welcomeSliderShadow}>

        </BoxShadow> */}

        <Neomorph
          swapShadows
          style={styles.shadow}>
          <Block style={styles.sliderBlock}>
            <Carousel
              ref={c => {
                _carousel = c
              }}
              data={functionsData}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={335}
              activeSlideAlignment="start"
              inactiveSlideOpacity={1}
              inactiveSlideScale={1}
              onSnapToItem={(index) => setActiveSlide(index)}
            />
            <Pagination
              dotsLength={entries.length}
              activeDotIndex={activeSlide}
              containerStyle={{ position: 'absolute', left: 20, bottom: 20 }}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 100,
                marginLeft: -10,
                backgroundColor: '#DD4301'
              }}
              inactiveDotStyle={{
                // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
          </Block>
        </Neomorph>
      </Block>
    </Block>

  );
}