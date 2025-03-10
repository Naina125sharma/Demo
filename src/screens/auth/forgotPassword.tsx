import React from "react";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";
import Images from "../../assets/images";
import ButtonTitle from "../../../buttonTitle";

const onPressSubmit = () =>{}

const ForgotPassword = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Forgot</Text>
                <Text style={styles.title}>password?</Text>
            </View>
            <View style={styles.usernameContainer}>
                <Image style={styles.mailLogo} source={Images.mail} />
                <TextInput
                    style={styles.txtInputEmail}
                    placeholder="Enter your email address"
                    keyboardType="email-address"
                ></TextInput>
            </View>
            <Text style={styles.txtMsg}>{`We will send you a message to set or reset \n your new password`}</Text>
            <ButtonTitle title="Submit" onPressLogin={onPressSubmit}></ButtonTitle>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 19,
        marginLeft: 32,
        marginRight: 26,
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        fontWeight: '700',
        fontSize: 36,
    },
    usernameContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#F3F3F3',
        marginTop:32
    },
    mailLogo:{
        height: 24,
        width: 24,
        margin: 15
    },
    txtInputEmail:{
        fontSize: 12,
        fontFamily: 'Montserrat-Medium',
        
    },
    txtMsg:{
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
        marginVertical:26,
        height:48
        
    }
})

export default ForgotPassword