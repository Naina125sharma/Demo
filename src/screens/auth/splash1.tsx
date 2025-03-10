import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Images from "../../assets/images";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackAuth } from "../../navigation/authNavigation";

type Props = NativeStackScreenProps<StackAuth,'Splash1'>

const onPressSkip = () => { }

const Splash1 = ({navigation}:Props) => {
    const onPressNext= () =>{navigation.navigate("Splash2")}
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.txtTop}>1/3</Text>
                <Pressable onPress={onPressSkip}><Text style={styles.txtSkip}>Skip</Text></Pressable>
            </View>
            <View style={styles.img}>
                <Image style={styles.imgSplash} source={Images.splash1}></Image>
                <Text style={styles.txtTitle}>Choose Products</Text>
                <Text style={styles.txtDesc}>{`Amet minim mollit non deserunt ullamco est \nsit aliqua dolor do amet sint. Velit officia \nconsequat duis enim velit mollit`}</Text>
            </View>
            <Pressable onPress={onPressNext}><Text style={styles.txtBottom}>Next</Text></Pressable>
        </View>
    )
}
export default Splash1
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 17,
        backgroundColor:'white'
    },
    top: {
        flexDirection: 'row',
        marginTop: 1
    },
    txtTop: {
        flex: 1,
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold'
    },
    txtSkip: {
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold'
    },
    img:{
        marginTop: 110,
        justifyContent:'center',
        alignItems:'center'
    },
    imgSplash: {
        height: 300,
        width: 300,    
    },
    txtTitle:{
        fontSize:24,
        fontFamily:'Montserrat-ExtraBold'
    },
    txtDesc:{
        fontSize:14,
        fontFamily:'Montserrat-SemiBold',
        textAlign:'center',
        marginTop:10,
    },
    txtBottom:{
        textAlign:'right',
        marginTop:140,
        fontSize:18,
        fontFamily:'Montserrat-SemiBold',
        color:'red',
        marginRight:5
    }
})
