import React, { useState } from "react"
import { ImageBackground, Image, Dimensions, TouchableOpacity } from "react-native"
import Block from '../../components/Block'
import Text from '../../components/Text'
import { welcomeSliderShadow, btnShadow } from "../../constant/boxShadow"
import { BoxShadow } from "react-native-shadow"
import Carousel, { Pagination } from 'react-native-snap-carousel'
const { width, height } = Dimensions.get('window')


import styles from "./style"


const functionsData = [
  { id: 1, des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud', title: 'Welcome' },
  {
    id: 2,
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
    title: 'Address',
  },
  {
    id: 3,
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
    title: 'Documents',
  },
  {
    id: 4,
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
    title: 'Gallery',
  },
]
export default StartScreen = props => {

  const [entries, setEntries] = useState(functionsData);
  const [activeSlide, setActiveSlide] = useState(1);

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
        <BoxShadow setting={btnShadow}>
          <TouchableOpacity style={styles.btn}>
            <Text center size={12} white bold>SKIP</Text>
          </TouchableOpacity>
        </BoxShadow>

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

      <Block center padding={[25]}>



        <BoxShadow setting={welcomeSliderShadow}>
          <Block style={styles.sliderBlock}>
            <Carousel
              ref={c => {
                _carousel = c
              }}
              data={functionsData}
              renderItem={_renderItem}
              sliderWidth={width - 40}
              itemWidth={width - 80}
              activeSlideAlignment="start"
              inactiveSlideOpacity={0}
              inactiveSlideScale={1}
              onSnapToItem={(index) => setActiveSlide(index)}
            />
            <Pagination
              dotsLength={entries.length}
              activeDotIndex={activeSlide}
              containerStyle={{ position: 'absolute', left: 5, bottom: 35 }}
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
        </BoxShadow>
      </Block>
    </Block>

  );
}