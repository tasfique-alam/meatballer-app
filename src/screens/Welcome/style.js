import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../styles/theme';
const {width, height} = Dimensions.get('window')


const styles = StyleSheet.create({
    title:{
        fontSize:25,
        fontWeight:'bold',
        textTransform:'uppercase',
        color:colors.textColor,
        marginBottom:28,
    },
    btn:{
        marginTop:26
    },
});

export default styles;
