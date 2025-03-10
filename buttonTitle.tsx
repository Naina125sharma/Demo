import React from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'

type props = {
    title: string,
    onPressLogin: () => void
}
const ButtonTitle = ({ title, onPressLogin }: props) => {
    return (
        <TouchableHighlight
            activeOpacity={0.6}
            style={styles.btnLogin}
            onPress={onPressLogin}>
            <Text style={styles.btnLoginTitle}>{`${title}`}</Text>
        </TouchableHighlight>
    )
}
export default ButtonTitle
const styles = StyleSheet.create({
    btnLogin: {
        height: 55,
        width: '100%',
        backgroundColor: '#F83758',
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 5,
    },
    btnLoginTitle: {
        color: "white",
        fontWeight: "bold",
        fontSize:20,
        fontFamily:'Montserrat-Medium'
    }
})

