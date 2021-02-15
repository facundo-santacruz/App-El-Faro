import React, { Component, useEffect } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import firebase from "../../config";
import Dashboard from '../Dashboard/Dashboard';

const LoadingScreen = ({navigation}) => {
    
    useEffect(() => {
        checkIfLoggedIn()
    })

    const checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                console.log(user.providerData[0])
                navigation.navigate("Dashboard", {user: user.providerData[0]})
            }else{
                navigation.navigate("Login", {user: "facundo"})
            }
        })
    }
    
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default LoadingScreen;