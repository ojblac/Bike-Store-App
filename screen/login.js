import React from "react";
import { View } from "react-native";
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function login({navigation}) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.imageStyle}
                source={require("C:/Users/JOSHUA/Desktop/codes/myreactproject/assets/sunsetbike.jpg")} />
            <Text style={styles.welcomeText}>Welcome to</Text>
            <Text style={styles.PBKtext}>Power Bike Shop</Text>

            <View style={styles.buttonView}>
                <TouchableOpacity onPress={() => {navigation.navigate("home")}} style={styles.googleButton}>
                    <AntDesign name="google" size={26} color="black" />
                    <Text style={styles.buttonText}> Login with Gmail</Text>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => {navigation.navigate("home")}}  style={styles.appleButton}>
                    <AntDesign name="apple1" size={26} color="white" />
                    <Text style={styles.buttonText2}> Login with Apple</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttomview}>
                <Text style={styles.buttomtext}>Not a member?</Text>
                <TouchableOpacity style={styles.signButton}>
                    <Text style={styles.buttomtext2}> Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        width: 200,
        height: 200,
        borderRadius: 20,
        transform: [{ rotate: "45deg" }],
        marginBottom: 70,
    },
    welcomeText: {
        fontSize: 30,
        marginBottom: 0,
    },
    PBKtext: {
        fontSize: 30,
        fontWeight: "bold",

    },

    buttomtext: {
        fontSize: 14,
        color: "gray",
        marginTop: 12,


    },
    buttomtext2: {
        fontSize: 14,
        color: "#ff792f",
        fontWeight: "bold",
        marginTop: 12,


    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",



    },
    buttonText2: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",


    },
    googleButton: {
        backgroundColor: "#e6e6e6",
        padding: 15,
        borderRadius: 12,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "center",


    },
    appleButton: {
        backgroundColor: "black",
        padding: 15,
        borderRadius: 12,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "center",
    },
    signButton: {
        backgroundColor: "white",
        borderRadius: 12,


    },
    buttonView: {
        width: "85%"
    },
    buttomview: {
        flexDirection: "row",
    },
});