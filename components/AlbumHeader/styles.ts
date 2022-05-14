import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        padding:10,
    },
    image: {
        width:200,
        height:200,
        margin:15.
    },
    name:{
        color: 'white' ,
        fontSize:24,
        fontWeight:'bold',
    },
    by:{
        color:'lightgray' ,
        margin:5,
        // fontSize:14
    },
    likes:{
        color:'lightgray',
        margin:5,
        // fontSize:14
    },
    content:{
        flexDirection:'row',
        margin: 10
        // justifyContent:'space-evenly',
    },
    button:{
        margin:10,
        backgroundColor:'#1CD05D',
        width: 175,
        height: 60,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
    },
    buttonText:{
        color: 'white',
        fontSize:22,
        fontWeight:'bold'
    }
})

export default  styles;