import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import Images from "../../assets/images";
import AppNavigation from "../../navigation/appNavigation";
import AuthNavigation from "../../navigation/authNavigation";
import { getProductsList } from "../../redux/reducers/productSlice";
import { useDispatch } from "react-redux";



const Welcome = () =>{
    const [hideSplash , sethideSplash] = useState(false)
    const dispatch = useDispatch()
    useEffect (() => {

        getProducts()
        setTimeout (() =>{
            sethideSplash(true)
        },5000)
    },[])

    const getProducts = () =>{
        dispatch(getProductsList())
    }

    if (hideSplash === false){
        return <View style={styles.container}>
            <Image resizeMode="contain" style={styles.imgLogo} source={Images.splash}></Image>
        </View>
    }
    return <AuthNavigation/>
}
export default Welcome;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    imgLogo:{
        height:'100%',
        width:'100%'
    }
})
