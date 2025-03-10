import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Images from "../../assets/images";
import ButtonTitle from "../../../buttonTitle";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackAuth } from "../../navigation/authNavigation";

type Props = NativeStackScreenProps<StackAuth, 'SignIn'>

const SignIn = ({ navigation }: Props) => {
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] =useState('')
    const [password,setPasssword]=useState('')
    const [passwordError ,setPasswordError]=useState('')
    const onPressPwd = () => { navigation.navigate("ForgotPassword") }
    const onPressSignUp = () => { navigation.navigate("SignUp") }

    const validateEmail = ()=>{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!email){
            setEmailError("Email is required")
        }
        else{
            setEmailError('')
        }
    };
    const validatePassword = () => {
        if (!password) {
          setPasswordError("Password is required .");
        } else if (password.length < 6) {
          setPasswordError("Password must be at least 6 characters long.");
        } else {
          setPasswordError("");
        }
      };
    const onPressLog = async () => {
        validateEmail();
        validatePassword();
        if (!emailError || !passwordError){
            console.log("Both Email and Password required")
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.title}>Back!</Text>
            <View style={styles.form} >
                <View style={styles.usernameContainer}>
                    <Image style={styles.userLogo} source={Images.user} />
                    <TextInput
                        style={styles.txtInputEmail}
                        placeholder="Username or Email"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={value => setEmail(value)}
                    ></TextInput>
                </View >
                {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
                <View style={styles.pwdContainer}>
                    <Image style={styles.userLock} source={Images.lock} />
                    <TextInput
                        style={styles.txtInputPwd}
                        placeholder="Password"
                        value={password}
                        onChangeText={value => setPasssword(value)}
                        secureTextEntry={true}
                        onBlur={validatePassword}
                    ></TextInput>
                    <Image style={styles.userEye} source={Images.eye}></Image>
                </View>
                {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
                <Pressable onPress={onPressPwd}><Text style={styles.txtFP}>Forgot Password?</Text></Pressable>
            </View>
            <View style={styles.buttonContainer}>
                <ButtonTitle title="Login" onPressLogin={onPressLog}></ButtonTitle>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.txtbottom}>- OR Continue with -</Text>
                <Image style={styles.buttons} source={Images.buttons}></Image>
            </View>
            <View style={styles.txtContainerSign}>
                <Text>Create an account </Text>
                <Pressable onPress={onPressSignUp}><Text style={styles.txtSignUp}>Sign Up</Text></Pressable>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 19,
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
        color: 'red',
        textAlign: 'right',
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
        marginTop: 75,
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
        fontFamily: 'Montserrat-Medium'
    },
    errorText:{
        color: "red",
        fontSize: 12,
        marginTop: 5,
        fontFamily: "Montserrat-Medium",
    }
})

export default SignIn