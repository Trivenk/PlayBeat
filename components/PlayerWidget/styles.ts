import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        // margin: 15,
        position:'absolute',
        backgroundColor:"#131313",
        bottom:45,
        width: '100%',
        flex:1,
        borderWidth:2,
        borderColor:'#000'
    },
    image:{
        width:75 ,
        height:75,
        flex:0.17,
        marginRight:10,
    },
    right:{
        // justifyContent:'center',
        // marginLeft:10,
        flexDirection:'row',
        // backgroundColor:'red',
        flex:0.65,
        alignItems:'center',

    },
    mainR:{
        flex:0.83,
        flexDirection:'row',
        // backgroundColor:'yellow',
    },
    title:{
        color: 'white',
        fontSize:18,
        margin:10,
        fontWeight:"bold",
    },
    artist:{
        color: 'lightgrey',
        fontSize:18,
        margin:10,

    },
    icons:{
        flex:0.35,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        width:100,
    }
});

export default styles;