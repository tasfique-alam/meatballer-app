import { StyleSheet, Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';
import { colors } from '../../styles/theme';
const {width, height} = Dimensions.get('window')


const styles = StyleSheet.create({
    input:{
        width: '100%',
        // borderRadius:30,
        marginLeft:12,
        alignItems:'center',
        justifyContent:'center',
        marginTop:5,
        height:35
    },
});

export default styles;
