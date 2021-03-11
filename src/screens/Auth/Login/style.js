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
        borderRadius:30,
        paddingHorizontal:29,
        paddingTop:29
    },
    loginText:{
        color:colors.textColor,
        fontSize:14,
        textTransform:'uppercase',
        fontWeight:'bold'
    },
});

export default styles;
