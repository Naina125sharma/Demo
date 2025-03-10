import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Images from "../../assets/images";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackAuth } from "../../navigation/authNavigation";

type Props = NativeStackScreenProps<StackAuth,'Splash2'>

const onPressSkip = () => { }

const Splash2 = ({navigation}:Props) => {
    const onPressPrev = () => {navigation.navigate("Splash1") }
    const onPressNext = () => {navigation.navigate("Splash3") }
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.txtTop}>2/3</Text>
                <Pressable onPress={onPressSkip}><Text style={styles.txtSkip}>Skip</Text></Pressable>
            </View>
            <View style={styles.img}>
                <Image style={styles.imgSplash} source={Images.splash2}></Image>
                <Text style={styles.txtTitle}>Make Payment</Text>
                <Text style={styles.txtDesc}>{`Amet minim mollit non deserunt ullamco est \nsit aliqua dolor do amet sint. Velit officia \nconsequat duis enim velit mollit`}</Text>
            </View>
            <View style={styles.bottom}>
                <Pressable onPress={onPressPrev}><Text style={styles.txtPrev}>Prev</Text></Pressable>
                <Pressable onPress={onPressNext}><Text style={styles.txtBottom}>Next</Text></Pressable>
            </View>
        </View>
    )
}
export default Splash2
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
    img: {
        marginTop: 110,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgSplash: {
        height: 300,
        width: 300,
    },
    txtTitle: {
        fontSize: 24,
        fontFamily: 'Montserrat-ExtraBold'
    },
    txtDesc: {
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
        marginTop: 10,
    },
    bottom: {
        flexDirection: 'row',
        marginTop: 140,
        justifyContent:'space-between'
    },
    txtPrev: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18
    },
    txtBottom: {
        textAlign:'right',
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold',
        color: 'red',
        marginRight: 5,
        
    }
})
