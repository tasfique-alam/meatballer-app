
import { Dimensions } from 'react-native'
const {width, height} = Dimensions.get('window')


const welcomeSliderShadow = {
  width: width - 50,
  height: 302,
  color: "#e0e2ec",
  border: 7,
  radius: 25,
  opacity: 0.78,
  x: 10,
  y: 10,
  style: {marginTop:'-60%' }
}




export {
  welcomeSliderShadow,
}