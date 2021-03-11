import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../styles/theme';
const {width, height} = Dimensions.get('window')


const styles = StyleSheet.create({
    logo:{
        marginTop:17
    },
    loginContainer:{
        backgroundColor:colors.off_white,
        width:'100%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:29,
        paddingVertical:29
    },
    loginText:{
        color:colors.textColor,
        fontSize:14,
        textTransform:'uppercase',
        fontWeight: '700'
    },
});

export default styles;
