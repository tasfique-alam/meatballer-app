import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme';


const styles = StyleSheet.create({
    bgImg: {
        width: '100%',
        height: '90%',
        marginTop: '-26%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginTop: 60,
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    title:{
        fontSize:16,
        fontWeight:'bold'
    },
    des:{
        fontSize:14,
        paddingVertical:20,
        lineHeight:25,
        color:'#193566'
    },
    sliderBlock: {
        backgroundColor: colors.off_white,
        width: '100%',
        height: 300,
        position:'relative',
        borderRadius: 15,
        padding:30,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 12,
        // },
        // shadowOpacity: 0.58,
        // shadowRadius: 16.00,
        elevation: 20,
    },
    shadow: {
        shadowColor: "#d8dbe8",
        shadowOffset: {
            width: 20,
            height: 10,
        },
        shadowOpacity: 0.109,
        shadowRadius: 25.06,
        marginTop: '-60%',
        backgroundColor: colors.white,
        width: 360,
        height: 300,
        // ...include most of View/Layout styles
    },
    btnShadow: {
        shadowColor: "#DD4301",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.051,
        shadowRadius: 13.06,
        backgroundColor: '#DD4301',
        width: 115,
        height: 35,
        position:'absolute',
        borderRadius:30,
        bottom:-40,
        right:40
    },
    btn:{
        width: 115,
        height: 35,
        borderRadius:30,
        alignItems:'center',
        backgroundColor: '#DD4301',
        justifyContent:'center',
        position:'absolute',
        borderRadius:30,
        bottom:0,
        right:0,
        elevation:10
    }
});

export default styles;
