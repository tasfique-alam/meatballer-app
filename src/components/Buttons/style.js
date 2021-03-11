import { StyleSheet, Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';
import { colors } from '../../styles/theme';
const {width, height} = Dimensions.get('window')


const styles = StyleSheet.create({
    text: {

    },
    btnShadow: {
        shadowColor: "#DD4301",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.0581,
        shadowRadius: 14.06,
        backgroundColor: colors.PRIMARY,
        width: 165,
        height: 32,
        borderRadius:30,
    },
    btnWrapper:{
        width: 165,
        height: 32,
        borderRadius:30,
        alignItems:'center',
        backgroundColor: '#DD4301',
        justifyContent:'center',
        position:'absolute',
        borderRadius:30,
        elevation:9,
    }
});

export default styles;
