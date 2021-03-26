
import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')


const welcomeSliderShadow = {
  width: width - 50,
  height: 290,
  color: "#e0e2ec",
  border: 30,
  radius: 15,
  opacity: 0.68,
  x: 10,
  y: 10,
  style: {
    marginTop: '-58%',
  }
}

const btnShadow = {
  width: 140,
  height: 35,
  color: "#e81f00",
  border: 25,
  radius: 15,
  opacity: 0.15,
  x: 0,
  y: 25,
  style: {
    position: 'absolute',
    bottom: -25,
    right: 0
  }
}




export {
  welcomeSliderShadow,
  btnShadow
}