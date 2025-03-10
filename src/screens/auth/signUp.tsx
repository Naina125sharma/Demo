import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Images from "../../assets/images";
import ButtonTitle from "../../../buttonTitle";

const onPressLog = () => { }
const onPressSign = () => { }

const SignUp = () => {
    const [email, setEmail] = useState('')
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create an</Text>
            <Text style={styles.title}>account</Text>
            <View style={styles.form} >
                <View style={styles.usernameContainer}>
                    <Image style={styles.userLogo} source={Images.user} />
                    <TextInput
                        style={styles.txtInputEmail}
                        placeholder="Username or Email"
                        keyboardType="email-address"
                    ></TextInput>
                </View >
                <View style={styles.pwdContainer}>
                    <Image style={styles.userLock} source={Images.lock} />
                    <TextInput
                        style={styles.txtInputPwd}
                        placeholder="Password"
                        secureTextEntry={true}
                    ></TextInput>
                    <Image style={styles.userEye} source={Images.eye}></Image>
                </View>
                <View style={styles.pwdContainer}>
                    <Image style={styles.userLock} source={Images.lock} />
                    <TextInput
                        style={styles.txtInputPwd}
                        placeholder="ConfirmPassword"
                        secureTextEntry={true}
                    ></TextInput>
                    <Image style={styles.userEye} source={Images.eye}></Image>
                </View>
                <Text style={styles.txtFP}>By Clicking the Register button,you agree to the public offer</Text>
            </View>
            <View style={styles.buttonContainer}>
                <ButtonTitle title="Create Account" onPressLogin={onPressSign}></ButtonTitle>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.txtbottom}>- OR Continue with -</Text>
                <Image style={styles.buttons} source={Images.buttons}></Image>
            </View>
            <View style={styles.txtContainerSign}>
                <Text>l Already Have an Account </Text>
                <Pressable onPress={onPressLog}><Text style={styles.txtSignUp}>Login</Text></Pressable>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 19
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        fontWeight: '700',
        fontSize: 36,
        marginLeft: 32,
        marginRight: 26,
    },
    form: {
        marginTop: 36,
        marginLeft: 32,
        marginRight: 26,
    },
    usernameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#F3F3F3'
    },
    txtInputEmail: {
        fontSize: 12,
        fontFamily: 'Montserrat-Medium'
    },
    userLogo: {
        height: 24,
        width: 24,
        margin: 15
    },
    pwdContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#F3F3F3',
        marginTop: 31
    },
    txtInputPwd: {
        flex: 1,
        fontSize: 12,
        fontFamily: 'Montserrat-Medium'
    },
    userLock: {
        width: 16,
        height: 20,
        margin: 15
    },
    userEye: {
        height: 20,
        width: 20,
        margin: 10
    },
    txtFP: {
        fontSize: 12,
        marginTop: 9,
        fontFamily: 'Montserrat-Medium'
    },
    buttonContainer: {
        marginTop: 52,
        marginLeft: 29,
        marginRight: 29,
    },
    bottomContainer: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtbottom: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 12
    },
    buttons: {
        width: 185,
        height: 56,
        marginTop: 20
    },
    txtContainerSign: {
        flexDirection: 'row',
        fontFamily: 'Montserrat-Medium',
        marginTop: 28,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtSignUp: {
        color: 'red',
        fontFamily: 'Montserrat-Medium',
        textDecorationLine:'underline'
    }
})

export default SignUp