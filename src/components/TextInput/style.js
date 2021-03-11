import { StyleSheet, Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';
import { colors } from '../../styles/theme';
const {width, height} = Dimensions.get('window')


const styles = StyleSheet.create({

    inputShadow: {
        shadowColor: colors.PRIMARY,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.0581,
        shadowRadius: 14.06,
        width:100,
        height: 35,
    },
    input:{
        width: '100%',
        borderRadius:30,
    },
});

export default styles;
