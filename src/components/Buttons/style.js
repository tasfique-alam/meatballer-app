import { StyleSheet, Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';
import { colors } from '../../styles/theme';
const {width, height} = Dimensions.get('window')


const styles = StyleSheet.create({

    //primary btn style
    text: {
        textTransform:'uppercase',
        fontSize:11
    },
    btnShadow: {
        shadowColor: colors.PRIMARY,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.0581,
        shadowRadius: 14.06,
    },
    btnWrapper:{
        width: 165,
        height: 32,
        borderRadius:30,
        alignItems:'center',
        backgroundColor: '#DD4301',
        justifyContent:'center',
        borderRadius:30,
        elevation:9,
    },

    //primary outline btn style
    outlinetext: {
        textTransform:'uppercase',
        fontSize:11,
        color:colors.PRIMARY
    },
    outlineBtnShadow: {
        shadowColor: colors.PRIMARY,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.0581,
        shadowRadius: 14.06,
    },
    outlineBtnWrapper:{
        width: 165,
        height: 32,
        borderRadius:30,
        alignItems:'center',
        backgroundColor: colors.WHITE,
        borderWidth:1,
        borderColor:colors.PRIMARY,
        justifyContent:'center',
        borderRadius:30,
        elevation:9,
    }
});

export default styles;
