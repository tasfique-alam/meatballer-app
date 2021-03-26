import { StyleSheet, Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';
import { colors } from '../../styles/theme';
const { width, height } = Dimensions.get('window')


const styles = StyleSheet.create({
    bgImg: {
        width: '100%',
        height: '90%',
        marginTop: '-28%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginTop: 60,
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#193566',
    },
    des: {
        fontSize: 14,
        paddingVertical: 20,
        lineHeight: 25,
        color: '#193566'
    },
    sliderBlock: {
        backgroundColor: colors.off_white,
        width: width-50,
        height: 289,
        position: 'relative',
        borderRadius: 15,
        padding: 20,
    },
    btn: {
        width: 148,
        height: 35,
        alignItems: 'center',
        backgroundColor: '#DD4301',
        justifyContent: 'center',
        position: 'absolute',
        borderRadius: 30,
        bottom: -25,
        right: 10
    }
});

export default styles;
